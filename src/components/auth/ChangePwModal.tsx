import React, { useState } from 'react';
import styled from 'styled-components';
import { IChangePwInputModalType } from '../../models/auth';
import Input from '../common/Input';
import InfoButton from '../common/InfoButton';
import { useChangePw } from '../hooks/apis/useChangePw';

interface ChangePwModalProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChangePwModal = ({ setIsActive }: ChangePwModalProps) => {
  const [inputs, setInputs] = useState<IChangePwInputModalType>({
    password: '',
    newPassword: '',
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { mutate } = useChangePw(inputs.password, inputs.newPassword);

  return (
    <Wrapper onClick={() => setIsActive(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>비밀번호 변경</Title>
        <Input
          type="text"
          placeholder="기존 비밀번호를 입력해 주세요."
          id="password"
          name="password"
          onChange={(e) => inputChange(e)}
        />
        <Input
          type="text"
          placeholder="새로운 비밀번호를 입력해 주세요."
          id="password"
          name="newPassword"
          onChange={(e) => inputChange(e)}
        />
        <InfoButton text="변경하기" width="40%" onClick={mutate} />
      </Container>
    </Wrapper>
  );
};

export default ChangePwModal;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(224, 224, 224, 0.5);
`;

const Container = styled.div`
  width: 500px;
  padding: 40px;
  height: 260px;
  border-radius: 16px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
`;
