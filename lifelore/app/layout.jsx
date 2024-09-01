// import React from 'react'
//no path needed
// we call navbar to use it everywhere in the app

import '@styles/globals.css';
import Nav from '@components/Nav';
import Feed from '@components/Feed';

export const metadata = {
    title: 'LifeLore - Share and Discover Life Lessons',
    description: 'LifeLore is a platform for sharing and discovering life values, lessons, and advice across various fields. Join our community-driven repository of knowledge and experiences.',
    keywords: 'LifeLore, life lessons, advice, community, Next.js, MongoDB, NextAuth, TailwindCSS',
    author: 'Siddhant Bali',
    og: {
      title: 'LifeLore - Share and Discover Life Lessons',
      description: 'Explore and share life lessons on LifeLore. Connect with a community dedicated to learning and growth.',
      image: 'https://example.com/path-to-your-image.jpg',
      url: 'https://yourlifestyleplatform.com',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'LifeLore - Share and Discover Life Lessons',
      description: 'Explore and share life lessons on LifeLore. Join our community to learn and grow together.',
      image: 'https://example.com/path-to-your-image.jpg',
      site: '@yourtwitterhandle'
    }
  };
  
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav />
              {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout;