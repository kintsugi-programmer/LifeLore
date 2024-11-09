
import "@styles/globals.css";
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
  openGraph: {
    title: "LifeLore - A Community of Shared Wisdom",
    description: "Explore life lessons and personal experiences shared by a global community. Join LifeLore and contribute your wisdom.",
    url: "https://lifelore.vercel.app",
    siteName: "LifeLore",
    locale: "en_US",
    type: "website",
  },
};


const RootLayout = ({ children }) => (
  <html lang='en'>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
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