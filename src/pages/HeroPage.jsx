import React from 'react'
import SocialButton from '../components/SocialButton';
import profile from '../assets/images/profile.png';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import githubIcon from '../assets/images/github.svg'
import linkedin from "../assets/images/linkedin.svg"
import resumePDF from '../assets/ArunN-CV.pdf'
// header is mounted at app root

const HeroPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top navigation is globally mounted */}

      {/* Hero split layout */}
      <section className="relative overflow-hidden">
        {/* Left pane */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-24 md:pb-36">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-black">
              <p className="text-lg text-black/70">Hi, I am</p>
              <h1 className="mt-2 text-5xl md:text-6xl font-extrabold tracking-tight">
                Arun N
              </h1>
              <p className="mt-4 text-lg font-semibold text-black/60">
                Front-end Developer
              </p>

              <div className="mt-10 flex items-center gap-6">
                <SocialButton href="https://github.com/arunnarangali">
                  <img src={githubIcon} alt="GitHub" className="h-6 w-6" />
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/arun-n-b10b88153/">
                <img src={linkedin} alt="Linkedin" className="h-6 w-6" />
                </SocialButton>
                <SocialButton href={resumePDF} download filename="ArunN-CV.pdf">
                  <ArrowDownTrayIcon className="h-6 w-6 text-black" />
                </SocialButton>
              </div>
            </div>

            {/* Right: person image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Replace src with actual image */}
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full max-w-lg ml-auto h-auto  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background diagonal split */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          {/* Left light side */}
          <div className=" absolute inset-y-0 left-0 w-[45%] h-auto md:skew-x-15 -skew-x-3 bg-zinc-200" />
          
        </div>
      </section>
    </div>
  );
}

export default HeroPage