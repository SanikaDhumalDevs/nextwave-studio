"use client";
import { useState } from "react";
import { Mail, Linkedin, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    packageType: "basic",
    details: ""
  });

  const[isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", packageType: "basic", details: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#050505] pt-24 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Info (Remains Unchanged) */}
          <div>
            <h2 className="text-zinc-500 font-semibold tracking-widest uppercase text-xs mb-3">Start a Project</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
              Let's Build <br/> <span className="text-zinc-500 font-light">Something Great.</span>
            </h3>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12 max-w-md">
              Ready to ride the NextWave? Drop us a message with your project details, and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:sanikadhumal149@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail className="w-5 h-5 text-zinc-300 group-hover:text-black" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-white font-medium">sanikadhumal149@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/sanika-dhumal-164aab261" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-all">
                  <Linkedin className="w-5 h-5 text-zinc-300 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">Connect on LinkedIn</h4>
                  <p className="text-white font-medium">Founder's Profile</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-zinc-500 font-light">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Currently accepting new projects.</span>
            </div>
          </div>

          {/* Right Side: High-End WORKING Form */}
          <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-3xl border border-white/10 relative">
            <h4 className="text-2xl font-bold text-white mb-8">Project Inquiry</h4>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-all font-light" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-all font-light" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email Address</label>
                <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-all font-light" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Interested Package</label>
                <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl text-white focus:outline-none focus:border-white/30 transition-all font-light appearance-none">
                  <option className="bg-[#0A0A0A] text-white" value="Basic Website (₹4,999)">Basic Website (₹4,999)</option>
                  <option className="bg-[#0A0A0A] text-white" value="Standard Business (₹8,999)">Standard Business (₹8,999)</option>
                  <option className="bg-[#0A0A0A] text-white" value="Dynamic/Course (₹12,999+)">Dynamic/Course (₹12,999+)</option>
                  <option className="bg-[#0A0A0A] text-white" value="Custom Requirement">Custom Requirement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Project Details</label>
                <textarea required name="details" value={formData.details} onChange={handleChange} rows={4} placeholder="Tell us a bit about your business..." className="w-full bg-white/5 border border-white/10 px-4 py-3.5 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-all font-light resize-none"></textarea>
              </div>

              <button disabled={isSubmitting} type="submit" className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-4 rounded-xl transition-all mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><CheckCircle2 className="w-5 h-5" /> Send Message</>}
              </button>

              {/* Status Messages */}
              {status === "success" && <p className="text-green-400 text-sm text-center mt-3">Message sent successfully! We will contact you soon.</p>}
              {status === "error" && <p className="text-red-400 text-sm text-center mt-3">Failed to send message. Please email us directly.</p>}
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-[#0A0A0A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-white">NextWave<span className="text-zinc-500">.</span></span>
          </div>
          <p className="text-zinc-500 text-sm font-light">© {new Date().getFullYear()} NextWave Web Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}