import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'AI & Machine Learning' }

export default function AIMLPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6"><svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Solutions</Link>
                    <h1 className="text-white mb-6">AI & Machine<br /><span className="gradient-text">Learning</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl">Leverage cutting-edge AI to automate decisions, predict outcomes, and unlock new possibilities.</p>
                </div>
            </section>
            <section className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Predictive Analytics</h3><p className="text-muted">ML models that forecast customer behavior, demand, and business outcomes.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Natural Language Processing</h3><p className="text-muted">Text analysis, sentiment detection, chatbots, and document processing.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Computer Vision</h3><p className="text-muted">Image recognition, quality inspection, and visual data analysis.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">Recommendation Systems</h3><p className="text-muted">Personalized recommendations for products, content, and next-best actions.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">MLOps & Deployment</h3><p className="text-muted">Production-grade model management, monitoring, and continuous improvement.</p></div>
                    <div className="card"><h3 className="font-heading font-bold text-xl mb-3">AI Strategy</h3><p className="text-muted">Roadmaps and governance frameworks for enterprise AI adoption.</p></div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Start Your AI Journey</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Book Discovery Call</Link></div></section>
        </>
    )
}
