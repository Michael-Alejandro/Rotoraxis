import { Plane, Shield, Clock, Users, Award, Globe2, ArrowRight } from 'lucide-react';

export default function AviationTalent() {
  return (
    <section id="aviation-talent" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Plane className="w-4 h-4" />
            <span className="font-semibold">Aviation Talent & Consulting</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Global Aviation Recruitment Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connecting world-class aviation professionals with leading airlines, helicopter operators, and aerospace companies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Multi-Stage Validation</h3>
            <p className="text-slate-600">Rigorous technical tests, licensing verification, and reference checks</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Immediate Availability</h3>
            <p className="text-slate-600">Access to certified professionals ready to deploy on short notice</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Globe2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Global Network</h3>
            <p className="text-slate-600">Worldwide reach with fast response times and local expertise</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <Users className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-2">For Companies</h3>
              <p className="text-blue-100">Access top-tier aviation professionals</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Validated Professionals</div>
                    <div className="text-slate-600 text-sm">Pilots, engineers, mechanics, and avionics specialists</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Compliance Guaranteed</div>
                    <div className="text-slate-600 text-sm">EASA, FAA, and OEM standards fully met</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Flexible Engagement</div>
                    <div className="text-slate-600 text-sm">Short-term, project-based, or long-term placements</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Dedicated Support</div>
                    <div className="text-slate-600 text-sm">Account managers and guaranteed replacements</div>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors w-full justify-center"
                >
                  Hire Top-Tier Aviation Professionals
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white">
              <Plane className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-2">For Candidates</h3>
              <p className="text-amber-100">Join the global aviation elite</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Exclusive Opportunities</div>
                    <div className="text-slate-600 text-sm">Airbus, Leonardo, Iberia, Emirates, and more</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Personalized Support</div>
                    <div className="text-slate-600 text-sm">Guidance through every hiring stage</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">International Mobility</div>
                    <div className="text-slate-600 text-sm">Global opportunities and competitive compensation</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-slate-900">Simple Process</div>
                    <div className="text-slate-600 text-sm">Apply → Validation → Matching → Onboarding</div>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors w-full justify-center"
                >
                  Join the Global Aviation Elite
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Our Specializations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">Commercial Airlines</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">Helicopter Operators</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">MRO Organizations</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">OEM Support</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">EMS Operations</span>
            <span className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">Offshore Operations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
