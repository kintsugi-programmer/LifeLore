//homepage
//rafce and install es7+ react extension
//import React from 'react' //nextjs not need it

const Homepage = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Welcome to Lifelore
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">Lessons which you cant buy! </span>
        </h1>
        <p className="desc text-center">
        LifeLore is a platform where you can learn from the experiences of others.
        </p>
        {/* {Feed} */}

    </section>
  )
}

export default Homepage