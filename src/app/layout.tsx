import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400', '500', '600', '700'], display: 'swap' })

export const metadata: Metadata = {
    title: { default: 'Easy Systems | AI & Software Solutions', template: '%s | Easy Systems AI' },
    description: 'AI, analytics, and software solutions that power smarter decisions and sustainable growth. Transform data into intelligence with Easy Systems.',
    keywords: ['AI', 'machine learning', 'data analytics', 'software development', 'automation', 'Egypt', 'UAE', 'UK'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
            <body className="min-h-screen flex flex-col" suppressHydrationWarning>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
