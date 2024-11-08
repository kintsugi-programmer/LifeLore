import "@styles/globals.css";
import { Vortex } from "@components/ui/vostex";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Lifelore",
  description: "Discover & Share Life advices",
  icons: {
    icon: "/assets/images/2.png", // or "/path-to-your-favicon-file" if it's a different format
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
          <a href="https://sbali.vercel." target="_blank" rel="noopener noreferrer" className="underline">kintsugi-programmer</a>
          </span>
        </main>
        
      </Provider>
    </body>

  </html>
);

export default RootLayout;
