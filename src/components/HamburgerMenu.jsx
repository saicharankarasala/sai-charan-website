import React, { useState, useRef } from 'react';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaCode, 
  FaEnvelope 
} from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useOutsideClick(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  // Close menu when pressing Escape key
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="hamburger-menu md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`dropdown-menu ${isOpen ? 'open' : 'closed'}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>
          <FaHome className="text-2xl" />
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          <FaUser className="text-2xl" />
          About
        </a>
        <a href="#education" onClick={() => setIsOpen(false)}>
          <FaGraduationCap className="text-2xl" />
          Education
        </a>
        <a href="#experience" onClick={() => setIsOpen(false)}>
          <FaBriefcase className="text-2xl" />
          Experience
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          <FaCode className="text-2xl" />
          Projects
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          <FaEnvelope className="text-2xl" />
          Contact
        </a>
      </div>
    </div>
  );
};

export default HamburgerMenu; 