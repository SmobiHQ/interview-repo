"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { ToastContainer } from "react-toastify";
import { TooltipProvider } from "~/src/components/ui/tooltip";
import { NavbarMain } from "../components/Navbar/NavbarMain";
import { RouterWrapper } from "../components/RouterWrapper/RouterWrapper";
import { fontSans } from "../lib/fonts";
import { cn } from "../lib/utils";
import "../styles/globals.css";
import StoreProvider from "./StoreProvider";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <StoreProvider>
              <TooltipProvider>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  theme="colored"
                />
                <div className="flex h-screen overflow-hidden">
                  <RouterWrapper>
                    <NavbarMain />
                    <div
                      className={`flex-1 overflow-y-auto bg-background pl-14`}
                    >
                      <main className="min-h-screen">{children}</main>
                    </div>
                  </RouterWrapper>
                </div>
              </TooltipProvider>
            </StoreProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}
