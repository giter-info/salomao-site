"use client";
import {useEffect} from "react";
import Script from "next/script";
import {GA_ID, EVENTS, trackEvent} from "@/app/config/analytics.config";

export default function GTagComponent() {
    useEffect(() => {
        const handleClick = (event) => {
            const anchor = event.target.closest?.('a[href*="whatsapp.com"], a[href*="wa.me"]');
            if (!anchor) return;
            trackEvent(EVENTS.whatsappClick, {
                link_url: anchor.href,
                link_text: anchor.textContent?.trim().slice(0, 80),
            });
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />

            <Script id="gtag-init" strategy="lazyOnload">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
          `}
            </Script>
        </>
    );
}
