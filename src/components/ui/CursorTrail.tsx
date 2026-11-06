import { useRef, useEffect } from "react";

type CursorTrailProps = {
  color: { r: number; g: number; b: number };
};

const TRAIL_LENGTH = 60;
const MAX_WIDTH = 12;

const CursorTrail = ({ color }: CursorTrailProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl || window.innerWidth < 992) return;

    const context = canvasEl.getContext("2d");
    if (!context) return;

    const canvas = canvasEl;
    const ctx = context;

    const dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const trail: { x: number; y: number }[] = [];
    const left: { x: number; y: number }[] = [];
    const right: { x: number; y: number }[] = [];
    const mouse = { x: w / 2, y: h / 2 };
    let rafId: number;

    function handleResize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      if (trail.length === 0) {
        trail.push({ x: mouse.x, y: mouse.y });
      } else {
        const head = trail[0];
        trail.unshift({
          x: head.x + (mouse.x - head.x) * 0.4,
          y: head.y + (mouse.y - head.y) * 0.4,
        });
      }
      if (trail.length > TRAIL_LENGTH) trail.length = TRAIL_LENGTH;

      if (trail.length < 4) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      left.length = 0;
      right.length = 0;

      for (let i = 0; i < trail.length; i++) {
        const t = i / (trail.length - 1);
        const halfW = (MAX_WIDTH * (1 - t * t)) / 2;

        let dx: number, dy: number;
        if (i === 0) {
          dx = trail[1].x - trail[0].x;
          dy = trail[1].y - trail[0].y;
        } else if (i === trail.length - 1) {
          dx = trail[i].x - trail[i - 1].x;
          dy = trail[i].y - trail[i - 1].y;
        } else {
          dx = trail[i + 1].x - trail[i - 1].x;
          dy = trail[i + 1].y - trail[i - 1].y;
        }

        const len = Math.sqrt(dx * dx + dy * dy) || 1;
        const normalX = -dy / len;
        const normalY = dx / len;

        left.push({ x: trail[i].x + normalX * halfW, y: trail[i].y + normalY * halfW });
        right.push({ x: trail[i].x - normalX * halfW, y: trail[i].y - normalY * halfW });
      }

      ctx.beginPath();
      ctx.moveTo(left[0].x, left[0].y);

      for (let i = 1; i < left.length; i++) {
        const prev = left[i - 1];
        const curr = left[i];
        ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
      }
      ctx.lineTo(left[left.length - 1].x, left[left.length - 1].y);

      for (let i = right.length - 1; i >= 1; i--) {
        const prev = right[i];
        const curr = right[i - 1];
        ctx.quadraticCurveTo(prev.x, prev.y, (prev.x + curr.x) / 2, (prev.y + curr.y) / 2);
      }
      ctx.lineTo(right[0].x, right[0].y);
      ctx.closePath();

      const grad = ctx.createLinearGradient(
        trail[0].x,
        trail[0].y,
        trail[trail.length - 1].x,
        trail[trail.length - 1].y
      );
      grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.65)`);
      grad.addColorStop(0.6, `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`);
      grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [color.r, color.g, color.b]);

  return (
    <div className="fixed inset-0 z-1000 pointer-events-none w-full h-full hidden lg:block">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default CursorTrail;
