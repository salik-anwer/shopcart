import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-semibold">ShopCart</h2>
            <p className="text-sm">Making your dreams a reality</p>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://www.linkedin.com/in/salik-anwer-ansari-40b259170/" className="click-transition">
                <Image src={'/li.png'} alt='li' height={25} width={25}/>
            </a>
            <a href="https://github.com/salik-anwer" className="click-transition">
                <Image src={'/gh.png'} alt='gh' height={25} width={25}/>
            </a>
            <a href="mailto:ansarisalik99@gmail.com" className="click-transition">
                <Image src={'/mail.png'} alt='mail' height={25} width={25}/>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ShopCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
