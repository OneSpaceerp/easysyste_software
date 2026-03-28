import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
    solutions: [
        { name: 'Data Science & Analytics', href: '/solutions/data-analytics' },
        { name: 'AI & Machine Learning', href: '/solutions/ai-ml' },
        { name: 'Software Development', href: '/solutions/software-development' },
        { name: 'Integration & APIs', href: '/solutions/integration-apis' },
        { name: 'Automation & RPA', href: '/solutions/automation-rpa' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Use Cases', href: '/use-cases' },
        { name: 'PoC Program', href: '/proof-of-concept' },
        { name: 'Insights', href: '/insights' },
        { name: 'Contact', href: '/contact' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-foreground text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="relative w-56 h-16">
                                <Image src="/logo-light.png" alt="Easy System Logo" fill className="object-contain object-left" />
                            </div>
                        </Link>
                        <p className="text-white/70 mb-6 max-w-md">
                            Transform data into intelligence with AI, analytics, and software solutions that power smarter decisions and sustainable growth.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Solutions</h4>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => <li key={link.name}><Link href={link.href} className="text-white/70 hover:text-primary text-sm">{link.name}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => <li key={link.name}><Link href={link.href} className="text-white/70 hover:text-primary text-sm">{link.name}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/60 text-sm">© {new Date().getFullYear()} Easy Systems. All rights reserved.</p>
                    <p className="text-white/60 text-sm">info@eysmt.com</p>
                </div>
            </div>
        </footer>
    )
}
