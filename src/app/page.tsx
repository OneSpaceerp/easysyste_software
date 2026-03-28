import Link from 'next/link'

const solutions = [
    { title: 'Data Science & Analytics', description: 'Transform raw data into actionable insights with BI dashboards, predictive models, and KPI frameworks.', href: '/solutions/data-analytics', icon: '📊' },
    { title: 'AI & Machine Learning', description: 'Leverage predictive analytics, NLP, computer vision, and recommendation systems to automate decisions.', href: '/solutions/ai-ml', icon: '🤖' },
    { title: 'Software Development', description: 'Build enterprise applications, web/mobile apps, and ERP customizations with modern architectures.', href: '/solutions/software-development', icon: '💻' },
    { title: 'Integration & APIs', description: 'Connect your systems with data pipelines, API engineering, and cloud integrations.', href: '/solutions/integration-apis', icon: '🔗' },
    { title: 'Automation & RPA', description: 'Streamline operations with intelligent workflows, RPA bots, and decision automation.', href: '/solutions/automation-rpa', icon: '⚡' },
]

const useCases = [
    { industry: 'Manufacturing', example: 'Predictive maintenance reduces downtime by 40%' },
    { industry: 'Finance', example: 'Fraud detection with 99.7% accuracy' },
    { industry: 'Retail', example: 'Demand forecasting improves inventory by 30%' },
    { industry: 'Operations', example: 'Process automation saves 10,000+ hours/year' },
]

const stats = [
    { value: '50+', label: 'AI/ML Models Deployed' },
    { value: '200+', label: 'Software Projects' },
    { value: '40%', label: 'Average Efficiency Gain' },
    { value: '10+', label: 'Years of Innovation' },
]

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]" />
                <div className="absolute top-20 -left-32 w-96 h-96 bg-primary-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-muted/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-primary-accent rounded-full text-sm font-medium mb-6">
                        AI-First Digital Solutions
                    </span>
                    <h1 className="text-white mb-6">
                        Turn Data into<br />
                        <span className="gradient-text">Intelligence</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
                        AI, analytics, and software solutions that power smarter decisions and sustainable growth.
                        Transform your business with cutting-edge technology from Easy Systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary text-lg px-8 py-4">Book an AI Discovery Call</Link>
                        <Link href="/solutions" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-foreground transition-colors">Explore Solutions</Link>
                    </div>
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">What We Do</span>
                    <h2 className="mt-4">AI & Data Capabilities</h2>
                    <p>Comprehensive digital solutions from data strategy to production deployment</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution) => (
                        <Link key={solution.title} href={solution.href} className="card group border-l-4 border-primary">
                            <div className="text-4xl mb-4">{solution.icon}</div>
                            <h3 className="font-heading font-bold text-xl mb-3">{solution.title}</h3>
                            <p className="text-muted mb-4">{solution.description}</p>
                            <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                                Learn More <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-gray-50 py-20">
                <div className="section-container">
                    <div className="section-title">
                        <span className="text-primary font-semibold uppercase tracking-wider">Proven Results</span>
                        <h2 className="mt-4">Use Cases</h2>
                        <p>Real-world impact across industries</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase) => (
                            <div key={useCase.industry} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-primary-accent">
                                <h4 className="font-heading font-bold text-lg mb-2">{useCase.industry}</h4>
                                <p className="text-muted text-sm">{useCase.example}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="/use-cases" className="btn-secondary">View All Use Cases</Link>
                    </div>
                </div>
            </section>

            {/* Engagement Models */}
            <section className="section-container">
                <div className="section-title">
                    <span className="text-primary font-semibold uppercase tracking-wider">How We Work</span>
                    <h2 className="mt-4">Engagement Models</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white text-2xl font-bold">1</span></div>
                        <h4 className="font-heading font-bold text-xl mb-3">Proof of Concept</h4>
                        <p className="text-muted">Validate ideas quickly with rapid PoC delivery in 4-8 weeks</p>
                    </div>
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white text-2xl font-bold">2</span></div>
                        <h4 className="font-heading font-bold text-xl mb-3">Project-Based</h4>
                        <p className="text-muted">End-to-end delivery with fixed scope and timeline</p>
                    </div>
                    <div className="card text-center">
                        <div className="w-16 h-16 bg-gradient-cool rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-white text-2xl font-bold">3</span></div>
                        <h4 className="font-heading font-bold text-xl mb-3">Managed Services</h4>
                        <p className="text-muted">Ongoing support and continuous improvement</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ai" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white mb-6">Ready to Start Your AI Journey?</h2>
                    <p className="text-xl text-white/90 mb-10">Book a discovery call with our AI experts to explore how we can help transform your business.</p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-block">Book Discovery Call</Link>
                </div>
            </section>
        </>
    )
}
