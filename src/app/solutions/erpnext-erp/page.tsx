import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { 
    title: 'ERPNext Implementation',
    description: 'Fully managed, custom-tailored ERPNext deployments to centralize and automate your business operations.'
}

export default function ERPNextPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6 hover:text-white transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Solutions
                    </Link>
                    <h1 className="text-white mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">ERPNext<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent via-primary to-primary-muted">Implementation</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">Centralize and automate your entire business operations from accounting to manufacturing with a fully customized, open-source enterprise infrastructure.</p>
                </div>
            </section>
            
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Real-World Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-foreground">A Fully Unified Operations Hub</h2>
                    </div>
                
                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {/* Capability 1 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Financial Accounting</h3>
                            <p className="text-muted leading-relaxed">Real-time dynamic ledgers, multi-currency support, automated bank reconciliations, and instant invoicing tied directly to your sales pipelines.</p>
                        </div>

                        {/* Capability 2 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-primary-accent/20 transition-all duration-500 hover:-translate-y-2 md:translate-y-6">
                            <div className="w-16 h-16 rounded-xl bg-primary-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-accent/10 transition-all duration-500">
                                <svg className="w-8 h-8 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary-accent transition-colors">HR & Payroll</h3>
                            <p className="text-muted leading-relaxed">Streamline the employee lifecycle from recruitment to offboarding. Includes integrated attendance tracking, complex leave management, and automated tax-compliant payroll.</p>
                        </div>

                        {/* Capability 3 */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-primary-muted/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-xl bg-primary-muted/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-muted/20 transition-all duration-500">
                                <svg className="w-8 h-8 text-primary-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary-muted transition-colors">Inventory & Manufacturing</h3>
                            <p className="text-muted leading-relaxed">Precision stock tracking across multiple international warehouses, complete multi-level BOM management, capacity planning, and automated supply chains.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-ai rounded-full blur-3xl opacity-20 -mr-20"></div>
                            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                                <h3 className="text-3xl font-heading font-bold mb-8">The Open Source Advantage</h3>
                                
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary font-bold text-xl">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Zero Licensing Fees</h4>
                                            <p className="text-muted text-sm">Say goodbye to per-user software subscriptions. ERPNext's 100% open-source core means you only ever pay for expert hosting and customization, drastically lowering your Total Cost of Ownership (TCO) compared to legacy giants like SAP or NetSuite.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center">
                                            <span className="text-primary-accent font-bold text-xl">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Low-Code Agility via Frappe</h4>
                                            <p className="text-muted text-sm">Built on the powerful Frappe framework, the system is designed for agility. We can instantly generate new data structures (DocTypes), define custom automated workflows, and build tailored print formats in a fraction of the time.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-muted/10 flex items-center justify-center">
                                            <span className="text-primary-muted font-bold text-xl">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Data Sovereignty</h4>
                                            <p className="text-muted text-sm">Your business data stays entirely within your control. Deploy on our highly secure NestCloud servers, your own private cloud, or entirely on-premise without ever encountering vendor data lock-in.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Why ERPNext?</span>
                            <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">A Complete Picture of Your Enterprise</h2>
                            <p className="text-lg text-muted mb-8">
                                When departments work in silos utilizing different software, efficiency dies. ERPNext unites your entire company under a single source of truth. By linking quotations directly to sales orders, which instantly trigger manufacturing workflows and update the financial ledger, your business operates at maximum velocity without manual data re-entry errors.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {['End-to-end integration mapping', 'Real-time interactive dashboard reporting', 'Mobile-first responsive design framework', 'Advanced API integrations via REST and webhooks'].map((feat) => (
                                    <li key={feat} className="flex items-center text-muted font-medium">
                                        <svg className="w-5 h-5 text-primary-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="btn-primary">Speak With An Architect</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ai" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white mb-6 text-4xl font-bold">Ready to Centralize Your Operations?</h2>
                    <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Drop the bloated enterprise licensing fees. Modernize your entire workflow rapidly with Easy Systems and ERPNext.</p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-10 py-4 rounded-xl inline-block hover:scale-105 transition-transform shadow-xl">Start Your Implementation</Link>
                </div>
            </section>
        </>
    )
}
