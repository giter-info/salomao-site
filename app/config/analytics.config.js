export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-M6QQWBHFKV";

export const EVENTS = {
    whatsappClick: "whatsapp_click",
    leadSubmit: "generate_lead",
};

export function trackEvent(name, params = {}) {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    window.gtag("event", name, params);
}
