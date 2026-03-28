import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Integration & APIs' }

export default function IntegrationAPIsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6"><svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Solutions</Link>
                    <h1 className="text-white mb-6">Integration<br /><span className="gradient-text">& APIs</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl">Connect your systems and unlock data flow across your enterprise.</p>
                </div>
            </section>
            <section className="section-container">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">API Engineering</h3><p className="text-muted">RESTful and GraphQL APIs designed for security, scalability, and developer experience.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Data Pipelines</h3><p className="text-muted">ETL/ELT pipelines that move and transform data across systems in real-time.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Cloud Integration</h3><p className="text-muted">Seamless connectivity between on-premises systems and cloud platforms.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Event-Driven Systems</h3><p className="text-muted">Message queues, event streaming, and real-time data synchronization.</p></div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Connect Your Systems</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Discuss Integration</Link></div></section>
        </>
    )
}
