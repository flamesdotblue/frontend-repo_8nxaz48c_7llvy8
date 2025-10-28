import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Elevate Your Web Presence with <span className="text-white/80">WEBRISE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-5 text-white/80 text-lg max-w-2xl"
          >
            We craft high-performance websites and digital experiences that drive growth. Specializing in Web Development & Designing with a focus on speed, accessibility, and conversion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:opacity-90 transition-opacity pointer-events-auto">
              Start a Project
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors pointer-events-auto">
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex items-center gap-4 text-sm text-white/60"
          >
            <span className="h-1 w-10 rounded bg-white/30" />
            <span>Futuristic. Minimal. Conversion-focused.</span>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-white/60 text-sm">Websites Launched</dt>
                <dd className="text-3xl font-bold">120+</dd>
              </div>
              <div>
                <dt className="text-white/60 text-sm">Avg. PageSpeed</dt>
                <dd className="text-3xl font-bold">95+</dd>
              </div>
              <div>
                <dt className="text-white/60 text-sm">Client Satisfaction</dt>
                <dd className="text-3xl font-bold">99%</dd>
              </div>
              <div>
                <dt className="text-white/60 text-sm">Years Experience</dt>
                <dd className="text-3xl font-bold">7+</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
