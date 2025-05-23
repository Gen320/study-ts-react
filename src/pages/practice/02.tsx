import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTextHidden } from '@/hooks/useTextHidden';

const Page: NextPage = () => {
  const { isHidden, handleClickIndicate, handleClickHidden } = useTextHidden();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {!isHidden && <h2 className="mb-4 text-6xl">こんにちは</h2>}
          <div className="flex justify-center gap-x-4">
            <Button label="表示" variant="primary" onClick={handleClickIndicate} />
            <Button label="非表示" variant="primary" onClick={handleClickHidden} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
