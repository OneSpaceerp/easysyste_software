import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Data Science & Analytics' }

export default function DataAnalyticsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6"><svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Solutions</Link>
                    <h1 className="text-white mb-6">Data Science &<br /><span className="gradient-text">Analytics</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl">Transform raw data into actionable business insights with our comprehensive analytics solutions.</p>
                </div>
            </section>
            <section className="section-container">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Business Intelligence</h3><p className="text-muted">Interactive dashboards and reports that provide real-time visibility into your key metrics.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Data Warehousing</h3><p className="text-muted">Centralized data repositories built on modern cloud platforms for scalable analytics.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Predictive Analytics</h3><p className="text-muted">Statistical models that forecast trends and enable proactive decision-making.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">KPI Frameworks</h3><p className="text-muted">Custom measurement frameworks aligned with your business objectives.</p></div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Ready to Unlock Your Data?</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Get Started</Link></div></section>
        </>
    )
}
