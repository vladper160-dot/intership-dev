import React, { useState } from 'react';
import NavTabs from './NavTabs';
import NavUserActions from './NavUserActions';
import './Navbar.css';

const Navbar = () => {
  // Povieme TypeScriptu, že activeTab bude vždy string (text)
  const [activeTab, setActiveTab] = useState<string>('zebricek');
  
  const currentUser = {
    name: 'Vít B.',
    initials: 'VB'
  };

  return (
    <header className="main-navbar">
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <NavUserActions user={currentUser} />
    </header>
  );
};

export default Navbar;