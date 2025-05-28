import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTimer } from '@/hooks/useTimer';

export const Page: NextPage = () => {
  const { seconds, isActive, handleClickToggle, handleClickReset } = useTimer();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">時間: {seconds}秒</h3>
          <div className="mt-4 flex gap-x-2 ">
            <Button
              label={!isActive ? '開始' : '停止'}
              variant="primary"
              onClick={handleClickToggle}
            />
            <Button label="リセット" variant="secondary" onClick={handleClickReset} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
