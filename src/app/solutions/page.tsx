import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'AI & Data Solutions', description: 'Comprehensive AI, data analytics, and software solutions from Easy Systems.' }

const solutions = [
    { id: 'data-analytics', title: 'Data Science & Analytics', description: 'BI dashboards, data modeling, cloud analytics platforms, and KPI frameworks.', href: '/solutions/data-analytics', features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Dashboard Development'] },
    { id: 'ai-ml', title: 'AI & Machine Learning', description: 'Predictive analytics, NLP, computer vision, recommendation systems, and MLOps.', href: '/solutions/ai-ml', features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'MLOps & Deployment'] },
    { id: 'software', title: 'Software Development', description: 'Enterprise applications, web/mobile apps, ERP customizations, and CI/CD pipelines.', href: '/solutions/software-development', features: ['Web Applications', 'Mobile Apps', 'API Development', 'DevOps'] },
    { id: 'integration', title: 'Integration & APIs', description: 'Data pipelines, API engineering, cloud integrations, and event-driven systems.', href: '/solutions/integration-apis', features: ['API Engineering', 'Data Pipelines', 'Cloud Integration', 'ETL/ELT'] },
    { id: 'automation', title: 'Automation & RPA', description: 'Process automation, intelligent workflows, RPA bots, and decision automation.', href: '/solutions/automation-rpa', features: ['RPA Bots', 'Workflow Automation', 'Process Mining', 'Intelligent Automation'] },
]

export default function SolutionsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-accent rounded-full text-sm font-medium mb-6">Our Solutions</span>
                    <h1 className="text-white mb-6">AI & Data<br /><span className="gradient-text">Solutions</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">From data strategy to production AI, we deliver end-to-end digital solutions.</p>
                </div>
            </section>

            <section className="section-container">
                <div className="space-y-12">
                    {solutions.map((solution, i) => (
                        <div key={solution.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                                <h2 className="text-3xl font-heading font-bold mb-4">{solution.title}</h2>
                                <p className="text-muted text-lg mb-6">{solution.description}</p>
                                <ul className="grid grid-cols-2 gap-3 mb-6">
                                    {solution.features.map((f) => <li key={f} className="flex items-center text-sm"><svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{f}</li>)}
                                </ul>
                                <Link href={solution.href} className="btn-primary">Learn More</Link>
                            </div>
                            <div className={`bg-gradient-to-br from-primary/10 to-primary-accent/10 rounded-3xl p-12 flex items-center justify-center aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <span className="text-8xl">{['📊', '🤖', '💻', '🔗', '⚡'][i]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ai" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white mb-6">Need a Custom Solution?</h2>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block">Contact Us</Link>
                </div>
            </section>
        </>
    )
}
