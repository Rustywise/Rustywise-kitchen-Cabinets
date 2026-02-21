import { motion } from "framer-motion";

export default function RustywiseKitchenCabinets() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#F5F2EE", color: "#1F1F1F" }}>
      
      {/* Header */}
      <header style={{ background: "#1F1F1F", color: "white", padding: "16px" }}>
        <h1>Rustywise Kitchen Cabinets</h1>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 20px", background: "#1F1F1F", color: "white", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "40px", marginBottom: "20px" }}
        >
          Cabinets Built With Wisdom & Craft
        </motion.h2>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Custom kitchen cabinets made to last — blending timeless craftsmanship with modern design.
        </p>
      </section>

      {/* About */}
      <section style={{ padding: "60px 20px" }}>
        <h2>About Rustywise</h2>
        <p>
          Rustywise Kitchen Cabinets was founded on the belief that great kitchens start with solid craftsmanship.
          We design and build cabinets that feel warm, work hard, and stand the test of time.
        </p>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 20px", background: "white" }}>
        <h2>Our Cabinet Solutions</h2>
        <ul>
          <li>Custom Kitchens</li>
          <li>Refacing & Upgrades</li>
          <li>Storage Solutions</li>
        </ul>
      </section>

      {/* Booking */}
      <section style={{ padding: "60px 20px", background: "white" }}>
        <h2>Book a 30-Minute Kitchen Cabinet Consultation</h2>
        <p>
          Consultation type and call-out fee are confirmed during booking.
          In-home consultations are limited to Gauteng.
        </p>
        <iframe
          src="https://calendly.com/maximusrbt11/30min"
          width="100%"
          height="700"
          style={{ border: "none" }}
        ></iframe>
      </section>

      {/* Footer */}
      <footer style={{ background: "black", color: "#aaa", padding: "20px", textAlign: "center" }}>
        © {new Date().getFullYear()} Rustywise Kitchen Cabinets
      </footer>

    </div>
  );
            }
