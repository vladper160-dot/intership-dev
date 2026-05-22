import React from 'react';

// Toto povie TypeScriptu, aké dáta (Props) komponent očakáva
interface NavTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const NavTabs = ({ activeTab, setActiveTab }: NavTabsProps) => {
  const tabs = [
    { id: 'nastenka', label: 'Nástěnka' },
    { id: 'zaciname', label: 'Začínáme' },
    { id: 'leady', label: 'Leady' },
    { id: 'nastenka-leadu', label: 'Nástěnka leadů' },
    { id: 'zebricek', label: 'Žebříček obchodníků', closable: true },
    { id: 'stagnujici', label: 'Stagnující příležitosti' },
  ];

  return (
    <div className="nav-tabs">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          {tab.closable && <span className="close-icon">×</span>}
        </div>
      ))}
    </div>
  );
};

export default NavTabs;