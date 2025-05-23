import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useDisplayFeedback } from '@/hooks/useDisplayfeedBack';

const Page: NextPage = () => {
  const { inputValue, feedbackList, handleInput, handleSubmit } = useDisplayFeedback();

  return (
    <div className="mx-auto max-w-4xl pt-8 ">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border p-3"
            placeholder="フィールドバックを入力してください"
            value={inputValue}
            onChange={handleInput}
          ></textarea>
          <div className="mt-4 flex justify-center">
            <Button label="送信する" variant="primary" onClick={handleSubmit} />
          </div>
          <div className="mt-2">
            {feedbackList.map((feedback, index) => {
              //第二引数にからなずkeyになるものを指定する
              return <li key={index}>{feedback}</li>;
            })}
            {/* 上記と同じ処理をする
            {feedbackList.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
