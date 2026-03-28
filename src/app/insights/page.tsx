import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Insights', description: 'AI, data, and software thought leadership from Easy Systems.' }

const articles = [
    { id: 1, title: 'Getting Started with Enterprise AI: A Practical Guide', category: 'AI Strategy', excerpt: 'Learn how to build a successful AI strategy and avoid common pitfalls.', date: 'Jan 2026' },
    { id: 2, title: 'MLOps Best Practices for Production AI', category: 'Machine Learning', excerpt: 'Key principles for deploying and managing ML models at scale.', date: 'Jan 2026' },
    { id: 3, title: 'The ROI of Intelligent Automation', category: 'RPA', excerpt: 'How to measure and maximize returns from automation investments.', date: 'Dec 2025' },
    { id: 4, title: 'Building Data-Driven Organizations', category: 'Data Strategy', excerpt: 'Cultural and technical foundations for data-driven decision making.', date: 'Dec 2025' },
    { id: 5, title: 'API-First Architecture: Why It Matters', category: 'Software', excerpt: 'Design principles for modern, scalable application development.', date: 'Nov 2025' },
    { id: 6, title: 'Generative AI in the Enterprise', category: 'AI', excerpt: 'Practical applications and considerations for Gen AI adoption.', date: 'Nov 2025' },
]

export default function InsightsPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-accent rounded-full text-sm font-medium mb-6">Thought Leadership</span>
                    <h1 className="text-white mb-6"><span className="gradient-text">Insights</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">AI, data, and software perspectives from our experts</p>
                </div>
            </section>
            <section className="section-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((a) => (
                        <article key={a.id} className="card group cursor-pointer">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{a.category}</span>
                            <h3 className="font-heading font-bold text-xl mt-4 mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                            <p className="text-muted mb-4">{a.excerpt}</p>
                            <div className="flex justify-between items-center text-sm text-muted">
                                <span>{a.date}</span>
                                <span className="text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">Read More <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}
