import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PoolCage3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x041c24, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 3, 10);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Tropical Teal & Golden Sun)
    const ambientLight = new THREE.AmbientLight(0x0e3a47, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x00d4bd, 2.5);
    sunLight.position.set(10, 20, 15);
    scene.add(sunLight);

    const poolGlowLight = new THREE.PointLight(0x00b4d8, 3, 20);
    poolGlowLight.position.set(0, -1, 0);
    scene.add(poolGlowLight);

    const accentLight = new THREE.PointLight(0xf77f00, 1.5, 15);
    accentLight.position.set(-8, 5, -5);
    scene.add(accentLight);

    // 3. 3D Pool Structure Group
    const cageGroup = new THREE.Group();
    scene.add(cageGroup);

    // Pool Water Surface
    const poolGeo = new THREE.PlaneGeometry(16, 24, 32, 32);
    const poolMat = new THREE.MeshStandardMaterial({
      color: 0x0077b6,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const poolMesh = new THREE.Mesh(poolGeo, poolMat);
    poolMesh.rotation.x = -Math.PI / 2;
    poolMesh.position.set(0, -2, 0);
    cageGroup.add(poolMesh);

    // Pool Deck / Patio Border
    const deckGeo = new THREE.RingGeometry(8, 12, 4, 1);
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x0c2d38,
      roughness: 0.6,
      metalness: 0.2,
      side: THREE.DoubleSide,
    });
    const deckMesh = new THREE.Mesh(deckGeo, deckMat);
    deckMesh.rotation.x = -Math.PI / 2;
    deckMesh.rotation.z = Math.PI / 4;
    deckMesh.position.set(0, -2.05, 0);
    cageGroup.add(deckMesh);

    // Aluminum Cage Frame (Mansard / Gable Roof Structure)
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x00b4d8,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x003d52,
    });

    const beamRadius = 0.08;

    // Helper for creating cage beams
    const createBeam = (p1: THREE.Vector3, p2: THREE.Vector3) => {
      const distance = p1.distanceTo(p2);
      const cylinder = new THREE.CylinderGeometry(beamRadius, beamRadius, distance, 8);
      const mesh = new THREE.Mesh(cylinder, frameMaterial);
      const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mesh.position.copy(midPoint);
      mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
      return mesh;
    };

    // Cage dimensions
    const width = 10;
    const length = 14;
    const wallHeight = 4;
    const roofPeakHeight = 6.5;

    // Outer corner posts
    const corners = [
      new THREE.Vector3(-width / 2, -2, -length / 2),
      new THREE.Vector3(width / 2, -2, -length / 2),
      new THREE.Vector3(width / 2, -2, length / 2),
      new THREE.Vector3(-width / 2, -2, length / 2),
    ];

    const wallTops = corners.map((c) => new THREE.Vector3(c.x, c.y + wallHeight, c.z));
    const roofPeakNodes = [
      new THREE.Vector3(-width / 3, -2 + roofPeakHeight, -length / 3),
      new THREE.Vector3(width / 3, -2 + roofPeakHeight, -length / 3),
      new THREE.Vector3(width / 3, -2 + roofPeakHeight, length / 3),
      new THREE.Vector3(-width / 3, -2 + roofPeakHeight, length / 3),
    ];

    // Vertical Posts
    corners.forEach((bottom, i) => {
      const top = wallTops[i];
      cageGroup.add(createBeam(bottom, top));
    });

    // Horizontal Wall Perimeter
    for (let i = 0; i < 4; i++) {
      const next = (i + 1) % 4;
      cageGroup.add(createBeam(wallTops[i], wallTops[next]));
    }

    // Mansard Roof Beams
    for (let i = 0; i < 4; i++) {
      const next = (i + 1) % 4;
      cageGroup.add(createBeam(wallTops[i], roofPeakNodes[i]));
      cageGroup.add(createBeam(roofPeakNodes[i], roofPeakNodes[next]));
    }

    // Screen Mesh Panels (translucent grid)
    const screenGeo = new THREE.PlaneGeometry(width - 0.2, wallHeight - 0.2, 10, 10);
    const screenMat = new THREE.MeshBasicMaterial({
      color: 0x00f5d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
    });

    // Front & back screen panels
    const screenFront = new THREE.Mesh(screenGeo, screenMat);
    screenFront.position.set(0, -2 + wallHeight / 2, length / 2);
    cageGroup.add(screenFront);

    const screenBack = new THREE.Mesh(screenGeo, screenMat);
    screenBack.position.set(0, -2 + wallHeight / 2, -length / 2);
    cageGroup.add(screenBack);

    // Side screen panels
    const sideScreenGeo = new THREE.PlaneGeometry(length - 0.2, wallHeight - 0.2, 10, 10);
    const screenLeft = new THREE.Mesh(sideScreenGeo, screenMat);
    screenLeft.rotation.y = Math.PI / 2;
    screenLeft.position.set(-width / 2, -2 + wallHeight / 2, 0);
    cageGroup.add(screenLeft);

    const screenRight = new THREE.Mesh(sideScreenGeo, screenMat);
    screenRight.rotation.y = Math.PI / 2;
    screenRight.position.set(width / 2, -2 + wallHeight / 2, 0);
    cageGroup.add(screenRight);

    // 4. Floating 3D Atmosphere Particles (Air & Water Specs)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 30;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 30;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x00d4bd,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Scroll Interaction Logic
    let currentScroll = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = totalScroll > 0 ? window.scrollY / totalScroll : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll interpolation
      currentScroll += (targetScroll - currentScroll) * 0.05;

      // Rotate 3D cage structure gently over time + scroll
      cageGroup.rotation.y = elapsedTime * 0.08 + currentScroll * Math.PI * 1.5;
      cageGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.04 + (currentScroll - 0.5) * 0.2;

      // Animate pool water vertices slightly for ripple effect
      const pos = poolGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        const z = Math.sin(u * 0.8 + elapsedTime * 2) * 0.08 + Math.cos(v * 0.8 + elapsedTime * 1.5) * 0.08;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;

      // Camera position moves dynamically with scroll progress
      camera.position.x = Math.sin(currentScroll * Math.PI * 2) * 4;
      camera.position.y = 2 + Math.sin(currentScroll * Math.PI) * 3 + (1 - currentScroll) * 2;
      camera.position.z = 11 - currentScroll * 5;
      camera.lookAt(0, 0.5, 0);

      // Pulse lights
      poolGlowLight.intensity = 2.5 + Math.sin(elapsedTime * 2) * 0.8;

      // Animate particles
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
}
