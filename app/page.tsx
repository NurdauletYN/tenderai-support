import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1 style={{ color: "#007AFF", marginBottom: 12 }}>TenderAI</h1>
      <p style={{ marginBottom: 32 }}>
        Official support and legal pages for the TenderAI app.
      </p>

      <div style={{ display: "grid", gap: 16 }}>
        <Link href="/support" style={linkStyle}>
          Support
        </Link>
        <Link href="/privacy-policy" style={linkStyle}>
          Privacy Policy
        </Link>
        <Link href="/terms" style={linkStyle}>
          Terms of Use
        </Link>
      </div>
    </main>
  );
}

const linkStyle = {
  display: "block",
  padding: "14px 18px",
  border: "1px solid #e5e5e5",
  borderRadius: "12px",
  textDecoration: "none",
  color: "#007AFF",
  fontWeight: 600,
};
