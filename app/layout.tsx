import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins"
});

const notoMain = Noto_Sans_Devanagari({
    subsets: ["devanagari"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-noto"
});

export const metadata: Metadata = {
    title: "Punyam Foundation",
    description: "Punyam Foundation works to serve humanity through selfless service, empowering children, women, and the elderly while spreading awareness, healing, and self-reliance rooted in Indian wisdom.",
    openGraph: {
        title: "Punyam Foundation",
        description: "Punyam Foundation works to serve humanity through selfless service, empowering children, women, and the elderly while spreading awareness, healing, and self-reliance rooted in Indian wisdom.",
        type: "website",
        images: ["https://web.archive.org/web/20260110180300/https://static.wixstatic.com/media/8e38a4_1bd85b12fb40420aad6f3a16e1cf041b~mv2.png/v1/fill/w_278,h_281,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Punyam%20Foundation%20Logo.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${poppins.variable} ${notoMain.variable} ${poppins.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
