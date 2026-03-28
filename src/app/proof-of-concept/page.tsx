import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Proof of Concept Program', description: 'Validate AI and software ideas quickly with our structured PoC program.' }

const steps = [
    { step: '01', title: 'Discovery', description: 'Understand your business challenge, data landscape, and success criteria.', duration: 'Week 1' },
    { step: '02', title: 'PoC Build', description: 'Rapid development of a working prototype with real data.', duration: 'Weeks 2-6' },
    { step: '03', title: 'Validation', description: 'Measure results against success criteria and gather stakeholder feedback.', duration: 'Week 7' },
    { step: '04', title: 'Scale Roadmap', description: 'Define the path from PoC to production-ready solution.', duration: 'Week 8' },
]

export default function ProofOfConceptPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-accent rounded-full text-sm font-medium mb-6">Validate Fast</span>
                    <h1 className="text-white mb-6">Proof of Concept<br /><span className="gradient-text">Program</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">Go from idea to working prototype in 4-8 weeks with our structured PoC approach.</p>
                </div>
            </section>
            <section className="section-container">
                <div className="section-title"><h2>How It Works</h2></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((s) => (
                        <div key={s.step} className="card text-center">
                            <div className="text-5xl font-heading font-bold gradient-text mb-4">{s.step}</div>
                            <h4 className="font-heading font-bold text-xl mb-2">{s.title}</h4>
                            <p className="text-muted mb-4">{s.description}</p>
                            <span className="text-primary font-medium">{s.duration}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-gray-50 py-20">
                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-4xl font-bold gradient-text mb-2">4-8 weeks</div><div className="text-muted">Delivery Time</div></div>
                        <div><div className="text-4xl font-bold gradient-text mb-2">Fixed Price</div><div className="text-muted">No Surprises</div></div>
                        <div><div className="text-4xl font-bold gradient-text mb-2">Production-Ready</div><div className="text-muted">Scalable Foundation</div></div>
                    </div>
                </div>
            </section>
            <section className="relative py-24 overflow-hidden"><div className="absolute inset-0 bg-gradient-ai" /><div className="relative z-10 max-w-4xl mx-auto px-4 text-center"><h2 className="text-white mb-6">Start Your PoC</h2><Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Apply Now</Link></div></section>
        </>
    )
}
