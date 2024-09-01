//homepage
//rafce and install es7+ react extension
//import React from 'react' //nextjs not need it


//import pafe from @components/page
import Feed from "@components/Feed";

const Homepage = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Welcome to Lifelore
            {/* <br className="max-md:hidden"/> */}
            <br />
            <span className="orange_gradient text-center">Experiences which you can't buy! </span>
        </h1>
        <p className="desc text-center">
        LifeLore is a platform where you can learn from the experiences of others.
        </p>
        {/* {any new page} */}
        <Feed />

    </section>
  )
}

export default Homepage