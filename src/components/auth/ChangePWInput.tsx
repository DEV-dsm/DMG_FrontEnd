import styled from 'styled-components';
import { ChangePWInputs } from '@/constants';
import AuthInput from '../common/AuthInput';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { ChangePWInputType } from '@/models/auth';
import { ChangePWInputsAtom } from '@/atom/authAtom';
import Eye from './Eye';

const ChangePWInput = () => {
  const [inputs, setInputs] = useRecoilState<ChangePWInputType>(ChangePWInputsAtom);
  const [isCheckShowPassword, setIsCheckShowPassword] = useState<boolean>(false);

  const checkPasswordType = isCheckShowPassword ? 'text' : 'password';

  const getPasswordType = (name: string) => {
    switch (name) {
      case 'passwordCheck':
        return checkPasswordType;
      default:
        return 'text';
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <Container>
      {ChangePWInputs.map((item, index: number) => (
        <div key={index}>
          <AuthInput
            type={getPasswordType(item.name)}
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
          />
          {item.name === 'passwordCheck' && (
            <Eye
              onClick={() => setIsCheckShowPassword((pre) => !pre)}
              isShowPassword={isCheckShowPassword}
            />
          )}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export default ChangePWInput;
