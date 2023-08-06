import './globals.css'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: "Theerawat Patthawee's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className="font-['LINE_Seed'] bg-[#132632] text-white overflow-x-hidden">{children}</body>
    </html>
  )
}
