import Link from 'next/link'

const solutions = [
    { title: 'AI & Machine Learning', description: 'Leverage predictive analytics, NLP, computer vision, and recommendation systems to automate decisions.', href: '/solutions/ai-ml', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-primary-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09l2.846.813-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg> },
    { title: 'Data Science & Analytics', description: 'Transform raw data into actionable insights with BI dashboards, predictive models, and KPI frameworks.', href: '/solutions/data-analytics', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-primary-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2.25v8.25H3V13zM10.5 5.25h2.25v16.05h-2.25V5.25zM18 9h2.25v12.375H18V9z" /></svg> },
    { title: 'Software Development', description: 'Build enterprise applications, web/mobile apps, and ERP customizations with modern architectures.', href: '/solutions/software-development', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-primary-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg> },
    { title: 'Automation & RPA', description: 'Streamline operations with intelligent workflows, RPA bots, and decision automation.', href: '/solutions/automation-rpa', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-primary-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> },
    { title: 'Integration & APIs', description: 'Connect your systems with data pipelines, API engineering, and cloud integrations.', href: '/solutions/integration-apis', icon: <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-primary-accent"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg> },
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
                <div className="flex flex-wrap justify-center gap-8">
                    {solutions.map((solution) => (
                        <Link key={solution.title} href={solution.href} className="card group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] border-t-4 border-transparent hover:border-primary-accent relative overflow-hidden transition-all duration-500 flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary-accent/20 transition-all duration-500"></div>
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-primary/10">
                                {solution.icon}
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">{solution.title}</h3>
                            <p className="text-muted mb-6 line-clamp-3">{solution.description}</p>
                            <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform mt-auto">
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
