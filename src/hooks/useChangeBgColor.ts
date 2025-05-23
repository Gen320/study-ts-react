import { useState } from 'react';

type UseChangeBgColor = () => {
  currentColorIndex: number;
  changeColor: () => void;
};

export const COLORS = [
  'black',
  'white',
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'pink',
  'brown',
  'gray',
  'cyan',
  'magenta',
  'lime',
  'teal',
  'navy',
  'maroon',
  'olive',
  'silver',
  'gold',
  'indigo',
  'violet',
  'turquoise',
  'beige',
  'coral',
  'crimson',
  'darkblue',
  'darkgreen',
  'darkred',
  'lightblue',
  'lightgreen',
  'lightgray',
  'skyblue',
  'salmon',
  'chocolate',
]; //定数なのでグローバルに定義

export const UseChangeBgColor: UseChangeBgColor = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  return {
    currentColorIndex,
    changeColor,
  };
};
