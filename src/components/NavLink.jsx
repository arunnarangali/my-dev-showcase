import React from "react";

const NavLink = ({
  children,
  href = "#",
  className = "",
  isActive = false,
}) => {
  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={[
        "text-sm font-medium transition-all duration-300",
        isActive
          ? "text-white border-b-2 border-white"
          : "text-white/70 hover:text-white",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
};

export default NavLink;
