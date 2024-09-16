import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={inter.className}>
        <div className="bg-rt-green">
            {children}
        </div>
    </body>
    </html>);
}
