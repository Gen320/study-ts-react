import { NextPage } from 'next';

import { useRealTimeText } from '@/hooks/useRealTimeText';

const Page: NextPage = () => {
  const { text, handleChangeText } = useRealTimeText();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h2 className="mb-4 text-center text-6xl">{text}</h2>
          <input onChange={handleChangeText} className="border px-4 py-2" type="text" />{' '}
          {/*onChangeは引数にeventを持つ*/}
        </div>
      </div>
    </div>
  );
};

export default Page;
