export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F5F2EE" }}>
      <header
        style={{
          padding: "30px",
          background: "#1F1F1F",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Rustywise Kitchen Cabinets</h1>
        <p>Owned by Gideon and Loraine</p>
      </header>

      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Custom Kitchen Cabinets</h2>
        <p>
          Consultation type and call-out fees are determined at the time of
          appointment booking. Serving Gauteng only.
        </p>
      </section>

      <section style={{ padding: "20px" }}>
        <img src="/images/kitchen1.jpg" width="300" />
        <img src="/images/kitchen2.jpg" width="300" />
        <img src="/images/cabinet1.jpg" width="300" />
      </section>

      <footer
        style={{
          marginTop: "40px",
          padding: "20px",
          background: "#1F1F1F",
          color: "#ccc",
        }}
      >
        <p>
          © 2026 Rustywise Kitchen Cabinets. This is a registered business
          website. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
