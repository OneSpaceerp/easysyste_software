import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About Us', description: 'Learn about Easy Systems - an AI-first digital solutions company delivering intelligent software and data solutions.' }

const values = [
    { title: 'Innovation', description: 'We embrace cutting-edge technologies and continuously explore new frontiers in AI and software development.' },
    { title: 'Excellence', description: 'We deliver high-quality solutions with attention to detail and adherence to best practices.' },
    { title: 'Client-Centric', description: 'Your success is our success. We focus on delivering measurable business outcomes.' },
    { title: 'Agility', description: 'We adapt quickly to changing requirements and deliver iteratively for faster time-to-value.' },
]

export default function AboutPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-accent rounded-full text-sm font-medium mb-6">About Easy Systems</span>
                    <h1 className="text-white mb-6">Driving Digital<br /><span className="gradient-text">Transformation</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">An AI-first company dedicated to helping enterprises harness the power of data, intelligence, and modern software.</p>
                </div>
            </section>

            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider">Our Vision</span>
                        <h2 className="mt-4 mb-6">AI-First Innovation</h2>
                        <p className="text-muted text-lg mb-6">At Easy Systems, we believe artificial intelligence is not just a technology—it&apos;s a transformation catalyst. Our mission is to democratize AI and make intelligent solutions accessible to every enterprise.</p>
                        <p className="text-muted text-lg">With deep expertise in data science, machine learning, and software engineering, we help organizations turn complex data into competitive advantage.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        {values.map((value) => (
                            <div key={value.title} className="card">
                                <h4 className="font-heading font-bold text-lg mb-2 text-primary">{value.title}</h4>
                                <p className="text-muted text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ai" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white mb-6">Ready to Innovate?</h2>
                    <p className="text-xl text-white/90 mb-10">Let&apos;s explore how AI can transform your business.</p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">Start the Conversation</Link>
                </div>
            </section>
        </>
    )
}
