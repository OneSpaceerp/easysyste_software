'use client'
import { useState } from 'react'

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', interest: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise((r) => setTimeout(r, 1000))
        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-2 bg-white/10 text-primary-accent rounded-full text-sm font-medium mb-6">Let&apos;s Connect</span>
                    <h1 className="text-white mb-6">Book a<br /><span className="gradient-text">Discovery Call</span></h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto">Explore how AI and software can transform your business</p>
                </div>
            </section>
            <section className="section-container">
                <div className="max-w-3xl mx-auto">
                    {isSubmitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="font-heading font-bold text-2xl mb-2">Thank You!</h3>
                            <p className="text-muted">We&apos;ll contact you within 24 hours to schedule your discovery call.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div><label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label><input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Smith" /></div>
                                <div><label htmlFor="email" className="block text-sm font-medium mb-2">Business Email *</label><input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="john@company.com" /></div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div><label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label><input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Company Name" /></div>
                                <div><label htmlFor="interest" className="block text-sm font-medium mb-2">Interest Area</label><select id="interest" name="interest" value={formData.interest} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"><option value="">Select an area</option><option value="ai">AI & Machine Learning</option><option value="data">Data Analytics</option><option value="software">Software Development</option><option value="automation">Automation</option><option value="other">Other</option></select></div>
                            </div>
                            <div><label htmlFor="message" className="block text-sm font-medium mb-2">What would you like to discuss? *</label><textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="Tell us about your AI or software challenges..." /></div>
                            <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">{isSubmitting ? 'Sending...' : 'Book Discovery Call'}</button>
                        </form>
                    )}
                    <div className="mt-12 text-center text-muted"><p className="mb-2">General inquiries: <a href="mailto:info@eysmt.com" className="text-primary hover:underline">info@eysmt.com</a></p></div>
                </div>
            </section>
        </>
    )
}
