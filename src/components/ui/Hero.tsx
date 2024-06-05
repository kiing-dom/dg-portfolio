import React, { createContext } from 'react';
import Starfield from 'react-starfield';
import "@/components/ui/Hero.css";
import Link from 'next/link';
import { CiMail } from 'react-icons/ci';
import { Button } from './button';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='relative h-screen'>
      <Starfield
        starCount={1000}
        starColor={[134, 134, 189]}
        speedFactor={0.15}
      />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white'>
        <div className="flex items-center">
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-5xl font-bold'>Dominion <br />Gbadamosi</h1>
            <p className='mt-4 text-m'>Based in Ireland, <br />
              I'm a Software Engineer passionate about <br />
              the pursuit of creativity through code.</p>
            <Link href={"mailto:"}>
              <Button className="mt-4 flex items-center w-48 h-12 btn-custom">
                <CiMail className="mr-2 h-8 w-6" />Contact
              </Button>
            </Link>
          </div>
          <div className="ml-8 w-72 h-72">
            <Image
              src="/assets/images/personal-photo.jpg"
              width={300}
              height={300}
              alt="portfolio main image"
              className='object-none w-72 h-72 rounded-full custom-position'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
