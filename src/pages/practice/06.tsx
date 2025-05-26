import { NextPage } from 'next';

import { useCelsiusToFhahrenheit } from '@/hooks/useCelsiusToFhahrenheit';

const Page: NextPage = () => {
  const { celsius, convertFromCelsToFahrenheit, handleChange } = useCelsiusToFhahrenheit();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="mb-2 flex items-center gap-x-2">
            <label htmlFor="celsius">摂氏温度: {celsius}</label>
            <input
              className="rounded-md border px-2 py-1 outline-none"
              id="celsius"
              type="number"
              onChange={handleChange}
            />{' '}
            {/* htmlForとidは連動する */}
          </div>
          <p>華氏温度: {convertFromCelsToFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
