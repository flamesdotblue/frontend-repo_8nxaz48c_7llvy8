import { motion } from 'framer-motion';

const items = [
  {
    title: 'SaaS Dashboard',
    tag: 'Next.js • Tailwind • Charts',
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjE2NTkzNTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'E‑commerce Experience',
    tag: 'Headless • Performance • UX',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Creative Portfolio',
    tag: 'Framer Motion • Accessibility',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Selected work
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A glimpse of projects engineered for speed, clarity, and conversion.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.a
              key={card.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
            >
              <img src={card.image} alt={card.title} className="h-56 w-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-sm text-white/70">{card.tag}</div>
                <div className="text-lg font-semibold">{card.title}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div id="contact" className="mt-14 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
              <p className="text-white/70 mt-1">Let’s design and build something extraordinary together.</p>
            </div>
            <a href="mailto:hello@webrise.agency" className="px-6 py-3 rounded-lg bg-white text-black font-semibold shadow hover:opacity-90 transition-opacity">
              hello@webrise.agency
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
