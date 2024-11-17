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
    


    <div className="flex flex-col md:flex-row items-center ">
    <div className='flex justify-center flex-col md:flex-row py-5'>
    <div><div className="font-satoshi text-green-900 text-right"><span className="font-bold">Share</span> the <br />
<span className="font-bold">life lessons </span><br />
that have <br /> <span className="font-bold">shaped you</span>&<br /> <span className="font-bold">impact</span> the <br />journeys of <br />others.
</div></div>

    

    <div>
      <Image
          src='/assets/images/use.png'
          alt='logo'
          width={300}
          height={300}
          className='object-contain pt-2'
        /></div>
        <div><div className="font-satoshi text-green-900  text-left">
        <span className="font-bold">Search</span> for <br /><span className="font-bold">advices</span> on specific topics. <br /><br />
        Explore other <br />users’ <span className="font-bold">profiles</span> <br />to see their <br /> <span className="font-bold">stories</span>. </div></div>
      </div>


      <div>
      <div>
      <Image
          src='/assets/images/flowerr.png'
          alt='logo'
          width={100}
          height={300}
          className='object-contain pt-3'
        /></div>


      </div>
      <div className='flex justify-center flex-col md:flex-row gap-5 py-5'>
    <div><div className="font-satoshi text-green-900 text-right"><span className="font-bold">Join</span> LifeLore<br />
<span className="font-bold">today </span> and be part
of a <span className="font-bold">community</span><br /> <span className="font-bold">impact</span> <br /><br />where your life's <br />lessons <span className="font-bold">can </span>make <br />a difference.
</div></div>
    <div><Image
        src='/assets/images/devices.png'
        alt='logo'
        width={300}
        height={300}
        className='object-contain pt-3'
      /></div>
        <div><div className="font-satoshi text-green-900  text-left">
        <span className="font-bold">Every piece</span> of <br />wisdom shared <br />here has the <br /><span className="font-bold">power to inspire</span>, <br />uplift and to <br />
      connect<span className="font-bold"> us</span>  all. </div></div>
      </div>
      </div>
       <iframe width="500" height="281" src="https://www.youtube.com/embed/11zYdMHxLr8?si=pusnj3J9SQLX8cTu" title="YouTube video player"></iframe>
  
  </section> 
);

export default Home;
