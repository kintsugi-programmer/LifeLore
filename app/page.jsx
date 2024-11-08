import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col font-satoshi'>
    <h1 className='head_text text-center'>
    Welcome to <span className='green_gradient text-center'>LifeLore </span>
    <br className='max-md:hidden' />
    <span className='green_gradient text-center'>Where Wisdom Meets Community ;)</span>
    </h1>
    <p className='desc text-center '>
    Lifelore is where your wisdom can shape not only your life but others' as well. Share your experiences, learn from diverse perspectives, and grow together.
    </p>

    <Feed />
  </section>
);

export default Home;
