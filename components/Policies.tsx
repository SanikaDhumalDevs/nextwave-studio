"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Policies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const policies =[
    {
      title: "Payment Terms",
      content: "We require a 50% advance payment before the project begins, and the remaining 50% after project completion but before final delivery and handover. No refunds are provided after project completion."
    },
    {
      title: "Domain & Hosting",
      content: "Domain and hosting are purchased directly in the client's name and email to ensure you have 100% ownership. These charges are paid separately by the client. We will remind you before yearly renewals, but if a domain expires due to non-renewal, NextWave Studio is not responsible."
    },
    {
      title: "Maintenance & Support",
      content: "Every project comes with 1 month of free technical support. After that, we offer an optional Annual Maintenance Plan (₹2,000 – ₹5,000/year depending on the website). This includes renewal reminders, small content updates, backup assistance, and technical support."
    },
    {
      title: "Client Responsibilities",
      content: "To ensure we hit our delivery timelines (5-20 days), the client must provide the logo, all text content, images, and necessary documents promptly. Delays in providing content will delay the final delivery of the project."
    },
    {
      title: "Important Notes",
      content: "Website ownership is transferred completely to you after full payment. Any major design changes requested after the initial approval, or additional features not discussed in the original scope, will be charged separately."
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5" id="policies">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-zinc-500 font-semibold tracking-widest uppercase text-xs mb-3">
            How We Work
          </h2>
          <h3 className="text-4xl font-bold text-white tracking-tighter mb-4">
            Studio <span className="text-zinc-500 font-light">Policies.</span>
          </h3>
          <p className="text-zinc-400 text-sm font-light">
            Clear expectations lead to successful projects. Here is everything you need to know.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {policies.map((policy, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index ? "bg-[#0A0A0A] border-white/20" : "bg-transparent border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-white">{policy.title}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-white" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-zinc-400 text-sm font-light leading-relaxed">
                  {policy.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}