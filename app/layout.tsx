import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Agentik | AI Made Easy",
  description: "We help businesses implement AI tools and workflows.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-manrope bg-background text-brand-dark antialiased`}>
        {children}
      </body>
    </html>
  )
}