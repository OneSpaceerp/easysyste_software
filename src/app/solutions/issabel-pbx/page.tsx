import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { 
    title: 'Issabel PBX Unified Communications',
    description: 'Enterprise-grade, cloud-hosted VoIP and unified communications to guarantee crystal-clear voice.'
}

export default function IssabelPBXPage() {
    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-accent/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Link href="/solutions" className="inline-flex items-center text-primary-accent mb-6 hover:text-white transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Solutions
                    </Link>
                    <h1 className="text-white mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">Issabel PBX<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent via-primary to-primary-muted">Unified Comms</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">Deploy a limitless, enterprise-grade cloud contact center to guarantee crystal-clear voice, secure lines, and seamless team collaboration across the globe.</p>
                </div>
            </section>
            
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Enterprise Voice Features</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-foreground">A Complete VoIP Powerhouse</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {/* Call Routing */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.829 1.58-1.936a4.502 4.502 0 003.111-3.692C19.349 10.702 18.067 9.155 16.5 9.155v0a4.508 4.508 0 00-4.043 2.502M14.25 18v.192c0 .983-.658 1.829-1.58 1.936a4.502 4.502 0 01-3.111-3.692C4.151 10.702 5.433 9.155 7 9.155v0a4.508 4.508 0 014.043 2.502" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">Advanced Call Routing</h3>
                            <p className="text-muted leading-relaxed">Design highly responsive IVR (Interactive Voice Response) auto-attendants, sophisticated queue management, and deep ring groups to ensure no dropped calls.</p>
                        </div>

                        {/* Omnichannel */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-primary-accent/20 transition-all duration-500 hover:-translate-y-2 md:translate-y-6">
                            <div className="w-16 h-16 rounded-xl bg-primary-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-accent/10 transition-all duration-500">
                                <svg className="w-8 h-8 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary-accent transition-colors">Omnichannel Contact Center</h3>
                            <p className="text-muted leading-relaxed">Unify your voice, Web Chat, SMS, WhatsApp, and social media interactions directly into one powerful, seamlessly integrated agent console.</p>
                        </div>

                        {/* Call Analytics */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:border-primary-muted/20 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 rounded-xl bg-primary-muted/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-muted/20 transition-all duration-500">
                                <svg className="w-8 h-8 text-primary-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 131.028V6.657C3 5.187 4.187 4 5.657 4h12.686C19.813 4 21 5.187 21 6.657v10.686C21 18.813 19.813 20 18.343 20H5.657C4.187 20 3 18.813 3 17.343zM3 10V6.657c0-1.47 1.187-2.657 2.657-2.657M21 10V6.657c0-1.47-1.187-2.657-2.657-2.657" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                            <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary-muted transition-colors">Call Recording & Analytics</h3>
                            <p className="text-muted leading-relaxed">Enforce strict compliance and monitor quality assurance via automated call recording, real-time agent monitoring, and comprehensive graphical reporting.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                        {/* Swapped order from the ERPNext page specifically for variety! */}
                        <div className="lg:order-2 relative">
                            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-ai rounded-full blur-3xl opacity-20 -ml-20"></div>
                            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                                <h3 className="text-3xl font-heading font-bold mb-8">The Superior Voice Advantage</h3>
                                
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Uncapped, Zero-Tier Scalability</h4>
                                            <p className="text-muted text-sm">Most SaaS VoIP providers heavily penalize growth by charging per extension or per bundled minutes. Because Issabel is built on Asterisk open-source, we give you completely unlimited extensions, users, and branches.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-accent/10 flex items-center justify-center mt-1">
                                            <svg className="w-6 h-6 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Total Operational Sovereignty</h4>
                                            <p className="text-muted text-sm">You own your own communications. We deploy your private telephony system securely behind VPNs or strictly access-controlled firewalls. You keep absolute command over where your calls are routed and how your data is stored.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-muted/10 flex items-center justify-center mt-1">
                                            <svg className="w-6 h-6 text-primary-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Seamless Multi-System CRM Hooks</h4>
                                            <p className="text-muted text-sm">Empower your sales and support teams. Integrate directly with major CRMs (like HubSpot, Odoo, or ERPNext). Have customer profiles instantly appear the second the phone rings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:order-1">
                            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Why Issabel PBX?</span>
                            <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">Stop Paying Per Seat For Phone Lines</h2>
                            <p className="text-lg text-muted mb-8">
                                Proprietary systems restrict your telecommunications. Whether you have 10 employees or 1,000, Issabel PBX handles simultaneous outbound dialer campaigns, inbound support IVR trees, and cross-continent inter-office extensions without blinking. Don't rent your infrastructure. Own it securely through our deployments.
                            </p>
                            <ul className="space-y-3 mb-10">
                                {['Zero monthly per-extension extortion software fees', 'Native Fax-to-Email, Video Conferencing, and Chat', 'Works globally on IP desk phones, softphones, and cell phones', 'Engineered strictly on the world-class Asterisk telecom engine'].map((feat) => (
                                    <li key={feat} className="flex items-center text-muted font-medium">
                                        <svg className="w-5 h-5 text-primary-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="btn-primary">Speak With A Telecom Tech</Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-ai" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-white mb-6 text-4xl font-bold">Never Miss a Client Call Again</h2>
                    <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">Scale your support queues and global outbound reach today with the world's most powerful open-source unified communications framework.</p>
                    <Link href="/contact" className="bg-white text-primary font-semibold px-10 py-4 rounded-xl inline-block hover:scale-105 transition-transform shadow-xl">Upgrade Your Telephony</Link>
                </div>
            </section>
        </>
    )
}
