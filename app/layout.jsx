import "@styles/globals.css";
import { Vortex } from "@components/ui/vostex";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "LifeLore - Where Wisdom Meets Community",
  description: "Discover, Share, and Learn from Life Lessons and Advice from a Diverse Community",
  keywords: [
    "LifeLore",
    "Life Advice",
    "Wisdom Sharing",
    "Community",
    "Life Lessons",
    "Personal Growth",
    "Next.js",
    "Social Network",
    "AI Prompts",
  ],
  icons: {
    icon: "/assets/images/2.png",
    shortcut: "/assets/images/2.png", // Specify for quick access
    apple: "/assets/images/2.png", // For Apple devices
  },
  openGraph: {
    title: "LifeLore - A Community of Shared Wisdom",
    description: "Explore life lessons and personal experiences shared by a global community. Join LifeLore and contribute your wisdom.",
    url: "https://lifelore.vercel.app",
    siteName: "LifeLore",
    images: [
      {
        url: "/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "LifeLore - Where Wisdom Meets Community",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeLore - Share and Discover Life Lessons",
    description: "Join a community-driven platform where wisdom is shared and cherished.",
    images: [
      {
        url: "/assets/images/twitter-image.png",
        alt: "LifeLore - A Community of Shared Wisdom",
      },
    ],
  },
};


const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />

        </div>

        <main className='app'>
          <Nav />
          {children}
          <span className="font-satoshi text-green-900 py-5"> Made with &#128154;
          <a href="https://sbali.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">kintsugi-programmer</a>
          </span>
        </main>
        
      </Provider>
    </body>

  </html>
);

export default RootLayout;
