import Link from "next/link";
import { ArrowRight, LayoutTemplate, Zap, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
      
      {/* Very subtle glow behind text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle top badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
          <span className="text-zinc-300 text-xs font-semibold tracking-widest uppercase">Premium Web Studio</span>
        </div>

        {/* Massive Classy Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter mb-8 leading-[1.1]">
          Elevating Digital <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">
            Experiences.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We craft bespoke, lightning-fast websites for businesses that demand excellence. Clean design, flawless performance, zero compromises.
        </p>

        {/* High-End Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
          <Link href="#pricing" className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-full font-semibold transition-all">
            View Pricing <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#portfolio" className="w-full sm:w-auto flex justify-center items-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
            Explore Portfolio
          </Link>
        </div>

        {/* Feature Highlights Grid (Apple-style cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left" id="about">
          
          <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <LayoutTemplate className="w-6 h-6 text-zinc-300" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Refined Design</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">Minimalist, conversion-focused aesthetics that establish immediate trust with your high-ticket clients.</p>
          </div>

          <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6 text-zinc-300" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Flawless Responsive</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">Pixel-perfect engineering ensuring your website looks spectacular on every device and screen size.</p>
          </div>

          <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-zinc-300" />
            </div>
            <h3 className="text-white font-semibold text-xl mb-3">Peak Performance</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">Built on Next.js for sub-second load times, providing a massive advantage for SEO and user retention.</p>
          </div>

        </div>

      </div>
    </section>
  );
}