export default function TermsPage() {
  return (
    <main>
      <h1 style={{ color: "#007AFF" }}>Terms of Use</h1>
      <p><strong>Last updated:</strong> March 30, 2026</p>

      <div style={sectionStyle}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using TenderAI, you agree to these Terms of Use.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>2. Use of the App</h2>
        <p>
          TenderAI provides AI-assisted tools for working with tender-related
          information. You agree to use the app only in compliance with
          applicable laws and regulations.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>3. No Guarantee</h2>
        <p>
          TenderAI may provide summaries, recommendations, or AI-generated
          outputs. We do not guarantee the completeness, accuracy, or legal
          validity of such outputs. Users should independently verify important
          information.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>4. Intellectual Property</h2>
        <p>
          All app content, branding, and software related to TenderAI are owned
          by or licensed to us and may not be copied or redistributed without
          permission.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>5. Limitation of Liability</h2>
        <p>
          TenderAI is provided on an “as is” basis. To the maximum extent
          permitted by law, we are not liable for indirect, incidental, or
          consequential damages resulting from use of the app.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>6. Contact</h2>
        <p>Email: yerkinbekovn@gmail.com</p>
      </div>
    </main>
  );
}

const sectionStyle = {
  marginTop: 28,
  paddingTop: 8,
};
