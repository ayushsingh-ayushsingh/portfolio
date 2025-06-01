'use client';

import React, { useEffect, useRef, useState } from 'react';

const TrackingEyes: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [pupil1Position, setPupil1Position] = useState({ x: 0, y: 0 });
    const [pupil2Position, setPupil2Position] = useState({ x: 0, y: 0 });

    const eye1Ref = useRef<HTMLDivElement | null>(null);
    const eye2Ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const calculatePupilPosition = (eye: HTMLDivElement | null) => {
        if (!eye) return { x: 0, y: 0 };

        const rect = eye.getBoundingClientRect();
        const eyeCenter = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };

        const deltaX = mousePosition.x - eyeCenter.x;
        const deltaY = mousePosition.y - eyeCenter.y;
        const angle = Math.atan2(deltaY, deltaX);

        const distanceToMouse = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxCursorDistance = 500;
        const maxPupilOffset = 27.5;

        const influenceFactor = Math.min(1, distanceToMouse / maxCursorDistance);
        const distance = Math.min(maxPupilOffset, maxPupilOffset * influenceFactor);

        return {
            x: distance * Math.cos(angle),
            y: distance * Math.sin(angle),
        };
    };

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            const lerp = (start: number, end: number, t: number) =>
                start + (end - start) * t;

            const lerpFactor = 0.2;

            const target1 = calculatePupilPosition(eye1Ref.current);
            const target2 = calculatePupilPosition(eye2Ref.current);

            if (target1 && target2) {
                setPupil1Position((prev) => ({
                    x: lerp(prev.x, target1.x, lerpFactor),
                    y: lerp(prev.y, target1.y, lerpFactor),
                }));
                setPupil2Position((prev) => ({
                    x: lerp(prev.x, target2.x, lerpFactor),
                    y: lerp(prev.y, target2.y, lerpFactor),
                }));
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, [mousePosition, calculatePupilPosition]);

    const eyeStyle: React.CSSProperties = {
        position: 'relative',
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        backgroundColor: 'white',
        border: '2px solid black',
        marginRight: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    };

    const pupilStyle: React.CSSProperties = {
        position: 'absolute',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        backgroundColor: 'black',
        transform: `translate(-50%, -50%)`,
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                zIndex: 9999,
                display: 'flex',
            }}
        >
            <div ref={eye1Ref} style={eyeStyle}>
                <div
                    style={{
                        ...pupilStyle,
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${pupil1Position.x}px), calc(-50% + ${pupil1Position.y}px))`,
                    }}
                />
            </div>
            <div ref={eye2Ref} style={eyeStyle}>
                <div
                    style={{
                        ...pupilStyle,
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${pupil2Position.x}px), calc(-50% + ${pupil2Position.y}px))`,
                    }}
                />
            </div>
        </div>
    );
};

export default TrackingEyes;
