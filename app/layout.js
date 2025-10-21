import './globals.css'
import VantaBackground from '@/components/layouts/VantaBackground'

export const metadata = {
  title: 'Rudraksh Soni | Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen text-light">
        <VantaBackground />
        {children}
      </body>
    </html>
  )
}
