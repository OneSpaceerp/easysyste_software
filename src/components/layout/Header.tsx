'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
        name: 'Solutions', href: '/solutions', children: [
            { name: 'All Solutions', href: '/solutions' },
            { name: 'Data Science & Analytics', href: '/solutions/data-analytics' },
            { name: 'AI & Machine Learning', href: '/solutions/ai-ml' },
            { name: 'Software Development', href: '/solutions/software-development' },
            { name: 'Integration & APIs', href: '/solutions/integration-apis' },
            { name: 'Automation & RPA', href: '/solutions/automation-rpa' },
        ]
    },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'PoC Program', href: '/proof-of-concept' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative w-56 h-16">
                            <Image src="/logo-cropped.png" alt="Easy System Logo" fill className={`object-contain object-left transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} priority />
                            <Image src="/logo-light.png" alt="Easy System Logo Light" fill className={`object-contain object-left transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} priority />
                        </div>
                    </Link>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                                <Link href={item.href} className={`font-medium transition-colors ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary-accent'}`}>
                                    {item.name}
                                    {item.children && <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                                </Link>
                                {item.children && activeDropdown === item.name && (
                                    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl py-2 mt-2 animate-fade-in">
                                        {item.children.map((child) => (
                                            <Link key={child.name} href={child.href} className="block px-4 py-2 text-foreground hover:bg-primary/5 hover:text-primary transition-colors">{child.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/contact" className="btn-primary">Book Discovery Call</Link>
                    </nav>
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
                        <svg className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <nav className="lg:hidden mt-4 pb-4 bg-white rounded-xl shadow-xl">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link href={item.href} className="block px-4 py-3 text-foreground hover:bg-primary/5 font-medium" onClick={() => setIsOpen(false)}>{item.name}</Link>
                                {item.children && <div className="pl-4 border-l-2 border-primary/20 ml-4">{item.children.map((child) => <Link key={child.name} href={child.href} className="block px-4 py-2 text-muted hover:text-primary text-sm" onClick={() => setIsOpen(false)}>{child.name}</Link>)}</div>}
                            </div>
                        ))}
                        <div className="px-4 pt-4"><Link href="/contact" className="btn-primary w-full text-center">Book Discovery Call</Link></div>
                    </nav>
                )}
            </div>
        </header>
    )
}
