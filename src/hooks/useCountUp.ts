import { useState } from 'react';

type UseCountUp = () => {
  count: number;
  onClickCountUp: () => void;
};

export const useCountUp: UseCountUp = () => {
  const [count, setCount] = useState(0); //関数コンポーネント内にしかuseStateは使えない

  const onClickCountUp = () => {
    setCount((prevState) => prevState + 1);
  };
  return { count, onClickCountUp };
};
