"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Replace with your GitHub Pages repository name as basePath
const basePath = "/ShootersTremelo";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMenuSlide, setCurrentMenuSlide] = useState(0);
  const [fade, setFade] = useState(false);

  // Static image paths with basePath prepended
  const images = [
    `${basePath}/images/1.jpg`,
    `${basePath}/images/2.jpg`,
    `${basePath}/images/3.jpg`,
    `${basePath}/images/4.jpg`,
  ];

  const menu = [
    `${basePath}/images/menu1.jpg`,
    `${basePath}/images/menu2.jpg`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentSlide]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(false);
    }, 500); // Match the CSS transition duration
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(false);
    }, 500); // Match the CSS transition duration
  };

  const handlePrevMenu = () => {
    setCurrentMenuSlide((prev) => (prev === 0 ? menu.length - 1 : prev - 1));
  };

  const handleNextMenu = () => {
    setCurrentMenuSlide((prev) => (prev === menu.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen font-sans bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Shooters Tremelo</h1>
          <ul className="flex gap-6">
            <li>
              <a href="#gallery" className="hover:text-gray-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-gray-300">
                Menu
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('${basePath}/images/3.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded text-center">
          <h2 className="text-4xl font-bold mb-4">Welkom bij Shooters Tremelo</h2>
          <p className="text-lg">Pool, Snooker en nog veel meer!</p>
        </div>
      </header>

      {/* Gallery and Menu Section */}
      <section id="gallery" className="py-16 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery & Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery Section */}
            <div className="relative w-full">
              <div
                className={`transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={images[currentSlide]}
                  alt={`Gallery Image ${currentSlide + 1}`}
                  width={600}
                  height={400}
                  className="rounded mx-auto"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrev}
                  className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Menu Section */}
            <div className="relative w-full">
              <Image
                src={menu[currentMenuSlide]}
                alt={`Menu Image ${currentMenuSlide + 1}`}
                width={600}
                height={400}
                className="rounded mx-auto"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevMenu}
                  className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
                >
                  Prev
                </button>
                <button
                  onClick={handleNextMenu}
                  className="bg-black bg-opacity-50 text-white px-4 py-2 rounded hover:bg-opacity-75"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p>Schrieksebaan 55, Tremelo</p>
          <p>Telefoon: +32 16 57 17 47</p>
          <p>Email: Truyens.antonio@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center">
        <p className="text-sm">&copy; 2024 Shooters Tremelo. All rights reserved.</p>
      </footer>
    </div>
  );
}
