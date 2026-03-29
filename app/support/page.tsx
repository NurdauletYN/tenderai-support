export default function SupportPage() {
  return (
    <main>
      <h1 style={{ color: "#007AFF" }}>TenderAI Support</h1>
      <p>
        If you need help with the TenderAI app, contact us and we will respond
        as soon as possible.
      </p>

      <a
        href="mailto:support@yourdomain.com"
        style={{
          display: "inline-block",
          background: "#007AFF",
          color: "#fff",
          padding: "12px 20px",
          textDecoration: "none",
          borderRadius: "10px",
          marginTop: 16,
        }}
      >
        Contact Support
      </a>

      <div style={sectionStyle}>
        <h2>What to include in your email</h2>
        <ul>
          <li>Your device model</li>
          <li>iOS version</li>
          <li>A short description of the problem</li>
          <li>Screenshots, if relevant</li>
        </ul>
      </div>
    </main>
  );
}

const sectionStyle = {
  marginTop: 40,
  paddingTop: 20,
  borderTop: "1px solid #eee",
};
