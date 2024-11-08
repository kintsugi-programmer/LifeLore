"use client";
import { CoolMode } from "./ui/smilebutton";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Howl } from "howler";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // Howler audio setup
  const [isPlaying, setIsPlaying] = useState(true);
  const soundRef = useRef(null);

  useEffect(() => {
    // Initialize Howler sound object with autostart and loop
    soundRef.current = new Howl({
      src: ['/assets/bg.m4a'], // Replace with your audio file path
      autoplay: true,   // Start automatically
      loop: true,       // Loop audio
      volume: 1,      // Set volume (optional)
    });

    return () => {
      // Clean up sound on component unmount
      soundRef.current.stop();
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Auto start and loop the song by default
    soundRef.current.play();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.png'
          alt='logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='text-green-900 font-satoshi font-bold'>LifeLore</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-2 md:gap-2'>
            <CoolMode>
            <button
        type='button'
        onClick={togglePlayPause}
        className='black_btn'>
        {isPlaying ? "Pause Chimes" : "Play Chimes"}
      </button></CoolMode>
            <Link href='/create-prompt' className='black_btn'>
              Share Advice
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            
      

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <> <CoolMode>
          <button
        type='button'
        onClick={togglePlayPause}
        className='black_btn'>
        {isPlaying ? "Pause Chimes" : "Play Chimes"}
      </button></CoolMode>
      <div className="px-1"></div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <CoolMode>
                <button
        type='button'
        onClick={togglePlayPause}
        className='dropdown_link'>
        {isPlaying ? "Pause Chimes" : "Play Chimes"}
      </button></CoolMode>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>

              </div>
            )}
          </div>
        ) : (
          <>
          <CoolMode>
          <button
        type='button'
        onClick={togglePlayPause}
        className='black_btn'>
        {isPlaying ? "Pause Chimes" : "Play Chimes"}
      </button></CoolMode>
      <div className="px-1"></div>
            {providers &&
              Object.values(providers).map((provider) => (
                
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

     
    </nav>
  );
};

export default Nav;
