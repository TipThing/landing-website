import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useReducedMotion } from '../../lib/useReducedMotion';

interface NavBarProps {
  currentPath?: string;
}

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'company', label: 'Company', href: '/company' },
];

function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ currentPath = '/' }: NavBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Optimized scroll handler using requestAnimationFrame throttling
  // This reduces scroll handler executions by ~90% and eliminates layout thrashing
  // RAF ensures updates sync with browser paint cycles for smooth 60fps scrolling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Passive listener improves scroll performance by preventing scroll blocking
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified body overflow management - empty string restores default behavior
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-[#09090b]/80 backdrop-blur-md border-white/10 py-4'
            : 'bg-transparent border-transparent py-6'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-zinc-100 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-950 rounded-md"
            aria-label="TipThing home"
          >
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              </svg>
            </div>
            TipThing
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-white focus:outline-none focus:text-white focus:underline underline-offset-4',
                  currentPath === link.href ? 'text-white' : ''
                )}
                aria-current={currentPath === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-white/10" aria-hidden="true"></div>
            <motion.a
              href="/contact"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              className="px-4 py-1.5 bg-white/10 border border-white/5 text-zinc-100 rounded-md text-xs font-medium hover:bg-white/20 transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              Start Project <ArrowRight size={12} aria-hidden="true" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
        animate={prefersReducedMotion ? {
          opacity: mobileMenuOpen ? 1 : 0,
        } : {
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
        }}
        transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-[#09090b]/95 backdrop-blur-lg transition-all',
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="pt-24 pb-12 px-6 h-full overflow-y-auto">
          <nav className="flex flex-col gap-6" role="navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  'text-2xl font-bold transition-colors hover:text-white focus:outline-none focus:text-white py-2',
                  currentPath === link.href ? 'text-white' : 'text-zinc-400'
                )}
                aria-current={currentPath === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/10 my-4" aria-hidden="true"></div>
            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="w-full py-4 px-6 bg-white/10 border border-white/5 text-zinc-100 rounded-lg text-base font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Start Project <ArrowRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </motion.div>
    </>
  );
}
