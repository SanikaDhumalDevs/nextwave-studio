"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Waves } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#050505]/80 backdrop-blur-lg border-b border-white/10 fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Minimalist Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                <Waves className="h-5 w-5 text-black" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                NextWave<span className="text-zinc-400 font-light">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Services</Link>
            <Link href="#portfolio" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Portfolio</Link>
            <Link href="#pricing" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Pricing</Link>
            <Link href="#policies" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">Policies</Link>
            <Link href="#contact" className="bg-white hover:bg-zinc-200 text-black px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white transition-colors">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 absolute w-full left-0 shadow-2xl pb-6">
          <div className="px-4 pt-4 space-y-2 flex flex-col">
            <Link href="#services" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Services</Link>
            <Link href="#portfolio" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Portfolio</Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Pricing</Link>
            <Link href="#policies" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-zinc-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Policies</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="block mt-4 text-center bg-white text-black px-6 py-3 rounded-full font-semibold">
              Start Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}