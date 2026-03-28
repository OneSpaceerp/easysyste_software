import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { 
    title: 'NestCloud Infrastructure Services',
    description: 'The premier infrastructure service for cost-effective hosting, custom VPS, and managed ERP deployments.'
}

export default function NestCloudPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Solutions
                    </Link>
                    <h1 className="text-white mb-6">NestCloud<br /><span className="gradient-text">Infrastructure</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl">The premier infrastructure service. We bridge the gap between complex technical infrastructure and seamless business operations.</p>
                </div>
            </section>
            
            <section className="section-container">
                <div className="mb-16">
                    <p className="text-lg text-muted max-w-4xl">
                        Whether you need a cost-effective shared host, a highly customizable Virtual Private Server (VPS) for any operating system, or a fully managed environment for your ERP and unified communications, NestCloud provides the exact foundation your business needs to scale.
                    </p>
                </div>

                <h2 className="text-3xl font-heading font-bold mb-8">What We Offer Through NestCloud</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="card">
                        <h3 className="font-heading font-bold text-xl mb-3">Flexible VPS Infrastructure</h3>
                        <p className="text-muted">Need complete control over your environment? NestCloud provides high-performance Virtual Private Servers tailored to your specifications. Install any operating system (Linux or Windows) and host absolutely any custom software your business requires with full root access and dedicated resources.</p>
                    </div>
                    <div className="card">
                        <h3 className="font-heading font-bold text-xl mb-3">Reliable Shared Hosting</h3>
                        <p className="text-muted">For businesses looking for a fast and cost-effective web presence, our shared hosting plans deliver exceptional speed, security, and uptime. It is the perfect starting point for standard websites, landing pages, and lightweight applications.</p>
                    </div>
                    <div className="card">
                        <h3 className="font-heading font-bold text-xl mb-3">Managed ERPNext Hosting</h3>
                        <p className="text-muted">We provide reliable, self-hosted ERPNext environments built on top-tier cloud infrastructure. Beyond just hosting, we handle the complete installation, system configuration, and ongoing modifications to ensure your ERP fits your exact workflows.</p>
                    </div>
                    <div className="card">
                        <h3 className="font-heading font-bold text-xl mb-3">Issabel PBX Cloud Deployment</h3>
                        <p className="text-muted">Keep your team and customers connected with our cloud-hosted Issabel PBX solutions. We manage the setup and customization of your unified communications system, ensuring crystal-clear voice and secure lines.</p>
                    </div>
                    <div className="card">
                        <h3 className="font-heading font-bold text-xl mb-3">Backend Hosting</h3>
                        <p className="text-muted">NestCloud provides secure, high-performance backend hosting tailored for your custom Flutter mobile applications, as well as optimized environments for Django and Strapi frameworks.</p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-12 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <h2 className="text-3xl font-heading font-bold mb-8 relative z-10">Why Choose NestCloud?</h2>
                    
                    <div className="space-y-8 relative z-10">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <svg className="w-6 h-6 text-primary-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Ultimate Flexibility</h4>
                                <p className="text-muted">From shared environments to dedicated VPS, we scale our infrastructure to match your exact technical requirements and budget.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <svg className="w-6 h-6 text-primary-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83M11.42 15.17l-.872-.873M21 17.25s.087-1.144-.81-2.043M17.25 21c-.899-.899-2.043-\.81-2.043-\.81m-3.787-2.98l.872.873m-1.129-1.134L4.722 5.617C4.156 5.05 4.394 4 5.21 4h3.692c.621 0 1.15.433 1.284 1.042l.53 2.427a1.69 1.69 0 01-.424 1.48L8.15 11.1m0 0l-2.143-2.143m2.143 2.143l1.838 1.838M4.276 9.77a2.029 2.029 0 00-1.042-1.3l-2.43-.532a1.693 1.693 0 01-1.04-.3V4.246c0-.821.996-1.06 1.56-.497l8.47 8.47 1.134 1.132m-10.9-10.9L10.3 5M10.3 5v.001" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Zero Technical Overhead</h4>
                                <p className="text-muted">For managed services, we handle the heavy lifting. From server provisioning to software installation and deep system modifications, we ensure perfect deployment.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <svg className="w-6 h-6 text-primary-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Optimized Performance</h4>
                                <p className="text-muted">Built for speed and reliability, ensuring your websites, custom software, ERP, and PBX run smoothly around the clock.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ai" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white mb-6">Scale Your Infrastructure Properly</h2>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-8 py-4 rounded-lg inline-block hover:bg-gray-100 transition-colors shadow-lg">Talk to an Architect</Link>
                </div>
            </section>
        </>
    )
}
