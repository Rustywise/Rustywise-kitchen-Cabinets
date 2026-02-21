"use client";

export default function Page() {
  return (
    <>
      {/* Main Content */}
      <div style={{ minHeight: "100vh", backgroundColor: "#F5F2EE", color: "#1F1F1F" }}>
        <header style={{ backgroundColor: "#1F1F1F", color: "#fff", padding: "16px" }}>
          <h1>Rustywise Kitchen Cabinets</h1>
        </header>

        <main style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
          <h2>Cabinets Built With Wisdom & Craft</h2>

          <p>
            Rustywise Kitchen Cabinets is proudly owned and operated by{" "}
            <strong>Gideon and Loraine Marais</strong>.
          </p>

          <p>
            We design and install custom kitchen cabinets built to last, serving
            clients within Gauteng.
          </p>
<h3 style={{ marginTop: "40px" }}>Work Examples</h3>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "20px",
  }}
>
  <img
    src="/images/kitchen1.jpg"
    alt="Custom kitchen cabinets by Rustywise"
    style={{ width: "100%", borderRadius: "12px" }}
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27812728078"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#25D366",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          zIndex: 9999,
          textDecoration: "none",
          color: "#fff",
          fontSize: "28px",
        }}
        aria-label="Chat on WhatsApp"
      >
        🟢
      </a>
    </>
  );
      }
