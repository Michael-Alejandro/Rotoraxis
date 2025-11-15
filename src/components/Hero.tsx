import { ArrowRight, Mail, MapPin } from 'lucide-react';
import screenshot from '../assets/rotoraxislogo.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 text-center">

        {/* Imagen redonda centrada arriba */}
        <div className="mb-4 flex justify-center -mt-10">
          <img
            src={screenshot}
            alt="Rotoraxis logo"
            className="w-52 h-52 object-cover rounded-full border-4 border-amber-400 shadow-2xl"
          />
        </div>

        <div className="mb-8 flex justify-center gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-400" />
            <a
              href="mailto:rotoraxisconsulting@gmail.com"
              className="hover:text-white transition-colors">
              rotoraxisconsulting@gmail.com
            </a>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Bridge to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
            Global Opportunities
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          Tax efficiency. Aviation excellence.
        </p>

        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
          Rotoraxis Consulting provides umbrella company services, fiscal residency solutions in Dubai,
          and specialized recruitment of aviation professionals for airlines and helicopter operators worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tax-residency"
            className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-300 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
          >
            Optimize Your Taxes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#aviation-talent"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
          >
            Find Aviation Talent
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

