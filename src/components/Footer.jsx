import React from 'react';

const Footer = () => {
  return (
    <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Shopow
          - Marko Popovic
        </p>
      </aside>
    </footer>
  );
};

export default Footer;