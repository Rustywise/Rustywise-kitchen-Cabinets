import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

export default function RustywiseKitchenCabinets() { return ( <div className="min-h-screen bg-[#F5F2EE] text-[#1F1F1F]"> {/* Header */} <header className="sticky top-0 z-50 bg-[#1F1F1F] text-white shadow-lg"> <div className="max-w-7xl mx-auto flex items-center justify-between p-4"> <h1 className="text-2xl font-bold tracking-wide">Rustywise Kitchen Cabinets</h1> <nav className="space-x-6 hidden md:block"> <a href="#about" className="hover:text-[#B44A2D]">About</a> <a href="#services" className="hover:text-[#B44A2D]">Cabinets</a> <a href="#projects" className="hover:text-[#B44A2D]">Projects</a> <a href="#contact" className="hover:text-[#B44A2D]">Contact</a> </nav> </div> </header>

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
        Custom kitchen cabinets made to last — blending timeless craftsmanship with modern design.
      </p>
      <Button className="bg-[#B44A2D] hover:bg-[#9E4027] text-white px-8 py-6 text-lg rounded-2xl">
        Get a Free Quote
      </Button>
    </div>
  </section>

  {/* About */}
  <section id="about" className="py-24">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl font-bold mb-4">About Rustywise</h3>
        <p className="text-gray-700 leading-relaxed">
          Rustywise Kitchen Cabinets was founded on the belief that great kitchens start with solid craftsmanship. 
          We design and build cabinets that feel warm, work hard, and stand the test of time.
        </p>
      </div>
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-8">
          <ul className="space-y-4 text-gray-800">
            <li>✔ Custom-built cabinetry</li>
            <li>✔ Premium hardwood & finishes</li>
            <li>✔ Precision installation</li>
            <li>✔ Honest timelines & pricing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>

  {/* Services */}
  <section id="services" className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-16">Our Cabinet Solutions</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {["Custom Kitchens", "Refacing & Upgrades", "Storage Solutions"].map((service) => (
          <Card key={service} className="rounded-2xl shadow-sm hover:shadow-lg transition">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold mb-3">{service}</h4>
              <p className="text-gray-600">
                Designed around your space, style, and daily needs — no shortcuts, no prefab compromises.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* Projects */}
  <section id="projects" className="py-24">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Recent Work</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        From cozy family kitchens to bold modern spaces — every project reflects our commitment to detail.
      </p>
    </div>
  </section>

  {/* Booking */}
  <section id="booking" className="bg-white py-24">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold mb-6">Book a 30‑Minute Kitchen Cabinet Consultation</h3>
      <p className="text-gray-600 mb-10">
        Schedule a one-on-one 30‑minute consultation with our cabinet experts. Consultation type and call-out fee are confirmed during booking. In‑home consultations are limited to Gauteng.
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
    © {new Date().getFullYear()} Rustywise Kitchen Cabinets. All rights reserved.
  </footer>
</div>

); }
