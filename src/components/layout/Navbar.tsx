'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    // Event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up of event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Image
            className="w-10 h-10 mr-2"
            alt="Group"
            src="/images/icon.svg"
            width={40}
            height={30}
          />
          <span className="text-primary font-bold text-lg">
            Primed E-Health
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="text-[#2B2A2A] font-bold md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen
              ? 'flex flex-col gap-10 text-[24px] items-center fixed inset-0 bg-white z-10 rounded-br-full ease-in-out'
              : 'hidden'
          } md:flex md:space-x-6 md:justify-end md:w-auto text-[16px] text-[#2B2A2A]`}
        >
          <div className="absolute top-0 w-full flex justify-between items-center px-6 py-4 md:hidden">
            <div className="flex items-center">
              <Image
                className="w-10 h-10 mr-2"
                alt="Group"
                src="/images/icon.svg"
                width={40}
                height={30}
              />
              <span className="text-primary font-bold text-lg">
                Primed E-Health
              </span>
            </div>
            <button
              onClick={toggleMenu}
              className="text-[#2B2A2A] font-bold focus:outline-"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <li className="text-secondary hover:text-primary mt-36 md:mt-0">
            <Link
              href="/"
              className={
                pathname === '/'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              Home
            </Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link
              href="/about-us"
              className={
                pathname === '/about-us'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              About Us
            </Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link
              href="/solutions"
              className={
                pathname === '/solutions'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              Solutions
            </Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link
              href="/products"
              className={
                pathname === '/products'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              Products
            </Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link
              href="/contact"
              className={
                pathname === '/contact'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              Contact
            </Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link
              href="/blog"
              className={
                pathname === '/blog'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              Blog
            </Link>
          </li>
          <li className="text-secondary hover:text-primary">
            <Link
              href="/careers"
              className={
                pathname === '/careers'
                  ? 'active'
                  : 'transition-all truncate hover:text-clip'
              }
            >
              Careers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
