import { ChangeEvent, useState } from 'react';

type UseDisplayFeedback = () => {
  inputValue: string;
  feedbackList: string[];
  handleInput: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const useDisplayFeedback: UseDisplayFeedback = () => {
  const [inputValue, setInputValue] = useState('');
  const [feedbackList, setFeedBackList] = useState<string[]>([]);
  //基本的にはuseStateだと初期値から推論されるので型を指定しておかないが、配列だと配列内部の型を推論できないので型を指定する

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return; //早期リターン = 何もしない
    }
    setFeedBackList((prev) => [...prev, inputValue]);
    setInputValue('');
  };

  return {
    inputValue,
    feedbackList,
    handleInput,
    handleSubmit,
  };
};
