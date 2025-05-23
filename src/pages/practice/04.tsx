import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';

const COLORS = [
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

const Page: NextPage = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    setCurrentColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  return (
    <div className="h-screen pt-8" style={{ backgroundColor: COLORS[currentColorIndex] }}>
      <div className="flex justify-center">
        <Button onClick={changeColor} label="色を変更" variant="primary" />
      </div>
    </div>
  );
};

export default Page;
