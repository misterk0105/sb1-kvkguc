import React from 'react';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:communications@teluguirelandyuvatha.com';
  };

  return (
    <footer className="bg-gradient-to-r from-[#138f1d] via-white to-[#ff883e] py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/telugu_ireland_yuvatha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#138f1d] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <button
              onClick={handleEmailClick}
              className="text-gray-800 hover:text-[#138f1d] transition-colors"
            >
              <Mail className="h-6 w-6" />
            </button>
          </div>
          <p className="text-gray-800">&copy; 2024 Telugu Ireland Yuvatha. All rights reserved.</p>
          <p className="text-sm text-gray-600">Developed by TechVie</p>
        </div>
      </div>
    </footer>
  );
}