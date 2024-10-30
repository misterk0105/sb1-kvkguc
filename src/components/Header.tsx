import React from 'react';
import { Menu, X, Home } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-[#138f1d] via-white to-[#ff883e] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23138f1d'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETIY%3C/text%3E%3C/svg%3E"
              alt="Telugu Ireland Yuvatha Logo"
              className="h-16 w-16"
            />
            <div>
              <h1 className="text-2xl font-bold">Telugu Ireland Yuvatha</h1>
              <p className="text-sm text-gray-600 mt-1">ఏ దేశమేగినా ఎందు కాలిడినా</p>
              <p className="text-sm text-gray-600">ఏ పీఠమెక్కినా ఎవ్వరేమనినా</p>
              <p className="text-sm text-gray-600">పొగడరా నీతల్లి భూమి భారతిని</p>
              <p className="text-sm text-gray-600">నిలుపరా నీ జాతి నిండు గౌరవము</p>
            </div>
          </div>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-[#138f1d] transition">About</a>
            <a href="#events" className="hover:text-[#138f1d] transition">Events</a>
            <a href="#gallery" className="hover:text-[#138f1d] transition">Gallery</a>
            <a href="#team" className="hover:text-[#138f1d] transition">Team</a>
            <a href="#donate" className="hover:text-[#138f1d] transition">Donate</a>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <a href="#about" className="block py-2 hover:text-[#138f1d]">About</a>
            <a href="#events" className="block py-2 hover:text-[#138f1d]">Events</a>
            <a href="#gallery" className="block py-2 hover:text-[#138f1d]">Gallery</a>
            <a href="#team" className="block py-2 hover:text-[#138f1d]">Team</a>
            <a href="#donate" className="block py-2 hover:text-[#138f1d]">Donate</a>
          </nav>
        )}
      </div>
    </header>
  );
}