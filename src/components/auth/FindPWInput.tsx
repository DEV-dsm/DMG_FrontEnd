import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { findPwInputsAtom } from '../../atom/authAtom';
import { FindPW } from '../../constants';
import { LoginInputDataType, findPWInputType } from '../../models/auth';
import AuthInput from '../common/AuthInput';
import { useEmail } from '../hooks/useEmail';
import { toast } from 'react-hot-toast';

const FindPWInput = () => {
  const [inputs, setInputs] = useRecoilState<findPWInputType>(findPwInputsAtom);

  const inputsData = useRecoilValue(findPwInputsAtom);
  const { mutate } = useEmail(inputsData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    if (!inputs.email) {
      toast.error('이메일을 입력해주세요.', { duration: 1500 });
      return;
    }
    mutate();
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
          {item.buttonCheck && <Button onClick={() => handleButtonClick()}>Send</Button>}
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
  position: relative;
`;

const Button = styled.button`
  width: 10%;
  height: 30px;
  border-radius: 32px;
  background: #ffffff;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  gap: 10px;
  padding: 14px 32px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default FindPWInput;
