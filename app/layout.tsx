import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

// ✅ Correct font config
const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PrepWild",
    description: "An AI-powered platform for preparing for mock interviews",
};

// ✅ Correct layout structure for Next.js App Router
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
        <body className={`${monaSans.variable} antialiased pattern`}>
        {children}
        <Toaster richColors position="top-center" />
        </body>
        </html>
    );
}
