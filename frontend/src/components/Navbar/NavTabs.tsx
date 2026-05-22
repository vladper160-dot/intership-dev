import React from 'react';

interface NavTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const NavTabs = ({ activeTab, setActiveTab }: NavTabsProps) => {
  // Odstránili sme "closable: true", už to nepotrebujeme
  const tabs = [
    { id: 'nastenka', label: 'Nástěnka' },
    { id: 'zaciname', label: 'Začínáme' },
    { id: 'leady', label: 'Leady' },
    { id: 'nastenka-leadu', label: 'Nástěnka leadů' },
    { id: 'zebricek', label: 'Žebříček obchodníků' },
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
          
          {/* ZMENA TU: Krížik sa zobrazí IBA ak je záložka aktuálne vybraná */}
          {activeTab === tab.id && (
            <span 
              className="close-icon"
              onClick={(e) => {
                e.stopPropagation(); // Zastaví prebublanie kliknutia na rodičovský div
                
                // Zatiaľ to len vypíše do konzoly. Neskôr tu s kolegom môžete 
                // doprogramovať logiku, ktorá záložku úplne vymaže z poľa "tabs".
                console.log(`Klikol si na zavretie záložky: ${tab.label}`);
              }}
            >
              ×
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavTabs;