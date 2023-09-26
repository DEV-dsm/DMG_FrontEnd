import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';
import { ChangeEvent } from 'react';

import { LoginInputAtom } from '../../atom/authAtom';
import { LoginInputDataType, LoginInputType } from '../../models/Login';
import { AuthLogin } from '../../constants';
import AuthInput from '../../components/common/AuthInput';

const LoginInput = () => {
  const [inputs, setInputs] = useRecoilState<LoginInputType>(LoginInputAtom);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <InputContainer>
      {AuthLogin.map((item: LoginInputDataType) => (
        <div key={item.name}>
          <AuthInput
            type="text"
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
          />
        </div>
      ))}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default LoginInput;
