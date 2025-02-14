import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import winweaklogo from "../public/Images/winweakklogo.png";
import imagebanner from "../public/Images/easyfastfree.png";
import Videoloop from "../public/Images/blueloop.mp4";
import githublogo from "../public/Images/Orion_github.svg";
import windowsLogo from "../public/Images/windowslogo.png";

const BASE_URL = import.meta.env.BASE_URL;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Why Tweaking Matters",
      content: "Regular driver updates and system tweaks are essential for maintaining peak performance. Outdated drivers and improper settings can cause compatibility issues, crashes, and slowdowns.",
    },
    {
      title: "Stay Updated",
      content: "With WinWeak, keeping your system optimized and up-to-date has never been easier. Ensure smooth operation with the latest drivers and helpful tweaks right at your fingertips.",
    },
    {
      title: "Optimize Your System",
      content: "WinWeak provides you with the tools to optimize your system, ensuring that it runs smoothly and efficiently. Don't let outdated drivers slow you down.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-blue-600">
        <div className="flex items-center space-x-4">
          <motion.img
            src={winweaklogo}
            alt="DriverXPress Logo"
            className="h-14 w-14 logo-spin"
            whileHover={{ scale: 1.1 }}
          />
          <h1 className="text-white text-4xl font-varelmo transition-colors duration-300 ease-in-out">
            WinWeak
          </h1>
        </div>
        <nav className="flex items-center space-x-6">
          <motion.a
            href="https://www.paypal.com/paypalme/Souzawow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="39px" fill="#e8eaed"> <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/> </svg>
              <span className="ml-1 text-white">Donate</span>
            </div>
          </motion.a>
          <motion.a
            href="https://github.com/souzaisrage/winweak-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
            ></span>
            <div className="flex items-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
                <path
                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                ></path>
              </svg>
              <span className="ml-1 text-white">GitHub</span>
            </div>
          </motion.a>
        </nav>
      </header>
      <section className="relative flex items-center justify-center h-96 bg-gray-900">
        <video
          className="absolute inset-0 w-full h-full object-cover blur-md"
          src={Videoloop}
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-black/50"></div>
        <div className="relative z-10 flex flex-col items-center space-y-6 text-white">
          <h2 className="text-4xl font-bold font">Tweak Your System and Update Your Device Drivers Now!</h2>
          <p className="text-sm text-gray-500 mt-2 flex items-center justify-center">
            <img
              src={windowsLogo}
              alt="Windows Logo"
              className="w-4 h-4 mr-1"
            />
            Windows
          </p>
          <div className="text-center">
            <motion.button
              className="cursor-pointer flex justify-between bg-blue-600 px-6 py-3 rounded-full text-white tracking-wider shadow-xl hover:bg-black hover:scale-105 duration-500 hover:ring-1 font-mono w-[180px]"
              whileHover={{ scale: 1.1 }}
            >
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </section>
      <section className="bg-black p-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={imagebanner}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <AnimatePresence>
                {slides.map((slide, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`absolute top-0 left-0 w-full ${
                      index === currentSlide ? 'block' : 'hidden'
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-white">{slide.title}</h3>
                    <p className="text-white mb-4">{slide.content}</p>
                  </motion.div>
                ))}
              </AnimatePresence>          
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentSlide ? 'bg-blue-600' : 'bg-gray-500'
                    }`}
                  ></button>
                ))}
              </div>
        <section className="bg-black py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.1 }}>
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Driver Updates</h3>
                <p className="text-gray-400">Keep your drivers up-to-date with the latest versions for optimal performance.</p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.10 }}>
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">System Optimization</h3>
                <p className="text-gray-400">Optimize your system settings to ensure smooth and efficient operation.</p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.10 }}>
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast & Easy</h3>
                <p className="text-gray-400">Quick and easy-to-use interface to get your system running at its best.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <hr className="border-t-2 border-gray-500" />
        <div className=" text-white py-8 mt-8 text-center">
          <div className="space-y-6">
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/souzaisrage/winweak-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.paypal.com/paypalme/Souzawow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                Donate
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 WinWeak. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500">
              Developed with ❤️ by <a href="https://github.com/souzaisrage" target='_blank' className="text-white hover:text-gray-400">souzaisrage</a>
            </p>
            <p className="text-sm text-gray-500">
              This project is licensed under the <a href="https://opensource.org/licenses/MIT" target='_blank' className="text-white hover:text-gray-400">MIT License</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}