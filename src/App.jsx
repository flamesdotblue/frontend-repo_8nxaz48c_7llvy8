import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="font-inter bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
      </main>
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} WEBRISE — Web Development & Designing</p>
          <div className="text-white/60 text-sm">Built with precision, performance, and purpose.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
