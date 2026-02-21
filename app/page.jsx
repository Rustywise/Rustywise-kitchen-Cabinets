export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ padding: "20px", background: "#1F1F1F", color: "white" }}>
        <h1>Rustywise Kitchen Cabinets</h1>
        <p>Owned by Gideon and Loraine Marais</p>
      </header>

      {/* Hero */}
      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Custom Kitchen Cabinets</h2>
        <p>Built with care and craftsmanship in Gauteng</p>
      </section>

      {/* Images */}
      <section style={{ padding: "20px" }}>
        <h3>Our Work</h3>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <img src="/images/kitchen1.jpg" width="300" />
          <img src="/images/kitchen2.jpg" width="300" />
          <img src="/images/cabinet1.jpg" width="300" />
        </div>
      </section>

      {/* Booking */}
      <section style={{ padding: "20px" }}>
        <h3>Book a Consultation</h3>
        <iframe
          src="https://calendly.com/maximusrbt11/30min"
          width="100%"
          height="600"
          frameBorder="0"
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
          padding: "14px 18px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        WhatsApp Us
      </a>
    </main>
  );
}
