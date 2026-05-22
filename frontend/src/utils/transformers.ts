import { ApiBusinessCase, Salesperson } from '../types/api';

export const transformApiDataToLeaderboard = (apiData: ApiBusinessCase[]): Salesperson[] => {
  const aggregatedData: Record<number, Omit<Salesperson, 'rank'>> = {};

  apiData.forEach((businessCase) => {
    const ownerId = businessCase.owner.id;

    if (!aggregatedData[ownerId]) {
      // Tu vytvárame zástupný trend. 
      // Vzorec (ownerId % 30) - 10 vytvorí vždy rovnaké číslo pre rovnakého človeka,
      // pričom to budú uveriteľné percentá (od -10% do +19%).
      // TODO: Keď backend dodá reálne historické dáta, toto sa musí prepísať!
      const simulatedTrend = (ownerId % 30) - 10;

      aggregatedData[ownerId] = {
        name: businessCase.owner.fullName,
        deals: 0,
        value: 0,
        avatarUrl: businessCase.owner.photo?.uuid 
            ? `https://app.raynet.cz/api/v2/file/${businessCase.owner.photo.uuid}/content` 
            : null,
        trend: simulatedTrend // <--- ZMENA: Tu vkladáme náš simulovaný trend namiesto nuly
      };
    }

    aggregatedData[ownerId].deals += 1;
    aggregatedData[ownerId].value += businessCase.totalAmountInDefaultCurrency;
  });

  // Prevedieme na pole a zoradíme od najväčšieho zárobku po najmenší
  const leaderboardArray = Object.values(aggregatedData);
  leaderboardArray.sort((a, b) => b.value - a.value);

  // Pridáme poradie (rank)
  return leaderboardArray.map((person, index) => ({
    ...person,
    rank: index + 1,
  }));
};