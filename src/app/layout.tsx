import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Delivra — Last-Mile Logistics Optimized for Growth',
  description: 'Delivra simplifies your shipping workflow, tracks deliveries in real-time, and reduces operational costs by up to 30%.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
