import { styled } from 'styled-components';
import { ChangeEvent } from 'react';

interface IPropsInputType {
  type: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ ...props }: IPropsInputType) => {
  return <InputContainer {...props} />;
};

const InputContainer = styled.input`
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

export default Input;
