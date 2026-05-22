// Surové dáta, ktoré chodia z Raynet API
export interface ApiBusinessCase {
  id: number;
  name: string;
  totalAmountInDefaultCurrency: number;
  owner: {
    id: number;
    fullName: string;
    photo?: {
      uuid: string;
    };
  };
}

// Čisté dáta, ktoré očakáva naša tabuľka a karty
export interface Salesperson {
  rank: number;
  name: string;
  deals: number;
  value: number;
  trend: number;
  avatarUrl: string;
}