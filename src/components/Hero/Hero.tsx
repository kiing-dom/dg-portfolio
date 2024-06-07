"use client"
import React, { useEffect } from 'react';
import Starfield from 'react-starfield';
import "@/components/Hero/Hero.css";
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Montserrat, Noto_Sans } from 'next/font/google';
import Typewriter from 'typewriter-effect/dist/core';

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "700",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: "300",
})

const Hero: React.FC = () => {
  useEffect(() => {
    const typewriter = new Typewriter('.typewriter', {
      loop: true,
      delay: 75,
    });

    typewriter.typeString('Dominion')
      .pauseFor(1000)
      .deleteAll()
      .typeString('Dom')
      .pauseFor(1000)
      .start();
  }, []);

  return (
    <div className='relative h-screen'>
      <Starfield
        starCount={1000}
        starColor={[134, 134, 189]}
        speedFactor={0.15}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
        <div className="flex flex-col md:flex-row items-center">
          <div className="order-1 md:order-2 mt-8 md:mt-0 md:ml-8 w-52 h-52 md:w-72 md:h-72">
            <Image
              src="/assets/images/personal-photo.jpg"
              width={300}
              height={300}
              alt="portfolio main image"
              className='object-none w-48 h-48 md:w-72 md:h-72 rounded-full custom-position hover:scale-105'
            />
          </div>
          <div className='order-2 md:order-1 flex flex-col items-center text-center md:text-left'>
            <div style={noto.style} className='text-4xl md:text-7xl font-bold typewriter'></div>
            <h1 style={noto.style} className="text-4xl md:text-7xl font-bold">Gbadamosi</h1>
            <p style={mont.style} className='mt-4 text-sm md:text-base text-left'>Based in Ireland,
              I'm a Software Engineer passionate about <br />
              the pursuit of creativity through code.</p>
            <Link href={"mailto:"}>
              <Button style={noto.style} className="mt-4 flex items-center w-40 md:w-48 h-10 md:h-12 btn-custom">
                <CiMail className="mr-2 h-6 md:h-8 w-4 md:w-6" />Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

