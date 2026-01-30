import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import logo from "../assets/images/logo-removebg-preview.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Active when element is in the middle of viewport
        threshold: 0,
      },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-25" />
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <NavLink href="#about" isActive={activeSection === "about"}>
            About me
          </NavLink>
          <NavLink href="#experience" isActive={activeSection === "experience"}>
            Experience
          </NavLink>
          <NavLink href="#skills" isActive={activeSection === "skills"}>
            Skills
          </NavLink>
          <NavLink href="#portfolio" isActive={activeSection === "portfolio"}>
            Portfolio
          </NavLink>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
        >
          CONTACT ME
        </a>
      </div>
    </header>
  );
};

export default Header;
