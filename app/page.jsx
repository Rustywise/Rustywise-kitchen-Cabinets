"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F5F2EE] text-[#1F1F1F]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1F1F1F] text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold tracking-wide">
            Rustywise Kitchen Cabinets
          </h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#about" className="hover:text-[#B44A2D]">About</a>
            <a href="#services" className="hover:text-[#B44A2D]">Cabinets</a>
            <a href="#projects" className="hover:text-[#B44A2D]">Projects</a>
            <a href="#booking" className="hover:text-[#B44A2D]">Booking</a>
          </nav>
        </div>
  <>
    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/27821234567?text=Hello%20I%20would%20like%20to%20enquire%20about%20kitchen%20cabinets"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-[9999] flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        width="28"
        height="28"
      >
        <path d="M19.11 17.205c-.372-.186-2.2-1.085-2.54-1.21-.34-.124-.588-.186-.836.187-.248.372-.96 1.21-1.176 1.457-.216.248-.432.279-.804.093-.372-.186-1.57-.578-2.99-1.84-1.105-.986-1.85-2.206-2.067-2.578-.216-.372-.023-.573.163-.759.167-.166.372-.433.558-.65.186-.216.248-.372.372-.62.124-.248.062-.465-.031-.65-.093-.186-.836-2.017-1.145-2.77-.301-.723-.607-.625-.836-.637-.216-.01-.465-.01-.713-.01-.248 0-.65.093-.99.465-.34.372-1.3 1.27-1.3 3.1 0 1.83 1.331 3.597 1.517 3.845.186.248 2.623 4.01 6.36 5.623.89.383 1.584.612 2.125.783.892.283 1.703.243 2.344.148.715-.106 2.2-.899 2.51-1.768.31-.868.31-1.613.217-1.768-.093-.155-.34-.248-.713-.434z" />
      </svg>
    </a>
  </>
);
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2A2A2A] to-[#1F1F1F] text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Cabinets Built With Wisdom & Craft
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Custom kitchen cabinets built with care, quality, and experience.
          </p>
        </div>
      </section><img
  src="/images/kitchen1.jpg"
  alt="Custom kitchen cabinets by Rustywise"
  className="w-full rounded-2xl shadow-lg"
/>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">About Rustywise</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rustywise Kitchen Cabinets is proudly owned and operated by
              <strong> Gideon and Loraine Marais</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The business was founded on the belief that great kitchens start
              with honest craftsmanship, quality materials, and attention to
              detail. Every cabinet is designed to last and feel like home.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <ul className="space-y-4 text-gray-800">
              <li>✔ Custom-built kitchen cabinets</li>
              <li>✔ Premium materials & finishes</li>
              <li>✔ Careful installation</li>
              <li>✔ Trusted local craftsmanship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16">
            Our Cabinet Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Custom Kitchens", "Cabinet Refacing", "Storage Solutions"].map(
              (service) => (
                <div
                  key={service}
                  className="rounded-2xl shadow-sm hover:shadow-lg transition p-8"
                >
                  <h4 className="text-xl font-semibold mb-3">{service}</h4>
                  <p className="text-gray-600">
                    Designed around your space, lifestyle, and vision.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <img
    src="/images/cabinet2.jpg"
    alt="Cabinet detail by Rustywise"
    className="rounded-2xl shadow-lg"
  />
  <img
    src="/images/cabinet1.jpg"
    alt="Cabinet detail by Rustywise"
    className="rounded-2xl shadow-lg"
  />
  <img
  src="/images/kitchen1.jpg"
  alt="Custom kitchen cabinets by Rustywise"
  className="w-full rounded-2xl shadow-lg"
/>
<img
  src="/images/kitchen2.jpg"
  alt="Custom kitchen cabinets by Rustywise"
  className="w-full rounded-2xl shadow-lg"
/>
<img
    src="/images/cabinet3.jpg"
    alt="Cabinet detail by Rustywise"
    className="rounded-2xl shadow-lg"
  />
      {/* Booking */}
      <section id="booking" className="py-24 bg-[#F5F2EE]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Book a 30-Minute Consultation
          </h3>
          <p className="text-gray-600 mb-10">
            Consultation and call-out fees are confirmed during booking.
            In-home consultations are available within Gauteng only.
          </p>

          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://calendly.com/maximusrbt11/30min"
              width="100%"
              height="700"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} Rustywise Kitchen Cabinets ·
        Owned by Gideon and Loraine Marais
      </footer>
    </div>
  );
            }
