"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/components/Hero/Hero.css";
import Link from "next/link";
import { CiMail, CiRead, CiSquareRemove } from "react-icons/ci";
import { FaLinkedin, FaGithub, FaYoutube, FaMediumM, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from "../ui/button";
import Image from "next/image";

const Hero: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const GOOGLE_DRIVE_FILE_ID = "1w2rVPxk8DvZrMlr6CdMwgBlkUhPE4qsb";
  const resumeUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`

  const socials = [
    {
      link: "https://www.github.com/kiing-dom",
      label: "GitHub",
      Icon: FaGithub
    },
    {
      link: "https://www.linkedin.com/in/dominion-gbadamosi",
      label: "LinkedIn", 
      Icon: FaLinkedin
    },
    {
      link: "https://www.youtube.com/@1KIINGDOM",
      label: "YouTube",
      Icon: FaYoutube
    },
    {
      link: "https://www.medium.com/@dngi267",
      label: "Medium",
      Icon: FaMediumM
    }
  ];

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

  const personalDescription = "Currently not employed full-time, I'm actively pursuing contract work while dedicating time to daily skill development. I write technical articles and continuously explore new technologies to feed my hunger for knowledge and stay at the forefront of software engineering.";
  return (
    <div className="hero-container relative bg-black overflow-hidden">
      {/* Header Navigation */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 gap-4 max-w-7xl mx-auto px-4 relative z-20">
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <Image
              src="/assets/images/hero/gradphoto.jpg"
              alt="Dominion Gbadamosi"
              width={128}
              height={128}
              className="w-32 h-32 rounded-2xl object-cover border-2 border-neutral-700 group-hover:border-neutral-500 transition-all duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-neutral-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>          
          <div className="space-y-0.5">
            <h1 className="text-lg md:text-xl font-bold text-white">Dominion Gbadamosi</h1>
            <p className="text-sm opacity-80 text-neutral-200">Software Engineer, Tech Enthusiast</p>
            <p className="text-xs opacity-60 flex items-center gap-1.5 text-neutral-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
              Software & Tech
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
              Ireland
            </p>
          </div>
        </div>
        
        {/* Desktop Navigation */}        
        <div className="hidden md:flex items-center justify-center md:justify-end gap-6 pt-1">
          <div className="flex items-center gap-6">
            <Link href="#experience" className="text-sm text-neutral-300 hover:text-white transition-colors relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#projects" className="text-sm text-neutral-300 hover:text-white transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#techstack" className="text-sm text-neutral-300 hover:text-white transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          
          {socials.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link 
                key={index}
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-neutral-200 transition-colors relative group" 
                title={social.label}
              >
                <span className="sr-only">{social.label}</span>
                <Icon className="w-5 h-5" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-neutral-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            );
          })}
          
          <div className="ml-2 h-8 w-px bg-neutral-700"></div>
          
          <div className="flex gap-3">            <Link href={"mailto:dom1gbadamosi@gmail.com"}>
              <Button className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-300 hover:text-white text-sm border border-neutral-700">
                <CiMail className="h-4 w-4" />
                <span>Contact</span>
              </Button>
            </Link>
            <Button
              onClick={toggleOverlay}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors text-neutral-300 hover:text-white text-sm border border-neutral-700"
            >
              <CiRead className="h-4 w-4" />
              <span>Resume</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-neutral-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (        <div className="md:hidden absolute top-full left-0 right-0 mx-4 mt-2 backdrop-blur-fallback border border-neutral-700 rounded-lg shadow-lg z-30">
          <div className="flex flex-col items-center py-4 space-y-3">
            <Link 
              href="#experience" 
              className="text-sm text-neutral-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="#projects" 
              className="text-sm text-neutral-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#techstack" 
              className="text-sm text-neutral-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <div className="flex items-center gap-4 pt-2">
              {socials.map((social, index) => {
                const Icon = social.Icon;
                return (
                  <Link 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-neutral-400 hover:text-neutral-200 transition-colors" 
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-3 pt-2">
              <Link href={"mailto:dom1gbadamosi@gmail.com"}>
                <Button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-sm">
                  <CiMail className="h-3.5 w-3.5" />
                  <span>Contact</span>
                </Button>
              </Link>
              <Button
                onClick={() => {
                  toggleOverlay();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-sm"
              >
                <CiRead className="h-3.5 w-3.5" />
                <span>Resume</span>
              </Button>
            </div>
          </div>
        </div>
      )}      
      {/* Main Hero Content */}
      <div className="absolute inset-0 opacity-50"></div>      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="flex flex-col items-center max-w-7xl w-full -mt-16">
          <div className="flex flex-col items-center  w-full">
            
            {/* TL;DR Section */}
            <div className="flex flex-col mb-8">
              <h3 className="text-2xl md:text-2xl lg:text-4xl items-center text-center font-semibold text-neutral-200 mb-4">TL;DR</h3>
              <p className="text-lg md:text-xl max-w-prose text-neutral-300 leading-relaxed">
                {personalDescription}
              </p>
            </div>
            
            {/* GitHub Contribution Graph */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://github.com/kiing-dom" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-neutral-300 hover:text-white transition-colors relative group flex items-center gap-2" 
                      title="GitHub"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                      kiing-dom
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-2.5 h-2.5 bg-neutral-700 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-200 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-300 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-green-700 rounded-sm"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <div className="w-full max-w-3xl">
                    <img 
                      src="https://ghchart.rshah.org/15803d/kiing-dom" 
                      alt="kiing-dom's GitHub contribution chart" 
                      className="github-chart w-full h-auto rounded-lg mx-auto" 
                      style={{maxWidth: '100%', height: 'auto', minHeight: '120px'}}
                    />                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Resume Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div ref={overlayRef} className="bg-[#d8d8ff] rounded-md w-11/12 h-5/6 max-w-4xl max-h-[90vh] relative">
            <div className="absolute top-2 left-2">
              <span onClick={closeOverlay} className="cursor-pointer">
                <CiSquareRemove className="hover:rotate-3 hover:scale-110 transition-transform duration-150" size={36} color="black" />
              </span>
            </div>            <div className="text-center text-3xl text-black font-bold py-4 flex items-center justify-center gap-2">
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
