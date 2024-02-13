import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"

const inter = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "gatherbun",
  description: "The future of event invitations",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
