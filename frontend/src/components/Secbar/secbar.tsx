import React from 'react';
import './secbar.css';

interface SecbarProps {
  selectedMonth: string;
  setSelectedMonth: (val: string) => void;
  selectedSalesperson: string;
  setSelectedSalesperson: (val: string) => void;
  salespeopleList: string[]; // Zoznam unikátnych mien z App.tsx
}

export function Secbar({ 
  selectedMonth, 
  setSelectedMonth, 
  selectedSalesperson, 
  setSelectedSalesperson,
  salespeopleList
}: SecbarProps) {

  // Funkcia na vyčistenie všetkých filtrov naraz
  const clearFilters = () => {
    setSelectedMonth('');
    setSelectedSalesperson('');
  };

  // Zistíme, či je aspoň jeden filter aktívny
  const hasActiveFilters = selectedMonth !== '' || selectedSalesperson !== '';

  return (
    <section id="secbar_main">
      <section id="secbar">
        <span className="secbar-top-info">Seřadit dle: Hodnota dealu (sestupně)</span>
        <h1>Žebříček obchodníků</h1>
        
        <div className="secbar-filters">
          <select className="secbar-select"><option>Mé filtry</option></select>
          
          {/* Filter pre Mesiac (zatiaľ hardcoded, kým backend nedodá podporu dátumov) */}
          <select 
            className={`secbar-select ${selectedMonth ? 'active' : ''}`}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Tento měsíc</option>
            <option value="Máj 2026">Máj 2026</option>
            <option value="Duben 2026">Duben 2026</option>
          </select>

          {/* DYNAMICKÝ Filter pre Obchodníka */}
          <select 
            className={`secbar-select ${selectedSalesperson ? 'active' : ''}`}
            value={selectedSalesperson}
            onChange={(e) => setSelectedSalesperson(e.target.value)}
          >
            <option value="">Obchodník</option>
            {salespeopleList.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>

          <select className="secbar-select"><option>Region</option></select>
          <select className="secbar-select"><option>Tým</option></select>
          <button className="secbar-icon-btn">✏️</button>
        </div>

        {/* Sekcia s aktívnymi štítkami sa ukáže iba ak je niečo vybrané */}
        {hasActiveFilters && (
          <div className="secbar-active-tags">
            <span className="secbar-badge">Filtrováno</span>
            
            {selectedMonth && (
              <div className="secbar-tag">
                <span>Tento měsíc: {selectedMonth}</span>
                <button className="secbar-tag-close" onClick={() => setSelectedMonth('')}>×</button>
              </div>
            )}

            {selectedSalesperson && (
              <div className="secbar-tag">
                <span>Obchodník: {selectedSalesperson}</span>
                <button className="secbar-tag-close" onClick={() => setSelectedSalesperson('')}>×</button>
              </div>
            )}

            <button className="secbar-clear-all" onClick={clearFilters}>× Vyčistit filtry</button>
          </div>
        )}
      </section>

      {/* Pravá strana s tlačidlami */}
      <section className="secbar-actions">
        <button className="secbar-add-btn">+</button>
        <button className="secbar-filter-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <span>Filtrování</span>
        </button>
      </section>
    </section>
  );
}