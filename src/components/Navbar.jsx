import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-md bg-white text-black flex items-center justify-center">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-wide">WEBRISE</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-white/80 hover:text-white transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:opacity-90 transition-opacity">Start a Project</a>
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-xl p-4 mx-1">
            {items.map((it) => (
              <a key={it.href} href={it.href} className="text-white/90" onClick={() => setOpen(false)}>
                {it.label}
              </a>
            ))}
            <a href="#contact" className="px-4 py-2 rounded-md bg-white text-black font-medium text-center" onClick={() => setOpen(false)}>
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
