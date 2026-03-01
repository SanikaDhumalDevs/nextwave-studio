import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const packages =[
    {
      name: "Basic",
      price: "4,999",
      target: "Coaching | Small Biz | Portfolio",
      features:[
        "Up to 5 Pages (Home, About, etc.)",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Free Support",
      ],
      highlighted: false,
      delivery: "5-7 Days"
    },
    {
      name: "Standard",
      price: "8,999",
      target: "Growing Businesses & Agencies",
      features:[
        "Everything in Basic, plus:",
        "Admin Panel (If required)",
        "Dynamic Content Updates",
        "WhatsApp & Google Maps Integration",
        "Basic Performance Optimization",
      ],
      highlighted: true, // This makes it stand out
      delivery: "7-10 Days"
    },
    {
      name: "Dynamic",
      price: "12,999+",
      target: "Online Courses & Institutes",
      features:[
        "Everything in Standard, plus:",
        "Advanced Admin Dashboard",
        "Course Upload System",
        "Secure User Login (If required)",
        "Advanced Custom Functionality",
      ],
      highlighted: false,
      delivery: "10-20 Days"
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-zinc-500 font-semibold tracking-widest uppercase text-xs mb-3">
            Transparent Investment
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Simple Pricing. <span className="text-zinc-500 font-light">No Surprises.</span>
          </h3>
          <p className="text-zinc-400 text-lg font-light">
            Choose a package that fits your goals. High-end development doesn't have to break the bank.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 lg:p-10 border transition-all duration-300 flex flex-col h-full ${
                pkg.highlighted 
                  ? "bg-[#0A0A0A] border-white/20 shadow-2xl lg:scale-105 z-10" 
                  : "bg-[#050505] border-white/5 hover:border-white/10"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                <p className="text-zinc-500 text-sm font-light">{pkg.target}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10">
                <span className="text-4xl font-extrabold text-white">₹{pkg.price}</span>
                <span className="text-zinc-500 text-sm font-light"> /project</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-zinc-300 shrink-0" />
                    <span className="text-zinc-400 font-light text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="mb-6 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <span>Timeline</span>
                  <span className="text-white">{pkg.delivery}</span>
                </div>
                <Link 
                  href="#contact" 
                  className={`w-full block text-center py-4 rounded-full font-semibold transition-all ${
                    pkg.highlighted
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }`}
                >
                  Select Package
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Important Policy Note (UPDATED) */}
        <div className="max-w-4xl mx-auto text-center bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 sm:p-8">
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            <span className="text-white font-semibold">Important Note:</span> The prices listed above are starting estimates and <strong className="text-zinc-200">may vary based on your specific custom requirements.</strong> Domain & Hosting charges are separate and purchased in the client's name to ensure full ownership. Annual maintenance plans start at ₹2,000/year after your first month of free support.
          </p>
        </div>

      </div>
    </section>
  );
}