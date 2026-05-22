import { useState, useEffect } from 'react';
// Importujeme naše nové typy a transformačnú funkciu
import { Salesperson } from '../types/api';
import { transformApiDataToLeaderboard } from '../utils/transformers';

export function useFetchData() {
  // State už neukladá DataRow[], ale náš zoznam obchodníkov Salesperson[]
  const [data, setData] = useState<Salesperson[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // TU JE ZMENA: Namiesto /api/hello sťahujeme tvoj JSON.
      // Predpokladám, že data.json máš vložený v zložke "public". 
      // Ak nie, daj si kópiu data.json priamo do zložky frontend/public/
      const response = await fetch('/data.json'); 
      
      if (!response.ok) {
        throw new Error('Nepodarilo sa stiahnuť dáta');
      }
      
      const rawJson = await response.json();
      
      // MÁGIA: Zoberieme zložité dáta z API a premeníme ich na čistý zoznam pre tabuľku
      const finalLeaderboard = transformApiDataToLeaderboard(rawJson.data);
      
      setData(finalLeaderboard);
    } catch (err) {
      console.error("Chyba pri spracovaní dát:", err);
      setData([]); // V prípade chyby vrátime prázdne pole
    }
  };

  return { data };
}