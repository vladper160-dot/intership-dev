import { ApiBusinessCase, Salesperson } from '../types/api';

export const transformApiDataToLeaderboard = (apiData: ApiBusinessCase[]): Salesperson[] => {
  // Pripravíme si objekt pre medzivýpočet (bez ranku, ten pridáme na konci)
  const aggregatedData: Record<number, Omit<Salesperson, 'rank'>> = {};

  apiData.forEach((businessCase) => {
    const ownerId = businessCase.owner.id;

    if (!aggregatedData[ownerId]) {
      aggregatedData[ownerId] = {
        name: businessCase.owner.fullName,
        deals: 0,
        value: 0,
        avatarUrl: businessCase.owner.photo?.uuid 
            ? `https://app.raynet.cz/api/v2/file/${businessCase.owner.photo.uuid}/content` 
            : 'https://via.placeholder.com/60', // Zástupný obrázok ak nemá fotku
        trend: 0 
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