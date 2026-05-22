import React, { useState } from 'react';
import { Salesperson } from '../../types/api';
import './TopCards.css';

interface TopCardsProps {
  data: Salesperson[];
}

// POMOCNÁ FUNKCIA: Vytiahne iniciály
const getInitials = (name: string) => {
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// NOVÝ KOMPONENT: Avatar, ktorý sám zvláda chyby pri načítaní
const AvatarWithFallback = ({ person }: { person: Salesperson }) => {
  const [hasError, setHasError] = useState(false);

  // Ak máme URL a zatiaľ nenastala chyba, skúsime načítať obrázok
  if (person.avatarUrl && !hasError) {
    return (
      <img 
        src={person.avatarUrl} 
        alt={person.name} 
        className="avatar-img" 
        onError={() => setHasError(true)} // Ak zlyhá stiahnutie, prepneme hasError na true
      />
    );
  }

  // Ak URL neexistuje alebo obrázok zlyhal, ukážeme iniciály
  return (
    <div className="avatar-placeholder">
      {getInitials(person.name)}
    </div>
  );
};

export const TopCards = ({ data }: TopCardsProps) => {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('cs-CZ') + ' Kč';
  };

  const topSix = data.slice(0, 6);

  return (
    <div className="top-cards-container">
      {topSix.map((person) => {
        const isTrendPositive = person.trend >= 0;
        const cardClass = person.rank <= 3 ? `rank-${person.rank}` : 'rank-other';

        return (
          <div key={person.rank} className={`top-card ${cardClass}`}>
            <div className="card-header">
              <span className="rank-badge">
                {person.rank === 1 && '🏆 '}
                {person.rank === 2 && '🥈 '}
                {person.rank === 3 && '🥉 '}
                {person.rank}. MÍSTO
              </span>
              <span className={`trend-badge ${isTrendPositive ? 'positive' : 'negative'}`}>
                {isTrendPositive ? '📈' : '📉'} {person.trend > 0 ? '+' : ''}{person.trend} %
              </span>
            </div>

            <div className="card-body">
              {/* Použijeme náš nový, inteligentný Avatar */}
              <AvatarWithFallback person={person} />
              
              <h3 className="person-name">{person.name}</h3>
            </div>

            <div className="card-footer">
              <div className="stat-box">
                <span className="stat-value">{person.deals}</span>
                <span className="stat-label">dealů</span>
              </div>
              <div className="stat-box value-box">
                <span className="stat-value">{formatCurrency(person.value)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};