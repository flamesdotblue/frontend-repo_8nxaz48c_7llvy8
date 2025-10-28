import { motion } from 'framer-motion';
import { Code, MonitorSmartphone, Sparkles, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern, scalable frontends and backends built with best-in-class frameworks and performance in mind.',
  },
  {
    icon: MonitorSmartphone,
    title: 'UI/UX & Responsive Design',
    desc: 'Polished, accessible interfaces that look flawless on any device and drive user engagement.',
  },
  {
    icon: Sparkles,
    title: 'Brand & Visual Systems',
    desc: 'Clean visual language and motion design that communicates your value with clarity and confidence.',
  },
  {
    icon: Rocket,
    title: 'Optimization & SEO',
    desc: 'Core Web Vitals, accessibility, SEO, and conversion optimization baked into every launch.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          What we do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          End-to-end web development and designing for ambitious brands. Strategy, design, code, and optimization under one roof.
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur p-6"
            >
              <div className="h-11 w-11 rounded-lg bg-white text-black flex items-center justify-center shadow">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="absolute inset-0 -z-[1] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(40% 40% at 50% 0%, rgba(255,255,255,0.12), transparent 70%)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
