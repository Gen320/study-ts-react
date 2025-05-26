import { ChangeEvent, useState } from 'react';

type UseCelsiusToFhahrenheit = () => {
  celsius: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  convertFromCelsToFahrenheit: (celsius: number) => number;
};

export const useCelsiusToFhahrenheit: UseCelsiusToFhahrenheit = () => {
  const [celsius, setCelsius] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value)); //inputはtypeにかかわらずstring型で渡される
  };

  const convertFromCelsToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 7;
  };

  return {
    celsius,
    handleChange,
    convertFromCelsToFahrenheit,
  };
};
