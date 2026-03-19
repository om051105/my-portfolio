import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sec = useRef();

  useEffect(() => {
    gsap.fromTo('.contact-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sec.current, start: 'top 75%' } }
    );
    gsap.fromTo('.github-stat-img',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.github-stat-img', start: 'top 85%' } }
    );
  }, []);

  const contacts = [
    { label: 'Email',     sub: 'singhsid2005@gmail.com', href: 'mailto:singhsid2005@gmail.com',       icon: '✉' },
    { label: 'LinkedIn',  sub: 'Om Singh',                href: 'https://linkedin.com/in/om051105',    icon: '⟶' },
    { label: 'GitHub',    sub: 'github.com/om051105',    href: 'https://github.com/om051105',          icon: '◈' },
    { label: 'Phone',     sub: '+91 9456196440',         href: 'tel:+919456196440',                    icon: '◎' },
    { label: 'WhatsApp',  sub: '+91 9456196440',         href: 'https://wa.me/919456196440',           icon: '◎' },
    { label: 'Location',  sub: 'Haridwar, Uttarakhand',  href: null,                                   icon: '◉' },
  ];

  return (
    <section id="contact" className="min-h-screen px-6 md:px-20 py-32" ref={sec}>
      <span className="chapter-number">06</span>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="accent-line" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: 'var(--accent)' }}>
            Chapter Six — Contact
          </span>
        </div>

        <div className="overflow-hidden mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-[#E8F0FF] uppercase">
            Initiate<br />Contact
          </h2>
        </div>

        <p className="text-sm text-[#4A5070] max-w-md leading-relaxed mb-16">
          Open for research collaborations, startup roles, and building the next generation of
          <span className="text-[#E8F0FF]"> intelligent systems</span>. Let's connect.
        </p>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-24">
          {contacts.map(({ label, sub, href, icon }) => {
            const El = href ? 'a' : 'div';
            return (
              <El key={label} href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="contact-card group card-glass rounded-2xl p-7 flex items-start gap-5 hover:border-[var(--accent)] transition-all duration-400">
                <span className="text-2xl text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity shrink-0">
                  {icon}
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#4A5070] font-semibold mb-1">{label}</div>
                  <div className="text-sm text-[#E8F0FF] font-medium group-hover:text-[var(--accent)] transition-colors duration-300">{sub}</div>
                </div>
              </El>
            );
          })}
        </div>

        {/* GitHub Stats — auto-updates live from GitHub */}
        <div>
          <h3 className="text-[10px] uppercase tracking-widest text-[#4A5070] font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
            GitHub Activity — live, auto-updates with every push
          </h3>

          {/* Contribution graph */}
          <div className="w-full overflow-x-auto mb-6">
            <img
              src="https://ghchart.rshah.org/00D4FF/om051105"
              alt="GitHub contribution graph"
              className="github-stat-img rounded-xl w-full max-w-4xl opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>

          {/* Stats cards */}
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=om051105&show_icons=true&theme=transparent&hide_border=true&title_color=00D4FF&text_color=E8F0FF&icon_color=9B4DFF&bg_color=07071A"
              alt="GitHub stats"
              className="github-stat-img rounded-2xl border border-white/5 hover:border-[var(--accent)] transition-all duration-300"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=om051105&layout=compact&theme=transparent&hide_border=true&title_color=00D4FF&text_color=E8F0FF&bg_color=07071A"
              alt="Top languages"
              className="github-stat-img rounded-2xl border border-white/5 hover:border-[var(--accent)] transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-4">
          <span className="text-[10px] uppercase tracking-widest text-[#4A5070]">
            © {new Date().getFullYear()} Om Singh — Machine Learning Engineer
          </span>
          <span className="text-[10px] uppercase tracking-widest flex items-center gap-2" style={{ color: 'var(--accent)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block animate-pulse" />
            System Online
          </span>
        </div>
      </div>
    </section>
  );
}
