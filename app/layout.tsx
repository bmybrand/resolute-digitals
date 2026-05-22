import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resolutedigitals.com"),
  title: "Resolute Digitals",
  description: "Resolute Digitals - Innovative Services for the Modern Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta 
        name="google-site-verification"
content="fkHuDAdtE1T_JKA7a3SJR7YDl9nc9yBGqZO0sRWAaOQ" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5TEZQTJGP2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5TEZQTJGP2');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
