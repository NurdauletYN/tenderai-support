export const metadata = {
  title: "TenderAI",
  description: "TenderAI Support, Privacy Policy and Terms of Use",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          lineHeight: 1.6,
          margin: 0,
          background: "#ffffff",
          color: "#333",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "40px 20px",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
