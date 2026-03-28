import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Software Development' }

export default function SoftwareDevelopmentPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6"><svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Solutions</Link>
                    <h1 className="text-white mb-6">Software<br /><span className="gradient-text">Development</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl">Build modern, scalable applications with our expert software engineering teams.</p>
                </div>
            </section>
            <section className="section-container">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Enterprise Applications</h3><p className="text-muted">Custom business applications built for scale, security, and performance.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Web & Mobile Apps</h3><p className="text-muted">Responsive web applications and native mobile apps for iOS and Android.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">ERP Customizations</h3><p className="text-muted">Oracle, SAP, and Odoo extensions tailored to your business processes.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">CI/CD & DevOps</h3><p className="text-muted">Automated pipelines, infrastructure as code, and cloud-native practices.</p></div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Build Your Next Application</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Start a Project</Link></div></section>
        </>
    )
}
