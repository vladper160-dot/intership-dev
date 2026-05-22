import React, { useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { DataTable } from '../DataTable/DataTable';
import { Sidebar } from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Secbar } from '../Secbar/secbar';
import { TopCards } from '../Leaderboard/TopCards';
import './App.css';

function App() {
  const { data } = useFetchData();

  // 1. State pre filtre
  const [selectedMonth, setSelectedMonth] = useState<string>('Máj 2026');
  const [selectedSalesperson, setSelectedSalesperson] = useState<string>('');

  // 2. Extrakcia unikátnych mien obchodníkov pre dropdown menu
  // (Prejde všetky dáta, vyberie mená a cez Set odstráni duplikáty)
  const uniqueSalespeople = Array.from(new Set(data.map(person => person.name)));

  // 3. Aplikovanie filtrov
  let filteredData = data;

  if (selectedSalesperson) {
    filteredData = filteredData.filter(person => person.name === selectedSalesperson);
  }

  return (
    <div className="app-container">
      <Sidebar />
      <section style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar />
        
        {/* Odovzdáme stav a zoznam mien do Secbaru */}
        <Secbar 
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedSalesperson={selectedSalesperson}
          setSelectedSalesperson={setSelectedSalesperson}
          salespeopleList={uniqueSalespeople}
        />
        
        <div className="main-container">
          {/* Posielame už vyfiltrované dáta (filteredData) */}
          <TopCards data={filteredData} />
          <DataTable data={filteredData} />
        </div>
      </section>
    </div>
  );
}

export default App;