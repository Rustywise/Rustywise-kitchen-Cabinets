export default function RustywiseKitchenCabinets() { return ( <div className="min-h-screen bg-[#F5F2EE] text-[#1F1F1F]"> {/* Header */} <header className="sticky top-0 z-50 bg-[#1F1F1F] text-white shadow-lg"> <div className="max-w-7xl mx-auto flex items-center justify-between p-4"> <h1 className="text-2xl font-bold tracking-wide">Rustywise Kitchen Cabinets</h1> <nav className="space-x-6 hidden md:block"> <a href="https://wa.me/27831234567?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20kitchen%20cabinets." target="_blank" rel="noopener noreferrer" style={{ position: "fixed", left: "20px", bottom: "20px", backgroundColor: "#25D366", width: "60px", height: "60px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", zIndex: 9999, }}
> 

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="32" height="32"

> 

<path d="M20.52 3.48A11.91 11.91 0 0 0 12.07 0C5.44 0 .07 5.37.07 12a11.9 11.9 0 0 0 1.64 6L0 24l6.2-1.63A11.93 11.93 0 0 0 12.07 24C18.7 24 24.07 18.63 24.07 12c0-3.19-1.25-6.19-3.55-8.52ZM12.07 21.82a9.82 9.82 0 0 1-5-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.82 9.82 0 1 1 8.3 4.58Zm5.44-7.35c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />

  </svg>
</a>
            <a href="#services" className="hover:text-[#B44A2D]">Cabinets</a>
            <a href="#projects" className="hover:text-[#B44A2D]">Projects</a>
            <a href="#contact" className="hover:text-[#B44A2D]">Contact</a>
          </nav>
        </div>
      </header>{/* Hero */}
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
          src="https://calendly.com/gideonloraine-marais/30min"
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

); }    style={{ width: "100%", borderRadius: "12px" }}
  />
  <img
    src="/images/kitchen2.jpg"
    alt="Modern kitchen cabinets by Rustywise"
    style={{ width: "100%", borderRadius: "12px" }}
  />
  <img
    src="/images/cabinet1.jpg"
    alt="Cabinet detail by Rustywise"
    style={{ width: "100%", borderRadius: "12px" }}
  />
</div>
          <h3 style={{ marginTop: "40px" }}>Book a 30-Minute Consultation</h3>

          <p>
            Consultation and call-out fees are confirmed during booking.
          </p>

          <iframe
            src="https://calendly.com/maximusrbt11/30min"
            width="100%"
            height="700"
            style={{ border: "none", marginTop: "20px" }}
          ></iframe>
        </main>

        <footer style={{ backgroundColor: "#000", color: "#aaa", padding: "20px", textAlign: "center" }}>
          © {new Date().getFullYear()} Rustywise Kitchen Cabinets · Owned by Gideon and Loraine Marais
        </footer>
      </div>
<a
  href="https://wa.me/27812728078?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20kitchen%20cabinets."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    left: "20px",
    bottom: "20px",
    backgroundColor: "#25D366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 9999,
  }}
>
  <img
    src="/whatsapp.svg"
    alt="WhatsApp Chat"
    style={{ width: "32px", height: "32px" }}
  />
</a>  
      
      }
