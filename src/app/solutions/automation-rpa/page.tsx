import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Automation & RPA' }

export default function AutomationRPAPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6"><svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Solutions</Link>
                    <h1 className="text-white mb-6">Automation<br /><span className="gradient-text">& RPA</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl">Streamline operations and eliminate manual tasks with intelligent automation.</p>
                </div>
            </section>
            <section className="section-container">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">RPA Bots</h3><p className="text-muted">Software robots that automate repetitive tasks across applications.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Workflow Automation</h3><p className="text-muted">End-to-end process automation with approval flows and notifications.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Process Mining</h3><p className="text-muted">Discover automation opportunities through data-driven process analysis.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Intelligent Automation</h3><p className="text-muted">AI-powered decision automation that handles complex business rules.</p></div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Automate Your Operations</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Explore Automation</Link></div></section>
        </>
    )
}
