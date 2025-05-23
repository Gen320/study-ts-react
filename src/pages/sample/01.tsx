import { NextPage } from 'next';

import ThreeBoxContent from '@/components/ThreeBoxXontent';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <ThreeBoxContent
        title1="これはタイトルです"
        content1="これはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツです"
        title2="これはタイトルです"
        content2="これはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツです"
        title3="これはタイトルです"
        content3="これはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツです"
      />
      {/* 上記と同じ書き方
        {ThreeBoxContent({
        title1: 'これはタイトルです',
        content1:
          'これはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツです',
        title2: 'これはタイトルです',
        content2:
          'これはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツです',
        title3: 'これはタイトルです',
        content3:
          'これはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツですこれはコンテンツです',
      })} */}
    </div>
  );
};

export default Page;
