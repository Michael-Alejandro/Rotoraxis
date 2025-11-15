import { CheckCircle2, ArrowRight, Building2, Users } from "lucide-react";
import { useState } from "react";
import TaxForm from "./TaxForm";

export default function TaxResidency() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="tax-residency" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Umbrella & Fiscal Residency in Dubai
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Establish your legal tax residency in one of the world's most
            tax-efficient jurisdictions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Create Your Own Company
            </h3>
            <p className="text-slate-600 mb-6">
              Full control and ownership of your Dubai-based entity
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-4">≈€8,000</div>
            <p className="text-sm text-slate-500 mb-6">First year setup cost</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Complete corporate structure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Business bank account setup</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Fiscal residency certificate
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Join Existing Company
            </h3>
            <p className="text-slate-600 mb-6">
              Cost-effective solution as an employee
            </p>
            <div className="text-3xl font-bold text-amber-600 mb-4">≈€4,000</div>
            <p className="text-sm text-slate-500 mb-6">First year setup cost</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Immediate setup</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Lower administrative burden
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Fiscal residency certificate
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-lg">0% Tax Rate</div>
                    <div className="text-slate-300">
                      No income, dividend, or wealth tax
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-lg">
                      Minimal Stay Requirements
                    </div>
                    <div className="text-slate-300">
                      6-8 days first year, 1-2 days following years
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-lg">
                      100% Legal & Compliant
                    </div>
                    <div className="text-slate-300">
                      Globally transferable and fully transparent
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-amber-400 mb-2">
                  ≈€6,000
                </div>
                <div className="text-slate-300">Average annual cost</div>
              </div>
              <div className="border-t border-white/20 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">For €100K income</span>
                  <span className="text-2xl font-bold text-amber-400">≈6%</span>
                </div>
                <div className="text-sm text-slate-400">Effective tax rate</div>
              </div>
            </div>
          </div>

          {/* ---------- BOTÓN PARA MOSTRAR / OCULTAR FORMULARIO ---------- */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Establish Your Smart Tax Residency in Dubai
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* ---------- FORMULARIO APARECE AQUÍ ---------- */}
          {showForm && (
            <div id="" className="mt-10" >
              <TaxForm />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
