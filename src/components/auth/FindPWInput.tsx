import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { findPwInputsAtom } from '../../atom/authAtom';
import { FindPW } from '../../constants';
import { LoginInputDataType } from '../../models/auth';
import AuthInput from '../common/AuthInput';

const FindPWInput = () => {
  const [inputs, setInputs] = useRecoilState(findPwInputsAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <InputContainer>
      {FindPW.map((item: LoginInputDataType, index: number) => (
        <div key={index}>
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

export default FindPWInput;
