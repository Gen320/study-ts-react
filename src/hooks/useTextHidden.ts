import { useState } from 'react';

type UseTextHidden = () => {
  isHidden: boolean;
  handleClickIndicate: () => void;
  handleClickHidden: () => void;
};

export const useTextHidden: UseTextHidden = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClickIndicate = () => {
    setIsHidden(false);
  };

  const handleClickHidden = () => {
    setIsHidden(true);
  };

  return { isHidden, handleClickIndicate, handleClickHidden };
};
