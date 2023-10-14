import React from 'react';
import styled from 'styled-components';

type inputType = 'text' | 'password' | 'number';

interface inputPropsType {
  name: string;
  value: string | number;
  type?: inputType;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ name, value, type = 'text', placeholder, onChange }: inputPropsType) {
  return (
    <InputStyle
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

const InputStyle = styled.input`
  width: 100%;
  background: #f5f5f7;
  border: none;
  outline: none;
  padding: 10px 20px;

  &::placeholder {
    color: #c4c4c4;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;
