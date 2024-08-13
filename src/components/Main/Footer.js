import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-white text-2xl font-bold mb-2">
              Netflix GPT - Watch TV Shows and Movies
            </h2>
            <p className="text-gray-500">
              Enjoy a world of entertainment with your favorite movies and TV
              shows.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row mb-8 md:mb-0">
            <div className="mr-8">
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
              <ul>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Netflix GPT - Watch TV Shows and Movies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
