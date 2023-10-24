import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { loginInputsAtom } from '../../atom/authAtom';
import { ILoginInputDataType, LoginInputType } from '../../models/auth';
import { AuthLogin } from '../../constants';
import AuthInput from '../../components/common/AuthInput';

const LoginInput = () => {
  const [inputs, setInputs] = useRecoilState<LoginInputType>(loginInputsAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <InputContainer>
      {AuthLogin.map((item: ILoginInputDataType, index: number) => (
        <div key={index}>
          <AuthInput
            type="text"
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) => onChange(e)}
            required
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
