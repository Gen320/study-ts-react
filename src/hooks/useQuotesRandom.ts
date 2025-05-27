import { useEffect, useState } from 'react';

const QUOTES = [
  '人生に失敗がないと、人生は失敗する。',
  '夢を見ることができれば、それは実現できる。',
  '行動の起点は、すべて夢にある。',
  '慣習は、第二の人生である。',
  '唯一の失敗は、挑戦しなかったことである。',
];

type UseQuotesRandom = () => {
  currentQuote: string;
};

export const useQuotesRandom: UseQuotesRandom = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);

    return () => {};
  }, []);

  return {
    currentQuote,
  };
};
