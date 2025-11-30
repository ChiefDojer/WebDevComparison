import './globals.css'
import Link from 'next/link'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <Link href="/world-clock">World Clock</Link>
                    <Link href="/timer">Timer</Link>
                    <Link href="/countdown">Countdown</Link>
                </nav>
                {children}
            </body>
        </html>
    )
}
