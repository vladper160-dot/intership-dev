import React, { useState } from 'react';
import { Salesperson } from '../../types/api';
import './DataTable.css';

interface DataTableProps {
  data: Salesperson[];
}

// POMOCNÁ FUNKCIA pre iniciály (rovnaká ako v TopCards)
const getInitials = (name: string) => {
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.substring(0, 2).toUpperCase();
};

// MINI KOMPONENT pre menšiu fotku v tabuľke
const TableAvatar = ({ person }: { person: Salesperson }) => {
  const [hasError, setHasError] = useState(false);

  if (person.avatarUrl && !hasError) {
    return (
      <img 
        src={person.avatarUrl} 
        alt={person.name} 
        className="table-avatar-img" 
        onError={() => setHasError(true)} 
      />
    );
  }
  return <div className="table-avatar-placeholder">{getInitials(person.name)}</div>;
};

export const DataTable = ({ data }: DataTableProps) => {
  // 1. Odkrojíme prvých 6 ľudí (tí už sú hore v kartách), zobrazíme len 7. a ďalších
  const tableData = data.slice(6);

  // 2. Vypočítame sumu VŠETKÝCH obchodníkov dohromady, aby sme vedeli určiť % podiel
  const totalValue = data.reduce((sum, person) => sum + person.value, 0);

  // 3. Funkcia na naformátovanie peňazí s medzerami
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('cs-CZ');
  };

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th className="col-rank">#</th>
            <th className="col-name">OBCHODNÍK</th>
            <th className="col-right">DEALY</th>
            <th className="col-right">HODNOTA</th>
            <th className="col-center">TREND</th>
            <th className="col-right">PODÍL</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((person) => {
            const isPositive = person.trend >= 0;
            // Výpočet percentuálneho podielu (zaokrúhlený na celé číslo)
            const share = totalValue === 0 ? 0 : Math.round((person.value / totalValue) * 100);

            return (
              <tr key={person.rank}>
                <td className="rank-cell">{person.rank}</td>
                
                <td>
                  <div className="person-cell">
                    <TableAvatar person={person} />
                    <span className="person-name">{person.name}</span>
                  </div>
                </td>
                
                <td className="col-right">
                  <span className="bold-text">{person.deals}</span> <span className="muted-text">dealů</span>
                </td>
                
                <td className="col-right">
                  <span className="bold-text">{formatCurrency(person.value)}</span> <span className="muted-text">Kč</span>
                </td>
                
                <td className="col-center">
                  <span className={`table-trend-badge ${isPositive ? 'positive' : 'negative'}`}>
                    {isPositive ? '↗' : '↘'} {person.trend > 0 ? '+' : ''}{person.trend} %
                  </span>
                </td>
                
                <td className="col-right">
                  <div className="share-cell">
                    {/* Progress Bar (Teplomer podielu) */}
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: `${share}%` }}></div>
                    </div>
                    <span className="share-text">{share} %</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};