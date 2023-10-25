import { useCallback, useState } from 'react';

export const useDropdown = <T extends string[]>(initialForm: T) => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback(
    (index: number, value: string) => {
      const copy = [...form];
      copy[index] = value;
      setForm(copy as T);
    },
    [form]
  );

  return { form, onChange, setForm };
};
