import React from 'react';

const Menu = ({ menuItems, scrollToSection, closeMenu }) => (
  <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
    <div className="container mx-auto text-white p-4">
      {menuItems.map((item) => (
        <a key={item.id} href={`#${item.id}`} className="block py-2" onClick={() => scrollToSection(item.id)}>
          {item.label}
        </a>
      ))}
      <button className="block py-2" onClick={closeMenu}>
        Close
      </button>
    </div>
  </div>
);

export default Menu;
