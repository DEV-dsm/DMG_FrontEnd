import styled from 'styled-components';
import { ChangeEvent } from 'react';

interface AuthInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder: string;
}

const AuthInput = ({ ...props }: AuthInputProps) => {
  return <InputContainer {...props} />;
};

const InputContainer = styled.input`
  padding: 10px 0;
  width: 340px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #fff;
  background: transparent;

  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;

  &::placeholder {
    color: #c4c4c4;
  }
`;

export default AuthInput;
