import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const links = [
  { label: 'Story',    href: '#about'   },
  { label: 'Journey',  href: '#journey' },
  { label: 'Skills',   href: '#skills'  },
  { label: 'Projects', href: '#projects'},
  { label: 'AI Lab',   href: '#ai-lab'  },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? 'bg-[#05050F]/80 backdrop-blur-2xl border-b border-white/5' : ''
    }`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="font-display text-xl font-bold tracking-tighter text-[#E8E4DA] select-none">
          OM<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={(e) => go(e, href)}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#5A5A72] hover:text-[#E8E4DA] transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/om051105" target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold px-5 py-2 border border-white/10 rounded-full text-[#E8E4DA] hover:bg-white/5 transition-all duration-300">
            GitHub
          </a>
          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block h-px w-6 bg-[#E8E4DA] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px w-6 bg-[#E8E4DA] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#E8E4DA] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#05050F]/95 backdrop-blur-xl border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={(e) => go(e, href)}
              className="text-sm uppercase tracking-widest font-medium text-[#5A5A72] hover:text-[#E8E4DA]">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
