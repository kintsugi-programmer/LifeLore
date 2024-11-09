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
