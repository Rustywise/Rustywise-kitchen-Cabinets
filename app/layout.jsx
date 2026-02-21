export const metadata = {
  title: "Rustywise Kitchen Cabinets",
  description: "Custom kitchen cabinets built with craftsmanship and wisdom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
