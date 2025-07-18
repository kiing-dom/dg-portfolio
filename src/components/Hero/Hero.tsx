"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/components/Hero/Hero.css";
import Link from "next/link";
import { CiMail, CiRead, CiSquareRemove } from "react-icons/ci";
import { Button } from "../ui/button";
import Image from "next/image";
import { Montserrat, Noto_Sans, Lato, Nunito_Sans} from "next/font/google";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "700",
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

  const GOOGLE_DRIVE_FILE_ID = "1w2rVPxk8DvZrMlr6CdMwgBlkUhPE4qsb";
  const resumeUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`

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

  const personalDescription = "Software engineer based in Ireland. Other than software I'm interested in tech, music and sports";

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 py-8">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-left md:w-3/5 mb-8 md:mb-0">
            <h1 style={nun_bold.style} className="text-2xl md:text-3xl lg:text-4xl mb-3">
              Dominion Gbadamosi
            </h1>
            <p style={nun.style} className=" md:text-lg mb-5 max-w-prose text-neutral-700 dark:text-neutral-200">
              {personalDescription}
            </p>
            <div className="flex flex-row gap-3 w-full">
              <Link href={"mailto:dom1gbadamosi@gmail.com"}>
                <Button style={noto.style} className="flex items-center justify-center px-5 py-2 text-sm font-semibold">
                  <CiMail className="mr-2 h-5 w-5" />
                  Contact
                </Button>
              </Link>
              <Button
                onClick={toggleOverlay}
                style={noto.style}
                className="flex items-center justify-center px-5 py-2 text-sm font-semibold bg-[#592F83] hover:bg-[#8868BD] text-white"
              >
                <CiRead className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>
          </div>
          <div className="hidden md:block order-1 md:order-2 md:w-2/5 lg:w-2/5">
            <div className="relative w-3/4 mx-auto pb-[75%] rounded-full overflow-hidden">
              <Image
                src="/assets/images/hero/gradphoto.jpg"
                layout="fill"
                objectFit="cover"
                alt="dominion gbadamosi portfolio main image"
                className="transition-transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div ref={overlayRef} className="bg-[#d8d8ff] rounded-md w-11/12 h-5/6 max-w-4xl max-h-[90vh] relative">
            <div className="absolute top-2 left-2">
              <span onClick={closeOverlay} className="cursor-pointer">
                <CiSquareRemove className="hover:rotate-3 hover:scale-110 transition-transform duration-150" size={36} color="black" />
              </span>
            </div>
            <div style={noto.style} className="text-center text-3xl text-black font-bold py-4 flex items-center justify-center gap-2">
              <Image src="/icon.ico" alt={""} width={36} height={36} className="drop-shadow-md hover:scale-105 hover:rotate-12 transform transition-transform"/>
              <p className="drop-shadow-md">RESUME</p>
            </div>
            <iframe className="w-full h-[calc(100%-4rem)]" src={resumeUrl} title="Resume" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;