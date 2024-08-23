"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/components/Hero/Hero.css";
import Link from "next/link";
import { CiMail, CiRead, CiSquareRemove } from "react-icons/ci";
import { Button } from "../ui/button";
import Image from "next/image";
import { Montserrat, Noto_Sans, Lato, Nunito_Sans} from "next/font/google";
import Typewriter from "typewriter-effect/dist/core";

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
});

const nun_bold = Nunito_Sans({
  subsets: ["latin"],
  weight: "700"
});

const nun = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Hero: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        closeOverlay();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="flex flex-col lg:flex-row md:flex-row items-center">
          <div className="hidden md:block lg:block order-1 md:order-2 mt-8 md:mt-0 md:ml-8 w-[800px] h-[350px] lg:w-[800px] lg:[h-350] md:mr-32 md:w-[500px] md:h-[350px] rounded-full overflow-hidden">
            <Image
              src="/assets/images/personal-photo.jpg"
              width={300}
              height={300}
              alt="dominion gbadamosi portfolio main image"
              className="object-cover w-full h-full transition-transform hover:scale-125"
            />
          </div>
          <div className="order-2 md:order-1 flex flex-col items-center text-left">
            <h1 style={nun_bold.style} className="text-xl md:text-5xl">
              Hey, it's Dom!
            </h1>
            <div className="w-[70%]">
              <p style={nun.style} className="mt-4 text-md md:text-md text-left">
                I am a software engineer based in Ireland who recently graduated from the University of Limerick. I have
                a deep interest in AI engineering and combining it with full stack development. I am passionate about
                pursuing a career that will allow me to explore my interest in either or both of these fields.
              </p>
            </div>
            <Link href={"mailto:dom1gbadamosi@gmail.com"}>
              <Button style={noto.style} className="mt-4 flex items-center w-40 md:w-48 h-10 md:h-12 btn-custom">
                <CiMail className="mr-2 h-6 md:h-8 w-4 md:w-6" />
                Contact
              </Button>
            </Link>

            <Button
              onClick={toggleOverlay}
              style={noto.style}
              className="mt-4 flex items-center w-40 md:w-48 h-10 md:h-12 btn-custom bg-red-500"
            >
              <CiRead className="mr-2 h-6 md:h-8 w-4 md:w-6" />
              View Resume
            </Button>

            {showOverlay && (
              <div className="overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                <div ref={overlayRef} className="overlay-content rounded-md w-8/12 h-5/6 bg-purple-400 relative">
                  <div className="toolbar">
                    <span onClick={closeOverlay} className="close-button">
                      <CiSquareRemove className="hover:rotate-3 hover:scale-110 transition-transform duration-150 ml-3 mt-2" size={36} color="black" />
                    </span>
                    <div style={noto.style} className="-mt-6 text-center text-3xl text-black font-bold">
                      2024 RESUME
                    </div>
                    <iframe className="w-full h-[95%] absolute" src="/assets/documents/dominion%20resume.pdf" title="Resume" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
