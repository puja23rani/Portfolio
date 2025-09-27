"use client";

import urls from "@/contants";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty(
      "--background",
      theme === "dark" ? "#0a0a0a" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--foreground",
      theme === "dark" ? "#ededed" : "#171717"
    );
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "h-16 backdrop-blur-md" : "h-20"}
       
      `}
        style={{
          background: isScrolled
            ? `color-mix(in srgb, var(--background) 95%, transparent)`
            : "var(--background)",
          borderColor: "color-mix(in srgb, var(--foreground) 20%, transparent)",
          color: "var(--foreground)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}

            <a
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
              style={{ color: "var(--foreground)" }}
            >
              😄 Puja
            </a>

            {/* Desktop Navigation Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-medium px-3 py-2 rounded-lg transition-all hover:opacity-80"
                      style={{ color: "var(--foreground)" }}
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* LinkedIn Icon */}
              <a
                href={urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="Visit LinkedIn profile"
                style={{ color: "var(--foreground)" }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:opacity-80 transition-opacity"
                aria-label="Toggle theme"
                style={{ color: "var(--foreground)" }}
              >
                {theme === "light" ? (
                  // Moon icon for dark mode
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                ) : (
                  // Sun icon for light mode
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:opacity-80 transition-opacity"
                aria-label="Toggle menu"
                style={{ color: "var(--foreground)" }}
              >
                <div className="w-6 h-6 relative">
                  <span
                    className="absolute top-1/2 left-0 w-full h-0.5 transform transition-transform duration-300"
                    style={{
                      backgroundColor: "var(--foreground)",
                      transform: isMenuOpen
                        ? "rotate(45deg) translateY(0)"
                        : "translateY(-0.5rem)",
                    }}
                  />
                  <span
                    className="absolute top-1/2 left-0 w-full h-0.5 transition-opacity duration-300"
                    style={{
                      backgroundColor: "var(--foreground)",
                      opacity: isMenuOpen ? 0 : 1,
                    }}
                  />
                  <span
                    className="absolute top-1/2 left-0 w-full h-0.5 transform transition-transform duration-300"
                    style={{
                      backgroundColor: "var(--foreground)",
                      transform: isMenuOpen
                        ? "rotate(-45deg) translateY(0)"
                        : "translateY(0.5rem)",
                    }}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`
              md:hidden absolute left-0 w-full border-b shadow-lg
              transition-all duration-300 overflow-hidden
              ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
            style={{
              background: "var(--background)",
              borderColor:
                "color-mix(in srgb, var(--foreground) 20%, transparent)",
            }}
          >
            <ul className="py-4 space-y-2">
              {["Home", "About", "Projects", "Timeline", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-6 py-3 font-medium transition-all hover:opacity-80"
                      style={{ color: "var(--foreground)" }}
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind navbar */}
      {/* <div className={isScrolled ? "h-16" : "h-20"}></div> */}
    </>
  );
}
