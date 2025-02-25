'use client'
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import { useState } from "react";
import { useEffect } from "react";



const Navbar = () => {
  const [scroll, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "adhvythasrigopal@gmail.com"; // Your email address

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleCopyEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevents opening mail app
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide message after 2s
    });
  };


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scroll ? "bg-white bg-opacity-90 shadow-md" : "bg-transparent"
    }`}>
      <div className = "flexBetween px-4 py-0">
      <Link href="/">
            <Image src = "/AS.png" alt= "logo" width ={40} height = {40}/>
        </Link>

        <ul className = "hidden h-full gap-12 lg:flex flex-row items-center" >
        {NAV_LINKS.map((link) => {
          if (link.key === 'linkedin') {
            return (
              <a
                href={link.href}
                key={link.key}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-80"
              >
                <img
                  src="linkedin.png" // Replace with LinkedIn icon path
                  alt={link.label}
                  className="w-12 h-12 object-contain rounded-full"
                />
              </a>
            );
        } else if (link.key === "email") {
          return (
            <button
              key={link.key}
              onClick={handleCopyEmail}
              className="relative flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-80"
            >
              <img
                src="email.png"
                alt={link.label}
                className="w-8 h-8 object-contain rounded-full"
              />
              {copied && (
                <span className="absolute top-full mt-1 bg-stone-200 text-black px-2 py-1 rounded text-sm">
                  Email copied to clipboard!
                </span>
              )}
            </button>
          );
        }
        return null;
        })}
        </ul>
      </div>
    </nav>
)
}


export default Navbar