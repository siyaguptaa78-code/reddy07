import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://reddybookie.site"),
  applicationName: "Reddy Anna Book",
  title: "Reddy Anna | Live Cricket Betting ID and Online Sports Platform",
  description:
    "Get your Reddy Anna ID for live cricket betting, sports exchange, and online gaming. Fast registration, secure platform, and 24/7 customer support.",
  keywords: [
    "Reddy Anna",
    "Reddy Anna Book",
    "Reddy Anna ID",
    "Cricket Betting ID",
    "IPL Betting ID",
    "Online Betting ID",
    "Best Betting Id Provider"
  ],
  authors: [{ name: "Reddy Anna Book" }],
  creator: "Reddy Anna Book",
  publisher: "Reddy Anna Book",
  alternates: {
    canonical: "https://reddybookie.site",
  },
  verification: {
    google: "CiZXOM8u4QShR7knoNIKpKW7cQTii7q8P7T8s_WV7ls"
  },
  openGraph: {
    title: "Reddy Anna | Live Cricket Betting ID and Online Sports Platform",
    description:
      "Get your Reddy Anna ID for live cricket betting, sports exchange, and online gaming. Fast registration, secure platform, and 24/7 customer support.",
    url: "https://reddybookie.site",
    siteName: "Reddy Anna Book",
    images: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp",
        width: 800,
        height: 600,
        alt: "Reddy Anna Book Cricket Background"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Anna | Live Cricket Betting ID and Online Sports Platform",
    description:
      "Get your Reddy Anna ID for live cricket betting, sports exchange, and online gaming. Fast registration, secure platform, and 24/7 customer support.",
    images: [
      "https://reddybookwinin.in/wp-content/uploads/elementor/thumbs/cricket-bg-rlghoi9i0hsj2n8qphq7tivs3mol4s3iin7qqytzxc.webp"
    ]
  },
  icons: {
    icon: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-150x150.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png",
        sizes: "192x192",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "https://reddybookwinin.in/wp-content/uploads/2025/06/cropped-download-1-1-300x300.png"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"Organization",
      "@id":"https://reddybookie.site/#organization",
      "name":"Reddy Anna",
      "alternateName":"Reddy Anna Book",
      "url":"https://reddybookie.site/",
      "logo":{
        "@type":"ImageObject",
        "url":"https://reddybookwinin.in/wp-content/uploads/2025/06/image-659e7b71ad644.webp"
      },
      "description":"Reddy Anna provides live cricket betting IDs, sports betting access, online gaming services and secure betting solutions for users across India.",
      "contactPoint":{
        "@type":"ContactPoint",
        "contactType":"Customer Support",
        "telephone":"+91-6026703858",
        "url":"https://wa.me/916026703858",
        "areaServed":"IN",
        "availableLanguage":[
          "English",
          "Hindi"
        ]
      }
    },
    {
      "@type":"WebSite",
      "@id":"https://reddybookie.site/#website",
      "url":"https://reddybookie.site/",
      "name":"Reddy Anna",
      "publisher":{
        "@id":"https://reddybookie.site/#organization"
      },
      "inLanguage":"en-IN",
      "potentialAction":{
        "@type":"SearchAction",
        "target":"https://reddybookie.site/?s={search_term_string}",
        "query-input":"required name=search_term_string"
      }
    },
    {
      "@type":"WebPage",
      "@id":"https://reddybookie.site/#webpage",
      "url":"https://reddybookie.site/",
      "name":"Reddy Anna | Live Cricket Betting ID and Online Sports Platform",
      "description":"Get your Reddy Anna ID for live cricket betting, sports exchange, and online gaming. Fast registration, secure platform, and 24/7 customer support.",
      "isPartOf":{
        "@id":"https://reddybookie.site/#website"
      },
      "about":{
        "@id":"https://reddybookie.site/#organization"
      },
      "primaryImageOfPage":{
        "@id":"https://reddybookie.site/#logo"
      },
      "breadcrumb":{
        "@id":"https://reddybookie.site/#breadcrumb"
      },
      "inLanguage":"en-IN"
    },
    {
      "@type":"ImageObject",
      "@id":"https://reddybookie.site/#logo",
      "url":"https://reddybookwinin.in/wp-content/uploads/2025/06/image-659e7b71ad644.webp",
      "contentUrl":"https://reddybookwinin.in/wp-content/uploads/2025/06/image-659e7b71ad644.webp",
      "caption":"Reddy Anna"
    },
    {
      "@type":"BreadcrumbList",
      "@id":"https://reddybookie.site/#breadcrumb",
      "itemListElement":[
        {
          "@type":"ListItem",
          "position":1,
          "name":"Home",
          "item":"https://reddybookie.site/"
        }
      ]
    },
    {
      "@type":"Service",
      "@id":"https://reddybookie.site/#service",
      "name":"Live Cricket Betting & Sports Betting",
      "provider":{
        "@id":"https://reddybookie.site/#organization"
      },
      "description":"Reddy Anna offers cricket betting IDs, sports exchange access, online casino games, live betting and secure payment support for Indian users.",
      "serviceType":[
        "Cricket Betting ID",
        "Live Cricket Betting",
        "Sports Betting",
        "Sports Exchange",
        "Casino Games",
        "Teen Patti",
        "Aviator",
        "Fast Withdrawals"
      ],
      "areaServed":{
        "@type":"Country",
        "name":"India"
      },
      "availableChannel":{
        "@type":"ServiceChannel",
        "serviceUrl":"https://reddybookie.site/",
        "availableLanguage":[
          "English",
          "Hindi"
        ]
      }
    },
    {
      "@type":"RegisterAction",
      "@id":"https://reddybookie.site/#register",
      "name":"Register for a Reddy Anna ID",
      "target":{
        "@type":"EntryPoint",
        "urlTemplate":"https://wa.me/916026703858",
        "actionPlatform":[
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "agent":{
        "@id":"https://reddybookie.site/#organization"
      },
      "result":{
        "@type":"Thing",
        "name":"Reddy Anna Betting ID"
      }
    }
  ]
}`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "@id":"https://reddybookie.site/#faq",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"How to get Reddy Anna ID?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Visit our website and click the WhatsApp button to contact our support team. Share your basic details and your Reddy Anna ID is usually created within 60 seconds."
      }
    },
    {
      "@type":"Question",
      "name":"How to login?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"After your account is created, you will receive your username and password on WhatsApp. Open the official login link provided by our team and sign in using your credentials."
      }
    },
    {
      "@type":"Question",
      "name":"How to deposit money?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Deposits can be made through UPI services such as PhonePe, Google Pay, Paytm or by bank transfer. Once payment is confirmed by our WhatsApp support team, your account balance is updated."
      }
    },
    {
      "@type":"Question",
      "name":"How to withdraw?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Send your withdrawal request through WhatsApp with your betting ID and withdrawal amount. Funds are transferred to your registered UPI ID or bank account, generally within 2 to 4 hours."
      }
    },
    {
      "@type":"Question",
      "name":"Is betting safe?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Reddy Anna uses secure connections and encrypted transactions to help protect user accounts and payment information while maintaining user privacy."
      }
    },
    {
      "@type":"Question",
      "name":"What games are available?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Users can enjoy cricket betting, football betting, tennis, live casino games, Teen Patti, Andar Bahar, Roulette, Aviator and several other online gaming options."
      }
    },
    {
      "@type":"Question",
      "name":"Can I use UPI?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Yes. We support popular UPI payment platforms including PhonePe, Google Pay, Paytm and BHIM for quick deposits and withdrawals."
      }
    },
    {
      "@type":"Question",
      "name":"How long does approval take?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"Account creation and deposit approvals are generally completed within 60 seconds, allowing users to begin betting almost immediately."
      }
    }
  ]
}`
          }}
        />
      </head>
      <body className="min-h-screen bg-[#05080f] text-gray-200 antialiased flex flex-col justify-between">
        <Header />
        <main className="flex-1 w-full bg-[#05080f]">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GSYPQG92W7" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GSYPQG92W7');
            `
          }}
        />
      </body>
    </html>
  );
}
