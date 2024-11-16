import "@styles/globals.css";
import { Vortex } from "@components/ui/vostex";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const generateViewport = () => {
  return {
    title: "LifeLore | Discover & Share Life's Wisdom",
    description: "LifeLore is a unique platform where you can share your hard-earned life lessons and learn from others' experiences. Discover wisdom, connect with a like-minded community, and grow together. LifeLore – Where Wisdom Meets Community.",
    
    // Additional SEO tags
    keywords: [
      "LifeLore",
      "Life Lessons",
      "Wisdom Sharing",
      "Community",
      "Personal Growth",
      "Life Advice",
      "Hard-earned Experiences",
      "Prompts",
      "Next.js Social Network",
      "MongoDB",
      "NextAuth"
    ],
    authors: [{ name: "LifeLore | Siddhant Bali", url: "https://lifelore.vercel.app/" }],
    applicationName: "LifeLore",
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    themeColor: "#FF4500", // Vibrant orange for branding
    colorScheme: "light",
    viewport: "width=device-width, initial-scale=1",
    openGraph: {
      title: "LifeLore | Discover & Share Life's Wisdom",
      description: "LifeLore is a unique platform where you can share your hard-earned life lessons and learn from others' experiences. Discover wisdom, connect with a like-minded community, and grow together. LifeLore – Where Wisdom Meets Community.",
      url: "https://lifelore.vercel.app/",
      siteName: "LifeLore",
      images: [
        {
          url: "/assets/images/2.png", // Replace with actual image URL
          width: 1200,
          height: 630,
          alt: "LifeLore Logo",
        },
      ],
      locale: "en_US",
      type: "website",
    },


    // Other meta tags
    robots: {
      index: true, // Allows indexing
      follow: true, // Follows links
      nocache: false, // Allows caching
    },
  };
};

// export const metadata = {
//   title: "LifeLore - Where Wisdom Meets Community",
//   description: "Discover, Share, and Learn from Life Lessons and Advice from a Diverse Community",
//   keywords: [
//     "LifeLore",
//     "Life Advice",
//     "Wisdom Sharing",
//     "Community",
//     "Life Lessons",
//     "Personal Growth",
//     "Next.js",
//     "Social Network",
//     "AI Prompts",
//   ],
//   icons: {
//     icon: "/assets/images/2.png",
//     shortcut: "/assets/images/2.png", // Specify for quick access
//     apple: "/assets/images/2.png", // For Apple devices
//   },
//   openGraph: {
//     title: "LifeLore - A Community of Shared Wisdom",
//     description: "Explore life lessons and personal experiences shared by a global community. Join LifeLore and contribute your wisdom.",
//     url: "https://lifelore.vercel.app",
//     siteName: "LifeLore",
//     images: [
//       {
//         url: "/assets/images/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "LifeLore - Where Wisdom Meets Community",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "LifeLore - Share and Discover Life Lessons",
//     description: "Join a community-driven platform where wisdom is shared and cherished.",
//     images: [
//       {
//         url: "/assets/images/twitter-image.png",
//         alt: "LifeLore - A Community of Shared Wisdom",
//       },
//     ],
//   },
// };


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
        <span className="font-satoshi text-green-900">- Love Youself and all around you & Save trees -</span>

        <span className="font-satoshi text-green-900 pb-5"> Made with &#128154;
          <a href="https://sbali.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">kintsugi-programmer</a>
          </span>
        </main>
        
      </Provider>
    </body>

  </html>
);

export default RootLayout;
