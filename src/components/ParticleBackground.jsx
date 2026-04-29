import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let smoothMouse = { x: mouse.x, y: mouse.y };
    let time = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Flowing blobs ──
    const blobs = [
      { x: 0.3, y: 0.3, r: 250, color: [34, 197, 94], speed: 0.0008, phase: 0 },
      { x: 0.7, y: 0.6, r: 200, color: [59, 130, 246], speed: 0.0006, phase: 2 },
      { x: 0.5, y: 0.8, r: 180, color: [139, 92, 246], speed: 0.001, phase: 4 },
      { x: 0.2, y: 0.7, r: 160, color: [16, 185, 129], speed: 0.0007, phase: 1 },
      { x: 0.8, y: 0.2, r: 220, color: [34, 197, 94], speed: 0.0009, phase: 3 },
    ];

    // ── Particles ──
    const PARTICLE_COUNT = 60;
    const CONNECTION_DIST = 120;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.baseOpacity = Math.random() * 0.4 + 0.2;
      }
      update() {
        // Gentle attraction to mouse
        const dx = smoothMouse.x - this.x;
        const dy = smoothMouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300 && dist > 30) {
          this.vx += (dx / dist) * 0.02;
          this.vy += (dy / dist) * 0.02;
        } else if (dist <= 30) {
          this.vx -= (dx / dist) * 0.1;
          this.vy -= (dy / dist) * 0.1;
        }

        // Flow field influence
        const angle = Math.sin(this.x * 0.003 + time * 0.5) * Math.cos(this.y * 0.003 + time * 0.3) * Math.PI;
        this.vx += Math.cos(angle) * 0.01;
        this.vy += Math.sin(angle) * 0.01;

        // Damping
        this.vx *= 0.97;
        this.vy *= 0.97;

        this.x += this.vx;
        this.y += this.vy;

        // Wrap
        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    // ── Wave function ──
    function drawWaves() {
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const yBase = canvas.height * (0.4 + w * 0.2);
        const amplitude = 40 + w * 15;
        const frequency = 0.003 - w * 0.0005;
        const speed = 0.3 + w * 0.15;
        const opacity = 0.03 - w * 0.008;

        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 4) {
          const mouseInfluence = Math.exp(-Math.pow((x - smoothMouse.x) / 200, 2)) * 30;
          const y = yBase
            + Math.sin(x * frequency + time * speed) * amplitude
            + Math.sin(x * frequency * 2.5 + time * speed * 1.3) * (amplitude * 0.3)
            - mouseInfluence;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yBase - amplitude, 0, canvas.height);
        grad.addColorStop(0, `rgba(34, 197, 94, ${opacity})`);
        grad.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.5})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    // ── Main render ──
    function animate() {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.05;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.05;

      // Draw waves
      drawWaves();

      // Draw blobs
      blobs.forEach(blob => {
        const cx = canvas.width * blob.x + Math.sin(time * blob.speed * 1000 + blob.phase) * 100;
        const cy = canvas.height * blob.y + Math.cos(time * blob.speed * 800 + blob.phase) * 80;
        // Mouse influence on blobs
        const mdx = smoothMouse.x - cx;
        const mdy = smoothMouse.y - cy;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const mx = mdist < 400 ? mdx * 0.05 : 0;
        const my = mdist < 400 ? mdy * 0.05 : 0;

        const gradient = ctx.createRadialGradient(
          cx + mx, cy + my, 0,
          cx + mx, cy + my, blob.r
        );
        gradient.addColorStop(0, `rgba(${blob.color.join(',')}, 0.12)`);
        gradient.addColorStop(0.5, `rgba(${blob.color.join(',')}, 0.04)`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx + mx, cy + my, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particles
      particles.forEach(p => p.update());

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        const dx = smoothMouse.x - p.x;
        const dy = smoothMouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = dist < 150 ? (1 - dist / 150) * 0.5 : 0;
        const opacity = p.baseOpacity + glow;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + glow * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${opacity})`;
        ctx.fill();

        if (glow > 0.1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + glow * 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(34, 197, 94, ${glow * 0.15})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
