import Script from "next/script";

export default function GTagComponent() {
    return (
        <>
            <Script
                strategy='lazyOnload'
                src={`https://www.googletagmanager.com/gtag/js?id=G-M6QQWBHFKV`}
            />

            <Script id='' strategy='lazyOnload'>
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M6QQWBHFKV', {
              page_path: window.location.pathname,
              });
          `}
            </Script>
        </>
    );
}