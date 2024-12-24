import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="logo.ico"
              className="h-6 w-auto object-contain"
              alt="Sharma Tour & Travels"
            />

          </Link>
         
        </div>

        {/* Menu Section */}
        <Menu
          mode="horizontal"
          theme="light"
          style={{
            borderBottom: 'none',
            display: 'flex',
            justifyContent: 'center', // Align menu items to the right
            flexGrow: 1,               // Allow the menu to grow and fill space
          }}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="services">
            <Link to="/services">Services</Link>
          </Menu.Item>
          <Menu.Item key="packages">
            <Link to="/packages">Packages</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </div>
  );
};

export default Header;
