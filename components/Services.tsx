import { Layers, Sparkles, Briefcase, Code2, Terminal, Cloud } from "lucide-react";

export default function Services() {
  const STUDIO_SERVICES =[
    {
      title: "Full Stack Websites",
      desc: "Modern, scalable applications built with MERN, TypeScript, and Next.js for high performance.",
      icon: <Layers className="w-6 h-6 text-zinc-300" />
    },
    {
      title: "Portfolio Websites",
      desc: "Stunning personal brands for professionals and students to stand out in the competitive market.",
      icon: <Sparkles className="w-6 h-6 text-zinc-300" />
    },
    {
      title: "Business Websites",
      desc: "Professional sites tailored for startups and small businesses to grow online.",
      icon: <Briefcase className="w-6 h-6 text-zinc-300" />
    },
    {
      title: "Academic Projects",
      desc: "End-to-end Final Year Project development with clean code, documentation, and logic guidance.",
      icon: <Code2 className="w-6 h-6 text-zinc-300" />,
      tag: "Student Friendly"
    },
    {
      title: "Legacy PHP Systems",
      desc: "Custom PHP & MySQL development for management systems and registration portals.",
      icon: <Terminal className="w-6 h-6 text-zinc-300" />
    },
    {
      title: "Hosting & Deployment",
      desc: "Complete assistance in taking your project live on Vercel, Hostinger, Render, or custom servers.",
      icon: <Cloud className="w-6 h-6 text-zinc-300" />
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-zinc-500 font-semibold tracking-widest uppercase text-xs mb-3">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Premium Digital <span className="text-zinc-500 font-light">Solutions.</span>
          </h3>
          <p className="text-zinc-400 text-lg font-light">
            From high-end business platforms to final year academic projects, we engineer perfection at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Optional Tag (Like "Student Friendly") */}
              {service.tag && (
                <div className="absolute top-6 right-6 bg-white/10 border border-white/10 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
                  {service.tag}
                </div>
              )}

              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                {service.title}
              </h4>
              
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}