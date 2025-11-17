import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'tax',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_mvxrxyn",
      "template_8a43lm4",
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      "z5WgKaDc2ZL4pFb6e"
    )
    .then(() => {
      alert("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "tax",
        message: ""
      });
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("There was an error sending your message.");
    });
  };

  return (
    <>
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Gateway to a Smarter, Global Future
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you seek tax optimization in Dubai or top aviation professionals worldwide —
              Rotoraxis Consulting is your trusted partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* GET IN TOUCH */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:rotoraxisconsulting@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                      rotoraxisconsulting@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+971524087059" className="text-slate-300 hover:text-amber-400 transition-colors">
                      +971 52 408 7059
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-slate-300">Dubai, United Arab Emirates</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="#tax-residency"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
                >
                  <span>Learn About Tax Residency</span>
                </a>
                <a
                  href="#aviation-talent"
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
                >
                  <span>Explore Aviation Services</span>
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">I'm interested in</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  >
                    <option value="tax">Tax Residency & Umbrella Company</option>
                    <option value="hiring">Hiring Aviation Professionals</option>
                    <option value="candidate">Joining as a Candidate</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971524087059"
        target="_blank"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-16 right-5 w-14 h-14 z-[1000] transition-transform duration-300 hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-full h-full object-contain drop-shadow-md"
        />
      </a>
    </>
  );
}
