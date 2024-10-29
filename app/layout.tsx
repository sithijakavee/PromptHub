import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Provider from "./(Providers)/NextUiProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Prompt Hub | AI Prompts Marketplace",
  description: "Prompt Hub is a marketplace for selling AI image prompts",
  keywords: ["marketplace", "prompt", "prompt Hub Marketplace", "Ai images prompts","Ai Images"]  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${monserrat.variable}`}>
          <Provider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
