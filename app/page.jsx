export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f2ee", color: "#1f1f1f" }}>

      {/* HEADER */}
      <header style={{ backgroundColor: "#1f1f1f", color: "#fff", padding: "20px" }}>
        <h1 style={{ margin: 0 }}>Rustywise Kitchen Cabinets</h1>
        <p style={{ margin: 0 }}>Owned by Gideon and Loraine</p>
      </header>

      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#2a2a2a", color: "#fff" }}>
        <h2>Custom Kitchen Cabinets Built to Last</h2>
        <p>Serving Gauteng • Consultation & call-out fees decided at appointment</p>
      </section>

      
      {/* ABOUT */}
      <section style={{ padding: "40px 20px", maxWidth: "900px", margin: "auto" }}>
        <h2>About Us</h2>
        <p>
          Rustywise Kitchen Cabinets specialises in custom-built kitchen cabinets,
          walk in closets, and professional installation. We focus on quality
          craftsmanship, honest pricing, and long-lasting results.
        </p>
      </section>
      
      {/* IMAGE SLIDER */}
<section style={{ padding: "50px 20px", backgroundColor: "#f0ede8" }}>
  <div
    style={{
      maxWidth: "900px",
      margin: "auto",
      overflow: "hidden",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    }}
  >
    <div
      style={{
        display: "flex",
        width: "900%",
        animation: "slide 50s infinite",
      }}
    >
      <img src="/images/kitchen1.jpg" style={{ width: "100%" }} />
      <img src="/images/kitchen2.jpg" style={{ width: "100%" }} />
      <img src="/images/kitchen3.jpg" style={{ width: "100%" }} />
      <img src="/images/kitchen4.jpg" style={{ width: "100%" }} />
      <img src="/images/kitchen5.jpg" style={{ width: "100%" }} />
      <img src="/images/kitchen6.jpg" style={{ width: "100%" }} />
      <img src="/images/cabinet4.jpg" style={{ width: "100%" }} />
      <img src="/images/cabinet5.jpg" style={{ width: "100%" }} />
      <img src="/images/cabinet6.jpg" style={{ width: "100%" }} />
    </div>
  </div>

  <style jsx>{`
    @keyframes slide {
      0% { transform: translateX(0%); }
      11% { transform: translateX(0%); }

      22% { transform: translateX(-100%); }
      33% { transform: translateX(-200%); }

      44% { transform: translateX(-300%); }
      55% { transform: translateX(-400%); }

      66% { transform: translateX(-500%); }
      77% { transform: translateX(-600%); }

      88% { transform: translateX(-700%); }
      100% { transform: translateX(-800%); }
    }
  `}</style>
</section>

      {/* SERVICES */}
      <section style={{ backgroundColor: "#ffffff", padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <ul style={{ maxWidth: "600px", margin: "auto", lineHeight: "1.8" }}>
          <li>Custom kitchen cabinets</li>
          <li>Cabinet refacing & upgrades</li>
          <li>Built-in cupboards</li>
          <li>walk in closets</li>
        </ul>
      </section>

      {/* BOOKING */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Book a 30-Minute Consultation</h2>
        <p>
          In-home consultations are available within Gauteng.
          Consultation and call-out fees are confirmed during booking.
        </p>

        <div style={{ maxWidth: "900px", margin: "30px auto", borderRadius: "12px", overflow: "hidden" }}>
          <iframe
            src="https://calendly.com/maximusrbt11/30min"
            width="100%"
            height="700"
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      {/* TERMS & FOOTER */}
      <footer style={{ backgroundColor: "#000", color: "#aaa", padding: "30px 20px", textAlign: "center" }}>
        <p style={{ maxWidth: "900px", margin: "auto", fontSize: "14px" }}>
          Terms & Conditions: Rustywise Kitchen Cabinets operates as a registered business website.
          All consultations are subject to confirmation. Pricing may vary based on design,
          materials, and installation requirements.
        </p>
        <p style={{ marginTop: "10px", fontSize: "12px" }}>
          © {new Date().getFullYear()} Rustywise Kitchen Cabinets. All rights reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27812728078?text=Hi%20I%20would%20like%20to%20enquire%20about%20kitchen%20cabinets"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}
      >
        💬 WhatsApp Us
      </a>

    </main>
  );
}
