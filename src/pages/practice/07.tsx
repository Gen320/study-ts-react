import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { CHOICES, QUESTION, useQuiz } from '@/hooks/useQuiz';

const Page: NextPage = () => {
  const { handleChoise, handleSubmit, result, userChoise } = useQuiz();
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-2x1 text-center">{QUESTION}</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            {/* onClickは引数にイベントを受け取る */}
            {CHOICES.map((choice, index) => (
              <Button
                onClick={() => handleChoise(choice)}
                label={choice}
                variant="secondary"
                className={`${userChoise === choice && 'bg-black'}`}
                key={index}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <Button label="送信" variant="primary" onClick={handleSubmit} />
          </div>
          <h3 className="text-4x1 mt-8 text-center">{result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
