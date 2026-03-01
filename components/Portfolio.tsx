import { ArrowUpRight, ArrowRight } from "lucide-react"; // Removed UserCircle, you don't need it anymore!

export default function Portfolio() {
  const projects =[
    {
      id: 1,
      title: "Titan Fitness",
      category: "Gym & Fitness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
      description: "A dark, aggressive, high-energy website with membership pricing and class schedules.",
      demoLink: "https://gym-demo-one-eosin.vercel.app/", 
    },
    {
      id: 2,
      title: "Aura Beauty Studio",
      category: "Premium Salon",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
      description: "An elegant, soft-pink aesthetic featuring a beautiful gallery and appointment booking.",
      demoLink: "https://beauty-demo-opal.vercel.app/", 
    },
    {
      id: 3,
      title: "Apex Academy",
      category: "Education & Coaching",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      description: "A highly-converting, trustworthy layout with courses, a wall of fame, and lead capture.",
      demoLink: "https://coaching-demo-sigma.vercel.app/", 
    },
    {
      id: 4,
      title: "Sanika Dev Portfolio",
      category: "Personal Brand",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      description: "A sleek, minimalist personal website to showcase skills, resume, and contact details professionally.",
      demoLink: "https://sanika-portfolio-2025.vercel.app/", 
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-zinc-500 font-semibold tracking-widest uppercase text-xs mb-3">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Proof of <span className="text-zinc-500 font-light">Excellence.</span>
            </h3>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <a 
              href={project.demoLink}
              target="_blank" 
              rel="noopener noreferrer"
              key={project.id} 
              className="group relative block bg-[#0A0A0A] rounded-3xl border border-white/5 overflow-hidden hover:border-white/15 transition-colors cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-zinc-900 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-2">{project.category}</p>
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="flex justify-center mb-20">
          <a href="#contact" className="group flex items-center gap-2 bg-transparent border border-white/10 hover:border-white/30 text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-white/5">
            Explore More Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Meet the Founder Banner */}
        <div className="bg-gradient-to-r from-[#0A0A0A] to-[#111] rounded-3xl border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-primary-500/10 blur-[80px] rounded-full"></div>
          
          <div className="flex items-center gap-6 relative z-10">
            
            {/* THIS IS THE UPDATED IMAGE PART */}
            <div className="w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden shrink-0 shadow-xl">
              <img 
                src="/founder.jpeg" /* <-- MAKE SURE YOUR IMAGE IS NAMED founder.jpg AND IS IN THE public FOLDER */
                alt="Sanika - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Meet Sanika, The Founder</h4>
              <p className="text-zinc-400 text-sm font-light max-w-md leading-relaxed">
                Behind NextWave is a passionate full-stack developer dedicated to building high-performance, premium web applications.
              </p>
            </div>
          </div>
          
          <div className="relative z-10 w-full md:w-auto">
            <a href="https://sanika-portfolio-2025.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full font-semibold transition-all">
              View Personal Portfolio <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}