import screenshot from '../assets/rotoraxislogo.jpg';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo en lugar del icono del avión */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shadow-lg flex items-center justify-center bg-slate-900">
              <img
                src={screenshot}
                alt="Rotoraxis logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Rotoraxis Consulting</div>
              <div className="text-xs">Global opportunities. Tax efficiency.</div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Rotoraxis Consulting. All rights reserved.
            </p>
            <p className="text-xs mt-1">Dubai, United Arab Emirates</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#tax-residency" className="hover:text-amber-400 transition-colors">Tax Services</a>
            <a href="#aviation-talent" className="hover:text-amber-400 transition-colors">Aviation</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs">
          <p>
            Providing fully legal, transparent, and personalized consulting services for tax optimization and aviation recruitment worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
