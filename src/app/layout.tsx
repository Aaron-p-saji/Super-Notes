"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { WebviewWindow, appWindow } from "@tauri-apps/api/window";
import { ThemeProvider } from "@/provider/theme-provider";
import { Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Sidebar from "@/components/ui/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [appWindow, setAppWindow] = useState<WebviewWindow>();
  const [isHovering, setIsHovering] = useState(false);

  async function setupAppWindow() {
    const appWindow = (await import("@tauri-apps/api/window")).appWindow;
    setAppWindow(appWindow);
  }

  useEffect(() => {
    setupAppWindow();
  }, []);
  return (
    <html lang="en">
      <body
        className={`h-screen bg-transparent overflow-hidden font-samsung_one font-bold`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-[#fff] rounded-md overflow-hidden flex flex-col">
            <div
              className="h-8 flex flex-row justify-between items-center pl-2 bg-transparent rounded-md "
              data-tauri-drag-region
            >
              <div className="flex items-center text-end select-none h-fit">
                <span className="text-sm font-abc_gintonord font-extrabold">
                  Supa Note
                </span>
              </div>
              <div className="flex h-full items-center">
                <div
                  className="h-10 w-10 p-1 flex items-center justify-center hover:bg-gray-200"
                  onClick={() => {
                    appWindow?.minimize();
                  }}
                >
                  <Minus />
                </div>
                <div
                  className="h-10 w-10 p-1 flex items-center justify-center hover:bg-gray-200"
                  onClick={() => {
                    appWindow?.toggleMaximize();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <mask id="path-1-inside-1_10_55" fill="white">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.31892 1.5H11C11.2761 1.5 11.5 1.72386 11.5 2V8.68108C11.5 8.95722 11.2761 9.18108 11 9.18108H10.6811V10.6811H11C12.1046 10.6811 13 9.78565 13 8.68108V2C13 0.895431 12.1046 0 11 0H4.31892C3.21435 0 2.31892 0.895429 2.31892 2V2.31892H3.81892V2C3.81892 1.72386 4.04278 1.5 4.31892 1.5Z"
                      />
                    </mask>
                    <path
                      d="M10.6811 9.18108V7.68108H9.18108V9.18108H10.6811ZM10.6811 10.6811H9.18108V12.1811H10.6811V10.6811ZM2.31892 2.31892H0.818924V3.81892H2.31892V2.31892ZM3.81892 2.31892V3.81892H5.31892V2.31892H3.81892ZM11 0H4.31892V3H11V0ZM13 2C13 0.895428 12.1046 0 11 0V3C10.4477 3 10 2.55228 10 2H13ZM13 8.68108V2H10V8.68108H13ZM11 10.6811C12.1046 10.6811 13 9.78565 13 8.68108H10C10 8.1288 10.4477 7.68108 11 7.68108V10.6811ZM10.6811 10.6811H11V7.68108H10.6811V10.6811ZM9.18108 9.18108V10.6811H12.1811V9.18108H9.18108ZM10.6811 12.1811H11V9.18108H10.6811V12.1811ZM11 12.1811C12.933 12.1811 14.5 10.6141 14.5 8.68108H11.5C11.5 8.95722 11.2761 9.18108 11 9.18108V12.1811ZM14.5 8.68108V2H11.5V8.68108H14.5ZM14.5 2C14.5 0.0670052 12.933 -1.5 11 -1.5V1.5C11.2761 1.5 11.5 1.72386 11.5 2H14.5ZM11 -1.5H4.31892V1.5H11V-1.5ZM4.31892 -1.5C2.38593 -1.5 0.818924 0.0669998 0.818924 2H3.81892C3.81892 1.72386 4.04278 1.5 4.31892 1.5V-1.5ZM0.818924 2V2.31892H3.81892V2H0.818924ZM2.31892 3.81892H3.81892V0.818919H2.31892V3.81892ZM2.31892 2V2.31892H5.31892V2H2.31892ZM4.31892 0C3.21435 0 2.31892 0.89543 2.31892 2H5.31892C5.31892 2.55228 4.87121 3 4.31892 3V0Z"
                      fill="black"
                      mask="url(#path-1-inside-1_10_55)"
                    />
                    <rect
                      x="0.75"
                      y="3.06892"
                      width="9.18108"
                      height="9.18108"
                      rx="1.25"
                      stroke="black"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div
                  className="h-10 w-10 p-1 flex items-center justify-center hover:bg-red-500"
                  onClick={() => {
                    appWindow?.close();
                  }}
                >
                  <X />
                </div>
              </div>
            </div>

            <div className="rounded-b w-full h-full">
              <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">
                <Sidebar />
                <div className="flex flex-grow">{children}</div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
