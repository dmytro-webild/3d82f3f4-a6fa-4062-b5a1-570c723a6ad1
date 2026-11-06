import { useEffect, useRef } from "react";

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  speed: number;
}

export default function PoolCage3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let currentScroll = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    // Generate floating ambient particles
    const particles: Particle[] = Array.from({ length: 90 }, () => ({
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 600,
      z: (Math.random() - 0.5) * 800,
      size: Math.random() * 2.5 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
    }));

    // 3D Pool enclosure structure geometry (Corner nodes, roof nodes, frame lines)
    const cageWidth = 320;
    const cageLength = 480;
    const wallHeight = 160;
    const roofHeight = 260;

    // Base corners & top wall nodes
    const baseNodes: Vec3[] = [
      { x: -cageWidth / 2, y: wallHeight / 2, z: -cageLength / 2 },
      { x: cageWidth / 2, y: wallHeight / 2, z: -cageLength / 2 },
      { x: cageWidth / 2, y: wallHeight / 2, z: cageLength / 2 },
      { x: -cageWidth / 2, y: wallHeight / 2, z: cageLength / 2 },
    ];

    const wallNodes: Vec3[] = [
      { x: -cageWidth / 2, y: -wallHeight / 2, z: -cageLength / 2 },
      { x: cageWidth / 2, y: -wallHeight / 2, z: -cageLength / 2 },
      { x: cageWidth / 2, y: -wallHeight / 2, z: cageLength / 2 },
      { x: -cageWidth / 2, y: -wallHeight / 2, z: cageLength / 2 },
    ];

    const roofPeakNodes: Vec3[] = [
      { x: -cageWidth / 3, y: -roofHeight / 2, z: -cageLength / 3 },
      { x: cageWidth / 3, y: -roofHeight / 2, z: -cageLength / 3 },
      { x: cageWidth / 3, y: -roofHeight / 2, z: cageLength / 3 },
      { x: -cageWidth / 3, y: -roofHeight / 2, z: cageLength / 3 },
    ];

    // Frame connection line pairs [from, to]
    const connections: [Vec3, Vec3][] = [];

    // Vertical posts
    for (let i = 0; i < 4; i++) {
      connections.push([baseNodes[i], wallNodes[i]]);
    }

    // Base perimeter
    for (let i = 0; i < 4; i++) {
      connections.push([baseNodes[i], baseNodes[(i + 1) % 4]]);
    }

    // Wall top perimeter
    for (let i = 0; i < 4; i++) {
      connections.push([wallNodes[i], wallNodes[(i + 1) % 4]]);
    }

    // Mansard roof slopes & top perimeter
    for (let i = 0; i < 4; i++) {
      connections.push([wallNodes[i], roofPeakNodes[i]]);
      connections.push([roofPeakNodes[i], roofPeakNodes[(i + 1) % 4]]);
    }

    // Intermediate ribs for realistic cage mesh
    const numRibs = 5;
    for (let i = 1; i < numRibs; i++) {
      const t = i / numRibs;
      const zOffset = -cageLength / 2 + t * cageLength;
      // Side ribs
      connections.push([
        { x: -cageWidth / 2, y: wallHeight / 2, z: zOffset },
        { x: -cageWidth / 2, y: -wallHeight / 2, z: zOffset },
      ]);
      connections.push([
        { x: cageWidth / 2, y: wallHeight / 2, z: zOffset },
        { x: cageWidth / 2, y: -wallHeight / 2, z: zOffset },
      ]);
      // Roof arch ribs
      connections.push([
        { x: -cageWidth / 2, y: -wallHeight / 2, z: zOffset },
        { x: -cageWidth / 3, y: -roofHeight / 2, z: zOffset },
      ]);
      connections.push([
        { x: -cageWidth / 3, y: -roofHeight / 2, z: zOffset },
        { x: cageWidth / 3, y: -roofHeight / 2, z: zOffset },
      ]);
      connections.push([
        { x: cageWidth / 3, y: -roofHeight / 2, z: zOffset },
        { x: cageWidth / 2, y: -wallHeight / 2, z: zOffset },
      ]);
    }

    let time = 0;

    const project = (p: Vec3, rotX: number, rotY: number) => {
      // Rotation Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // Rotation X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      const fov = 700;
      const distance = 750;
      const scale = fov / (fov + z2 + distance);

      return {
        x: width / 2 + x1 * scale,
        y: height / 2 + y2 * scale,
        scale,
        z: z2 + distance,
      };
    };

    const render = () => {
      time += 0.015;
      currentScroll += (targetScroll - currentScroll) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const rotY = time * 0.12 + currentScroll * Math.PI * 1.2;
      const rotX =
        0.25 + Math.sin(time * 0.4) * 0.05 + (currentScroll - 0.5) * 0.2;

      // 1. Draw glowing background pool light reflection glow
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2 + 50,
        50,
        width / 2,
        height / 2 + 50,
        Math.max(width, height) * 0.5
      );
      gradient.addColorStop(0, "rgba(0, 212, 189, 0.08)");
      gradient.addColorStop(0.5, "rgba(0, 119, 182, 0.04)");
      gradient.addColorStop(1, "rgba(4, 28, 36, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw animated 3D pool water surface ripples at bottom
      ctx.save();
      ctx.beginPath();
      const waterGridCols = 12;
      const waterGridRows = 16;
      ctx.strokeStyle = "rgba(0, 180, 216, 0.15)";
      ctx.lineWidth = 1;

      for (let r = 0; r <= waterGridRows; r++) {
        const vz = (r / waterGridRows - 0.5) * cageLength * 1.2;
        let prevPoint: { x: number; y: number } | null = null;
        for (let c = 0; c <= waterGridCols; c++) {
          const vx = (c / waterGridCols - 0.5) * cageWidth * 1.2;
          const vy = wallHeight / 2 + Math.sin(c * 0.8 + r * 0.5 + time * 2) * 6;
          const proj = project({ x: vx, y: vy, z: vz }, rotX, rotY);
          if (c === 0) {
            ctx.moveTo(proj.x, proj.y);
          } else if (prevPoint) {
            ctx.lineTo(proj.x, proj.y);
          }
          prevPoint = proj;
        }
      }
      ctx.stroke();
      ctx.restore();

      // 3. Draw 3D Pool Enclosure Beams
      ctx.save();
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(0, 212, 189, 0.5)";

      connections.forEach(([p1, p2]) => {
        const proj1 = project(p1, rotX, rotY);
        const proj2 = project(p2, rotX, rotY);

        const avgZ = (proj1.z + proj2.z) / 2;
        const opacity = Math.max(0.1, Math.min(0.8, 800 / avgZ));

        ctx.strokeStyle = `rgba(0, 212, 189, ${opacity * 0.7})`;
        ctx.lineWidth = Math.max(1, 2 * proj1.scale);

        ctx.beginPath();
        ctx.moveTo(proj1.x, proj1.y);
        ctx.lineTo(proj2.x, proj2.y);
        ctx.stroke();
      });
      ctx.restore();

      // 4. Floating Particles
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -300) p.y = 300;

        const proj = project(p, rotX * 0.5, rotY * 0.5);
        if (proj.scale > 0) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 245, 212, ${p.alpha * proj.scale})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#00f5d4";
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
}
