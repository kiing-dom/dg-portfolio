"use client"
import React, { useEffect, useRef, useState } from 'react';
import Starfield from 'react-starfield';
import "@/components/Hero/Hero.css";
import Link from 'next/link';
import { CiMail, CiRead, CiSquareRemove } from 'react-icons/ci';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Montserrat, Noto_Sans, Lato } from 'next/font/google';
import Typewriter from 'typewriter-effect/dist/core';

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "700",
});

const mont = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

const lato = Lato({
  subsets: ["latin"],
  weight: "300",
})

const Hero: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

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

    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        closeOverlay();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeOverlay();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);

    };
  }, []);



  const toggleOverlay = () => {
    setShowOverlay(!showOverlay)
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    document.body.style.overflow = "visible";
  }

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
          <div className="hidden md:block lg:block order-1 md:order-2 mt-8 md:mt-0 md:ml-8 w-52 h-52 md:w-72 md:h-72">
            <Image
              src="/assets/images/personal-photo.jpg"
              width={300}
              height={300}
              alt="portfolio main image"
              className='object-none w-48 h-48 md:w-72 md:h-72 rounded-full custom-position hover:scale-125 transition-transform'
            />
          </div>
          <div className='order-2 md:order-1 flex flex-col items-center text-center md:text-left'>
            <div style={noto.style} className='text-4xl md:text-7xl font-bold typewriter'></div>
            <h1 style={noto.style} className="text-4xl md:text-7xl font-bold">Gbadamosi</h1>
            <div className='w-[70%]'>
              <p style={lato.style} className='mt-4 text-md md:text-lg text-center'>
                I am a software engineer based in Ireland who recently graduated from the University of Limerick.
              </p>
            </div>
            <Link href={"mailto:dom1gbadamosi@gmail.com"}>
              <Button style={noto.style} className="mt-4 flex items-center w-40 md:w-48 h-10 md:h-12 btn-custom">
                <CiMail className="mr-2 h-6 md:h-8 w-4 md:w-6" />Contact
              </Button>
            </Link>

            <Button
              onClick={toggleOverlay}
              style={noto.style} className="mt-4 flex items-center w-40 md:w-48 h-10 md:h-12 btn-custom bg-red-500">
              <CiRead className="mr-2 h-6 md:h-8 w-4 md:w-6" /> View Resume
            </Button>

            {showOverlay && (
              <div className='overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center'>
                <div ref={overlayRef} className='overlay-content rounded-md w-8/12 h-5/6 bg-purple-400 relative'>
                  <div className='toolbar'>
                    <span onClick={closeOverlay} className='close-button'>
                      <CiSquareRemove className='hover:rotate-3 hover:scale-110 transition-transform duration-150 ml-3 mt-2' size={36} color='black' />
                    </span>
                    <div style={noto.style} className='-mt-6 text-center text-3xl text-black font-bold'>2024 RESUME</div>
                    <iframe
                      className="w-full h-[95%] absolute"
                      src="/assets/documents/Dominion Gbadamosi.pdf"
                      title="Resume"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
