import React, { useState } from 'react';
import NavTabs from './NavTabs';
import NavUserActions from './NavUserActions';
import './Navbar.css'; // Sem pôjdu vaše štýly

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('zebricek');
  
  // Ukážkové dáta prihláseného používateľa z obrázku (Vít B.)
  const currentUser = {
    name: 'Vít B.',
    initials: 'VB'
  };

  return (
    <header className="main-navbar">
      {/* Ľavá strana so záložkami */}
      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Pravá strana s profilom */}
      <NavUserActions user={currentUser} />
    </header>
  );
};

export default Navbar;