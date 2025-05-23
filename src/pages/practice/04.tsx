import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { COLORS, UseChangeBgColor } from '@/hooks/useChangeBgColor';

// const COLORS = [
//   'black',
//   'white',
//   'red',
//   'green',
//   'blue',
//   'yellow',
//   'purple',
//   'orange',
//   'pink',
//   'brown',
//   'gray',
//   'cyan',
//   'magenta',
//   'lime',
//   'teal',
//   'navy',
//   'maroon',
//   'olive',
//   'silver',
//   'gold',
//   'indigo',
//   'violet',
//   'turquoise',
//   'beige',
//   'coral',
//   'crimson',
//   'darkblue',
//   'darkgreen',
//   'darkred',
//   'lightblue',
//   'lightgreen',
//   'lightgray',
//   'skyblue',
//   'salmon',
//   'chocolate',
// ]; //定数なのでグローバルに定義

const Page: NextPage = () => {
  const { currentColorIndex, changeColor } = UseChangeBgColor();

  return (
    <div className="h-screen pt-8" style={{ backgroundColor: COLORS[currentColorIndex] }}>
      <div className="flex justify-center">
        <Button onClick={changeColor} label="色を変更" variant="primary" />
      </div>
    </div>
  );
};

export default Page;
