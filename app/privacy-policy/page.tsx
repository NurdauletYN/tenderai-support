export default function PrivacyPolicyPage() {
  return (
    <main>
      <h1 style={{ color: "#007AFF" }}>Privacy Policy</h1>
      <p><strong>Last updated:</strong> March 30, 2026</p>

      <div style={sectionStyle}>
        <h2>1. General</h2>
        <p>
          TenderAI respects your privacy. This Privacy Policy explains what data
          we collect, how we use it, and how we protect it.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>2. Information We May Collect</h2>
        <ul>
          <li>Account information, if you create an account</li>
          <li>App usage and technical diagnostics</li>
          <li>Content you submit for AI-powered processing</li>
          <li>Public tender-related data used in the app experience</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>3. How We Use Information</h2>
        <ul>
          <li>To provide app functionality</li>
          <li>To improve app performance and user experience</li>
          <li>To generate AI-based insights and responses</li>
          <li>To provide support and troubleshoot issues</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2>4. AI Services</h2>
        <p>
          TenderAI may use third-party AI service providers to process user
          requests and generate responses. Only the data necessary to provide
          the requested functionality is processed.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell your personal data. We may share limited data with
          trusted service providers only when necessary to operate the app,
          including hosting, analytics, authentication, and AI processing
          services.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>6. Data Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect
          your information.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>7. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your data by
          contacting us at support@yourdomain.com.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2>8. Contact</h2>
        <p>Email: support@yourdomain.com</p>
      </div>
    </main>
  );
}

const sectionStyle = {
  marginTop: 28,
  paddingTop: 8,
};
