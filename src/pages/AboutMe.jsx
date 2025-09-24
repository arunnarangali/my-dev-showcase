import React from "react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import Divider from "../components/Divider";

const AboutMe = () => {
  return (
    <section id="about" className="bg-gray-200 py-20 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* About Me Heading */}
        <SectionHeading title="ABOUT ME" className="mb-12" />

        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto">
            I'm a Frontend Developer. I develop high-performance, accessible web
            applications with React.js and TypeScript. I employ Redux to manage
            state and Tailwind CSS for responsive UI. At Texol World (Dec
            2023–present), I deploy features, optimize performance, and manage a
            shared component library. Internships taught me backend basics (REST
            APIs, relational databases, SQL, message queues) and utilized stacks
            such as Go, Gin, Kafka, and ClickHouse. Frontend, clean code, and
            collaboration are my priorities now.
          </p>
        </div>

        {/* Explore Button with Decorative Lines */}
        <div className="flex items-center justify-center gap-8 mb-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-px bg-black"></div>
            <div className="w-3 h-px bg-black"></div>
            <div className="w-6 h-px bg-black"></div>
          </div>

          <button className="border border-black px-8 py-2 text-sm font-medium tracking-wider hover:bg-black hover:text-white transition-colors">
            EXPLORE
          </button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-black"></div>
            <div className="w-3 h-px bg-black"></div>
            <div className="w-12 h-px bg-black"></div>
          </div>
        </div>

        {/* Decorative Divider */}
        <Divider />

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <ServiceCard
            title="DESIGN"
            description="Craft clean, user-centered UI, wireframes, and accessible layouts with Figma and Tailwind."
          />
          <ServiceCard
            title="DEVELOPMENT"
            description="Build performant React.js apps with TypeScript, Redux, REST integrations, and reusable components."
          />
          <ServiceCard
            title="MAINTENANCE"
            description="Monitor, refactor, and optimize code; fix bugs, update dependencies, and improve performance."
          />
        </div>

        {/* Another Decorative Divider */}
        <Divider />
      </div>
    </section>
  );
};

export default AboutMe;
