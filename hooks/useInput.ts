import { SetStateAction } from 'react';
import { useState } from 'react';

export const useInput = (
  initialState: string,
): [string, (value: SetStateAction<string>) => void, (e: React.ChangeEvent<HTMLInputElement>) => void, boolean] => {
  const [value, setValue] = useState(initialState);
  const [isValid, setIsValid] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    setIsValid(!!value);
  };

  return [value, setValue, onChange, isValid];
};
