import React, { useEffect, useRef } from 'react';
import './Background.css';

const Background = () => {
    const canvasRef = useRef(null);
    const mouse = { x: 0, y: 0 };
    const rate = 60;
    const arc = 100;
    const size = 7;
    const speed = 20;
    const colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
    let parts = [];
    let time = 0;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const createParticles = () => {
        parts = Array.from({ length: arc }, () => ({
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * size,
        }));
    };

    const drawParticles = (ctx) => {
        ctx.clearRect(0, 0, w, h);
        parts.forEach((li, i) => {
            const distanceFactor = Math.max(Math.min(15 - (DistanceBetween(mouse, li) / 10), 10), 1);
            ctx.beginPath();
            ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
            ctx.fillStyle = li.c;
            ctx.strokeStyle = li.c;
            if (i % 2 === 0) ctx.stroke();
            else ctx.fill();

            li.x += li.toX * (time * 0.05);
            li.y += li.toY * (time * 0.05);

            if (li.x > w) li.x = 0;
            if (li.y > h) li.y = 0;
            if (li.x < 0) li.x = w;
            if (li.y < 0) li.y = h;
        });

        if (time < speed) time++;
        setTimeout(() => drawParticles(ctx), 1000 / rate);
    };

    const DistanceBetween = (p1, p2) => {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    const handleResize = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        const canvas = canvasRef.current;
        canvas.width = w;
        canvas.height = h;
        createParticles(); // Recreate particles to adjust their positions
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = w;
        canvas.height = h;
        createParticles();
        drawParticles(ctx);

        canvas.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} id="test"></canvas>;
};

export default Background;
