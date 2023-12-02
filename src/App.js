// src/App.js

import React, { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Parallax } from 'react-parallax';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: ' About Us' },
    { id: 'projects', label: ' Our Projects' },
    { id: 'team', label: ' Meet Our Team' },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-blue-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold">BYTE Tech Society</h1>
          {/* Hamburger menu for smaller screens */}
          <div className="cursor-pointer" onClick={handleMenuClick}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto text-white p-4">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="block py-2" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Home Section with Carousel */}
      <Parallax bgImage="/bgImage.jpg" strength={500}>
        <section id="home" className="dark-bg">
          <div className="container mx-auto p-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to BYTE Tech Society</h2>
            <p className="text-lg mb-8">Empowering Innovation in Technology</p>
            <Carousel />
          </div>
        </section>
      </Parallax>

      {/* Mentors Section */}
      <section id="mentors" className="bg-gray-200 p-8">
        <h2 className="text-3xl font-bold mb-4">Our Mentors</h2>
        <div className="mentor">
          <img src="/namitagupta1.png" alt="Prof. Namita Gupta" className="mentor-img" />
          <p>Prof. Namita Gupta</p>
          <p>HOD, CSE</p>
          <p>Department of Computer Science & Engineering commits to work towards developing Engineers with a rich blend of competent, technical, managerial and social skills and contribute to nation building.Department places emphasis on all the important aspects of computers such as Computer Networks, Mobile Communication, Algorithm Design, Operating System, Advance Database Systems, Theory of Computation , Computer Graphics and many more.Department takes the initiative to improve the soft skills, analytical capabilities and verbal communication of the students so that they can face the competition in the corporate world confidently. To meet the objectives, department pays special emphasis on teaching and hands on practical work. Students exhibit their innovative ideas, skills and potentials as final year projects and have won many awards at University level.The excellent infrastructure, experienced team of faculty dedicates to strengthen effective teaching learning process ensuring quality education.We believe that this approach to teaching-learning, coupled with practical experience gained during Industrial Training in reputed organizations, equips our students to handle the challenges posed by the IT industry. Students of Computer Science and Engineering are placed with top IT companies.We as a team resolve to take the Department to heights of success and glory and prepare for the forthcoming challenges.</p>
        </div>
      </section>


      {/* Team Section */}
      <section id="team" className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        {/* Add team content here */}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p>&copy; 2023 BYTE Tech Society. All rights reserved.</p>
            <p>Maharaja Agrasen Institute of Technology, PSP Area, Plot No. 1, Sector-22, New Delhi, Delhi 110086</p>
            <p>Email: info@byte-tech-society.com</p>
          </div>
          <div>
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="mr-4" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
