"use client"; // Add this directive to indicate that this is a client component

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import React from 'react';
import Provider from './Provider';

const Nav = () => {
  // sign in using google and next auth 
  const [providers,setProviders] = useState(null);
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);

  const[toggleDropDown,setToggleDropDown]=useState(false);




  const isUserLoggedIn = true; //test phase 
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='lifelore logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>LifeLore</p>
      </Link>

      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
      {isUserLoggedIn ? (
        <div className='flex gap-3 md:gap-5'>
          <Link className='black_btn' href="/create-exp" >Create Post</Link>
          <button type="button" className='outline_btn' onClick={signOut}>Sign Out</button>
          <Image src="/assets/images/logo.svg" width={37} height={37} className='rounded-full' alt='profile'></Image>
        </div>

        ):(
          <>
          {/* signin */}
          {providers &&
          Object.values(providers).map(
            (provider)=>
            (
              <button
                type='button'
                key={provider.name}
                className='black_btn'
                onClick={()=>
                  signIn(provider.id)
                }>
                  Sign In
                
              </button>
            )
          )}
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn?(<div className='flex'>
          {/* setToggleDropDown(!toggleDropDown) is wrong as its leads to unexpected results 
          setToggleDropDown((prev)=>(!prev) is good*/}
          <Image src="/assets/images/logo.svg" width={37} height={37} className='rounded-full' alt='profile' onClick={()=>setToggleDropDown((prev)=>(!prev))}></Image>
          {toggleDropDown && (
        <div className='dropdown'>
          <Link 
          href='/profile'
          className='dropdown_link'
          onClick={()=>(setToggleDropDown(false))}
          >
            My Profile
          </Link>
          <Link 
          href='/create-exp'
          className='dropdown_link'
          onClick={()=>(setToggleDropDown(false))}
          >
            Create Advice
          </Link>
          <button
                type='button'
                onClick={()=>{
                  setToggleDropDown(false);
                  signOut();}
                }
                className='mt-5 w-full black_btn'>
                  Sign Out
                
              </button>

        </div>)}
        </div>
        
      
      ):(
          <>
          {/* signin */}
          {providers &&
          Object.values(providers).map(
            (provider)=>
            (
              <button
                type='button'
                key={provider.name}
                className='black_btn'
                onClick={()=>
                  signIn(provider.id)
                }>
                  Sign In
                
              </button>
            )
          )}
          
        </>)}

      </div>

      </nav>
  );
}

export default Nav;
