import { Layout } from 'antd';
import React from 'react';

const Footer = () => {
    const { Footer: AntFooter } = Layout
  return (
    <AntFooter style={{ textAlign: 'center' }}>
        <p className="text-sm md:text-base mb-4">
          &copy; 2024 Sharma Tour & Travels. All rights reserved.
        </p>
        
        {/* Social Links */}
        {/* <div className="social-links flex justify-center space-x-6 mt-4">
          <a
            className="text-blue-500 hover:text-blue-300 transition-colors duration-300"
            href="#"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            className="text-pink-500 hover:text-pink-300 transition-colors duration-300"
            href="#"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            className="text-blue-400 hover:text-blue-200 transition-colors duration-300"
            href="#"
            aria-label="Twitter"
          >
            Twitter
          </a>
        </div> */}
        
        {/* Optional: Footer Bottom */}
        <div className="mt-6 text-xs text-gray-400">
          <p>
            Made with ❤️ by Sharma Tour & Travels Team
          </p>
        </div>
    </AntFooter>
  );
};

export default Footer;
