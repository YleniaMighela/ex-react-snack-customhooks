import { useState, useEffect } from "react";

export default function useCustomPointer(point) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const hMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        document.addEventListener("mousemove", hMouseMove);
        return () => document.removeEventListener("mousemove", hMouseMove);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                cursor: "none"
            }}>
            {point}
        </div>
    )
}