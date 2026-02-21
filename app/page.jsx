export default function Page() { return ( <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F5F2EE", minHeight: "100vh" }}> {/* Header */} <header style={{ padding: "30px", background: "linear-gradient(135deg, #1F1F1F, #3A2A24)", color: "white", textAlign: "center", }} > <h1 style={{ margin: 0, fontSize: "32px" }}>Rustywise Kitchen Cabinets</h1> <p style={{ marginTop: "8px", color: "#E0C9A6" }}> Owned by Gideon and Loraine Marais </p> </header>

{/* Hero */}
  <section
    style={{
      padding: "50px 20px",
      textAlign: "center",
      backgroundColor: "#FFFFFF",
    }}
  >
    <h2 style={{ fontSize: "28px", color: "#1F1F1F" }}>
      Custom Kitchen Cabinets
    </h2>
    <p style={{ maxWidth: "600px", margin: "16px auto", color: "#555" }}>
      Built with wisdom, care, and craftsmanship. Serving Gauteng with
      beautifully made kitchen cabinetry tailored to your space.
    </p>
  </section>

  {/* Images */}
  <section style={{ padding: "30px" }}>
    <h3 style={{ color: "#B44A2D" }}>Our Recent Work</h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        marginTop: "20px",
      }}
    >
      <img src="/images/kitchen1.jpg" style={{ width: "100%", borderRadius: "12px" }} />
      <img src="/images/kitchen2.jpg" style={{ width: "100%", borderRadius: "12px" }} />
      <img src="/images/cabinet1.jpg" style={{ width: "100%", borderRadius: "12px" }} />
    </div>
  </section>

  <section
    style={{
      padding: "40px 20px",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
    }}
  >
    <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
      Book a 30‑Minute Consultation
    </h3>
    <p style={{ maxWidth: "700px", margin: "0 auto 20px", color: "#555" }}>
      Consultation type and call‑out fees are determined at the time of
      appointment booking. In‑home consultations are available within
      Gauteng only.
    </p>
    <iframe
      src="https://calendly.com/maximusrbt11/30min"
      width="100%"
      height="600"
      frameBorder="0"
      style={{ borderRadius: "12px" }}
    />
  </section>

  

  {/* Terms and Conditions */}
  <footer
    style={{
      marginTop: "60px",
      padding: "30px 20px",
      backgroundColor: "#1F1F1F",
      color: "#CCCCCC",
      fontSize: "14px",
    }
  >
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h4 style={{ color: "#E0C9A6", marginBottom: "12px" }}>
        Terms & Conditions
      </h4>
      <p style={{ lineHeight: "1.6" }}>
        All services provided by Rustywise Kitchen Cabinets are subject to
        availability and confirmation. Consultation type, scope of work,
        pricing, and call-out fees are determined at the time of booking or
        consultation. Quotes provided are valid for a limited time and may
        be adjusted based on final measurements, material selection, or
        client-requested changes.
      </p>
      <p style={{ lineHeight: "1.6", marginTop: "10px" }}>
        Rustywise Kitchen Cabinets operates within Gauteng only for in-home
        consultations. By using this website or booking a consultation, you
        agree to these terms.
      </p>
      <p style={{ marginTop: "20px", fontSize: "13px", color: "#999" }}>
        © 2026 Rustywise Kitchen Cabinets. This is a registered business website. All rights reserved.
   </p>
    </div>
  </footer>
</main>

); }  {/* Booking */}
  <section
    style={{
      padding: "40px 20px",
      backgroundColor: "#FFFFFF",
      textAlign: "center",
    }}
  >
    <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
      Book a 30‑Minute Consultation
    </h3>
    <p style={{ maxWidth: "700px", margin: "0 auto 20px", color: "#555" }}>
      Consultation type and call‑out fees are determined at the time of
      appointment booking. In‑home consultations are available within
      Gauteng only.
    </p>
    <iframe
      src="https://calendly.com/maximusrbt11/30min"
      width="100%"
      height="600"
      frameBorder="0"
      style={{ borderRadius: "12px" }}
    />
  </section>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/27812728078?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20kitchen%20cabinets."
    target="_blank"
    style={{
      position: "fixed",
      left: "20px",
      bottom: "20px",
      background: "#25D366",
      color: "white",
      padding: "14px 20px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "bold",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    }}
  >
    WhatsApp Us
  </a>
</footer>    
</main>

); }
