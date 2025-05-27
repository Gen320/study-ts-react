import { NextPage } from 'next';

import { useDigitalClock } from '@/hooks/useDigitalClock';

const Page: NextPage = () => {
  const { currentTime } = useDigitalClock();

  //useEffect((第一引数に関数定義) => {
  //
  //return () => {
  //  クリーンアップ  関数の実行
  //}
  //}, [第二引数に依存配列])
  //第二引数の現在ものと前に実行されたものを比較して違えば第一引数を実行する

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{currentTime}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
