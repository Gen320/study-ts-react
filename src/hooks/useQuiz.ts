import { useState } from 'react';

export const QUESTION = 'Reactはどのようなものですか？';
export const CHOICES = ['ライブラリ', 'フレームワーク', '言語', 'データベース'];
export const CORRECT_ANSWER = 'ライブラリ';

type UseQuiz = () => {
  userChoise: string;
  result: string;
  handleChoise: (choice: string) => void;
  handleSubmit: () => void;
};

export const useQuiz: UseQuiz = () => {
  const [userChoise, setUserChise] = useState('');
  const [result, setResult] = useState('');

  const handleChoise = (choice: string) => {
    setUserChise(choice);
  };

  const handleSubmit = () => {
    if (userChoise.trim() === '') {
      setResult('選択してください');
      return;
    }
    userChoise === CORRECT_ANSWER ? setResult('正解') : setResult('不正解');
  };

  return {
    userChoise,
    result,
    handleChoise,
    handleSubmit,
  };
};
