import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Use Cases', description: 'Real-world AI and software use cases across industries.' }

const useCases = [
    { industry: 'Manufacturing', title: 'Predictive Maintenance', description: 'ML models predict equipment failures 2 weeks in advance, reducing unplanned downtime by 40% and maintenance costs by 25%.', results: ['40% reduction in downtime', '25% lower maintenance costs', 'ROI in 6 months'] },
    { industry: 'Finance', title: 'Fraud Detection', description: 'Real-time ML models analyze transactions for fraud patterns, achieving 99.7% accuracy with 10x faster detection.', results: ['99.7% detection accuracy', '70% fewer false positives', '$2M annual savings'] },
    { industry: 'Retail', title: 'Demand Forecasting', description: 'AI-powered demand forecasting improves inventory management and reduces stockouts by 35%.', results: ['30% better forecast accuracy', '35% fewer stockouts', '20% inventory reduction'] },
    { industry: 'Operations', title: 'Process Automation', description: 'RPA bots automate back-office processes, saving 10,000+ hours annually and reducing errors by 95%.', results: ['10,000+ hours saved/year', '95% error reduction', '3-month payback'] },
]

export default function UseCasesPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-accent rounded-full text-sm font-medium mb-6">Success Stories</span>
                    <h1 className="text-white mb-6">Use<br /><span className="gradient-text">Cases</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">Real-world impact across industries</p>
                </div>
            </section>
            <section className="section-container">
                <div className="space-y-12">
                    {useCases.map((uc) => (
                        <div key={uc.title} className="card p-8">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{uc.industry}</span>
                            <h3 className="font-heading font-bold text-2xl mt-4 mb-3">{uc.title}</h3>
                            <p className="text-muted text-lg mb-6">{uc.description}</p>
                            <div className="flex flex-wrap gap-4">
                                {uc.results.map((r) => <span key={r} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">{r}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Ready for Similar Results?</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Discuss Your Use Case</Link></div></section>
        </>
    )
}
