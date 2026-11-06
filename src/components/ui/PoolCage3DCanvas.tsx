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
  color: string;
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
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    // Generate ambient luxury particles in cyan and gold hues
    const particleColors = [
      "rgba(0, 212, 189, ",
      "rgba(0, 180, 216, ",
      "rgba(212, 175, 55, ",
      "rgba(255, 215, 0, ",
    ];

    const particles: Particle[] = Array.from({ length: 110 }, () => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 700,
      z: (Math.random() - 0.5) * 900,
      size: Math.random() * 2.8 + 1,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.4 + 0.15,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    }));

    // Architectural Mansard Pool Enclosure Geometry
    const cageWidth = 360;
    const cageLength = 540;
    const wallHeight = 180;
    const roofHeight = 290;

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
      { x: -cageWidth / 3.2, y: -roofHeight / 2, z: -cageLength / 3.2 },
      { x: cageWidth / 3.2, y: -roofHeight / 2, z: -cageLength / 3.2 },
      { x: cageWidth / 3.2, y: -roofHeight / 2, z: cageLength / 3.2 },
      { x: -cageWidth / 3.2, y: -roofHeight / 2, z: cageLength / 3.2 },
    ];

    // Frame connection line pairs [from, to, isMain]
    const connections: [Vec3, Vec3, boolean?][] = [];

    // Vertical posts
    for (let i = 0; i < 4; i++) {
      connections.push([baseNodes[i], wallNodes[i], true]);
    }

    // Base perimeter
    for (let i = 0; i < 4; i++) {
      connections.push([baseNodes[i], baseNodes[(i + 1) % 4]]);
    }

    // Wall top perimeter
    for (let i = 0; i < 4; i++) {
      connections.push([wallNodes[i], wallNodes[(i + 1) % 4], true]);
    }

    // Mansard roof slopes & top perimeter
    for (let i = 0; i < 4; i++) {
      connections.push([wallNodes[i], roofPeakNodes[i], true]);
      connections.push([roofPeakNodes[i], roofPeakNodes[(i + 1) % 4], true]);
    }

    // Intermediate structural ribs for hurricane-rated architectural look
    const numRibs = 7;
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
        { x: -cageWidth / 3.2, y: -roofHeight / 2, z: zOffset },
      ]);
      connections.push([
        { x: -cageWidth / 3.2, y: -roofHeight / 2, z: zOffset },
        { x: cageWidth / 3.2, y: -roofHeight / 2, z: zOffset },
      ]);
      connections.push([
        { x: cageWidth / 3.2, y: -roofHeight / 2, z: zOffset },
        { x: cageWidth / 2, y: -wallHeight / 2, z: zOffset },
      ]);
    }

    let time = 0;

    const project = (p: Vec3, rotX: number, rotY: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      const fov = 750;
      const distance = 800;
      const scale = fov / (fov + z2 + distance);

      return {
        x: width / 2 + x1 * scale,
        y: height / 2 + y2 * scale,
        scale,
        z: z2 + distance,
      };
    };

    const render = () => {
      time += 0.012;
      currentScroll += (targetScroll - currentScroll) * 0.06;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Scroll-driven 3D rotation & translation
      const rotY = time * 0.08 + currentScroll * Math.PI * 1.5 + mouseX * 0.15;
      const rotX =
        0.28 + Math.sin(time * 0.3) * 0.04 + (currentScroll - 0.5) * 0.35 + mouseY * 0.1;

      // 1. Luxury ambient background radial gradient glow
      const gradient = ctx.createRadialGradient(
        width / 2 + mouseX * 60,
        height / 2 + 60 + mouseY * 40,
        40,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.55
      );
      gradient.addColorStop(0, "rgba(0, 180, 216, 0.09)");
      gradient.addColorStop(0.35, "rgba(212, 175, 55, 0.04)");
      gradient.addColorStop(0.7, "rgba(4, 28, 36, 0.03)");
      gradient.addColorStop(1, "rgba(3, 19, 26, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. 3D Florida Pool Water Surface Ripples & Reflection Grid
      ctx.save();
      ctx.beginPath();
      const waterGridCols = 14;
      const waterGridRows = 18;
      ctx.strokeStyle = "rgba(0, 212, 189, 0.12)";
      ctx.lineWidth = 1;

      for (let r = 0; r <= waterGridRows; r++) {
        const vz = (r / waterGridRows - 0.5) * cageLength * 1.3;
        let prevPoint: { x: number; y: number } | null = null;
        for (let c = 0; c <= waterGridCols; c++) {
          const vx = (c / waterGridCols - 0.5) * cageWidth * 1.3;
          const vy = wallHeight / 2 + Math.sin(c * 0.7 + r * 0.4 + time * 1.8) * 7;
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

      // 3. Render 3D Architectural Aluminum Enclosure Beams & Gold Specular Highlights
      ctx.save();
      connections.forEach(([p1, p2, isMain]) => {
        const proj1 = project(p1, rotX, rotY);
        const proj2 = project(p2, rotX, rotY);

        const avgZ = (proj1.z + proj2.z) / 2;
        const opacity = Math.max(0.12, Math.min(0.85, 850 / avgZ));

        ctx.beginPath();
        ctx.moveTo(proj1.x, proj1.y);
        ctx.lineTo(proj2.x, proj2.y);

        if (isMain) {
          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity * 0.75})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
          ctx.lineWidth = Math.max(1.5, 2.8 * proj1.scale);
        } else {
          ctx.strokeStyle = `rgba(0, 212, 189, ${opacity * 0.55})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = "rgba(0, 212, 189, 0.3)";
          ctx.lineWidth = Math.max(1, 1.8 * proj1.scale);
        }
        ctx.stroke();

        // Node specular points on main frame joints
        if (isMain) {
          ctx.beginPath();
          ctx.arc(proj1.x, proj1.y, 2.5 * proj1.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 223, 128, ${opacity * 0.9})`;
          ctx.fill();
        }
      });
      ctx.restore();

      // 4. Render Floating 3D Ambient Light Particles with Depth Parallax
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -350) p.y = 350;

        const proj = project(p, rotX * 0.6, rotY * 0.6);
        if (proj.scale > 0) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha * proj.scale})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color.includes("212, 175") ? "#d4af37" : "#00f5d4";
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.9 }}
    />
  );
}
