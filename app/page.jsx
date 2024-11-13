import Feed from "@components/Feed";
import Link from "next/link";
import Image from "next/image";
const Home = () => (
  <section className='w-full flex-center flex-col font-satoshi'>
          <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/3r.png'
          alt='logo'
          width={300}
          height={300}
          className='object-contain'
        />
      </Link>
    
    <h1 className='head_text text-center '>
    Welcome to <span className='text-green-900 text-center'>LifeLore </span>
    <br className='max-md:hidden' />
    <span className='text-green-900 text-center'>Where Wisdom Meets Community ;)</span>
    </h1>
    <p className='desc text-center '>
    Lifelore is where your wisdom can shape not only your life but others' as well. Share your experiences, learn from diverse perspectives, and grow together.
    </p>

    <Feed />
  </section>
);

export default Home;
