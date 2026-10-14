"use client";
import {useEffect, useRef} from "react";

export default function GoldMesh({className = ""}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let raf = 0;
        let x = 50;
        let y = 50;

        const apply = () => {
            raf = 0;
            el.style.setProperty("--mesh-x", `${x}%`);
            el.style.setProperty("--mesh-y", `${y}%`);
        };

        const onMove = (event) => {
            if (event.pointerType && event.pointerType !== "mouse") return;
            const rect = el.getBoundingClientRect();
            const inside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            el.classList.toggle("is-active", inside);
            if (!inside) return;

            x = ((event.clientX - rect.left) / rect.width) * 100;
            y = ((event.clientY - rect.top) / rect.height) * 100;
            if (!raf) raf = requestAnimationFrame(apply);
        };

        const onLeave = () => el.classList.remove("is-active");

        window.addEventListener("pointermove", onMove, {passive: true});
        document.addEventListener("mouseleave", onLeave);
        window.addEventListener("blur", onLeave);

        return () => {
            window.removeEventListener("pointermove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            window.removeEventListener("blur", onLeave);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div ref={ref} aria-hidden="true" className={`gold-mesh ${className}`}>
            <span className="gold-mesh__grid" />
            <span className="gold-mesh__glow" />
            <span className="gold-mesh__spot" />
        </div>
    );
}
