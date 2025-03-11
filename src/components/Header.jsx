import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-10 transition-all ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Sarang-Han</div>
        <ul className="flex space-x-6">
          <li><a href="#profile" className="hover:text-blue-500">Intro</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Project</a></li>
          <li><a href="#activities" className="hover:text-blue-500">Activity</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skill</a></li>
          <li><a href="#education" className="hover:text-blue-500">Education</a></li>
          <li><a href="#leadership" className="hover:text-blue-500">Leadership</a></li>
        </ul>
      </nav>
    </header>
  );
}