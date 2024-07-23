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
import { motion } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='absolute inset-0'
      >
        <Starfield
          starCount={1000}
          starColor={[134, 134, 189]}
          speedFactor={0.15}
        />
      </motion.div>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="flex flex-col lg:flex-row md:flex-row items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.3 }}
            className="hidden md:block lg:block order-1 md:order-2 mt-8 md:mt-0 md:ml-8 w-[800px] h-[350px] lg:w-[800px] lg:[h-350] md:mr-32 md:w-[500px] md:h-[350px] rounded-full overflow-hidden"
          >
            <Image
              src="/assets/images/personal-photo.jpg"
              width={300}
              height={300}
              alt="dominion gbadamosi portfolio main image"
              className='object-cover w-full h-full transition-transform hover:scale-125'
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.8 }}
            className='order-2 md:order-1 flex flex-col items-center text-center md:text-left'
          >
            <div style={noto.style} className='text-4xl md:text-7xl font-bold typewriter'></div>
            <h1 style={noto.style} className="text-4xl md:text-7xl font-bold">Gbadamosi</h1>
            <div className='w-[70%]'>
              <p style={lato.style} className='mt-4 text-md md:text-lg text-center'>
                I am a software engineer based in Ireland who recently graduated from the University of Limerick.
                I have a deep interest in AI engineering and combining it with full stack development.
                I am passionate about pursuing a career that will allow me to explore my interest in either or both of these fields.
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
