import styled from 'styled-components';
import * as S from '../components/auth/style';
import { useState } from 'react';
import BeforeCheck from '../assets/auth/beforeCheck.png';
import ClickCheck from '../assets/auth/clickCheck.png';
import { AuthFindPW } from '../constants';

const FindPWPage = () => {
  // 변수 선언
  let check: boolean = true;

  // input 변수
  const [inputs, setInputs] = useState({
    email: '',
    number: '',
  });
  const { email, number } = inputs;

  const onChange = (e: any): void => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 인증번호 버튼 클릭했을 때
  const sendNumber = () => {};

  // 비밀번호 찾기 버튼 눌렀을 때
  const findPW = () => {};

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Find Password</S.Title>
        <InputContainer>
          <Input onChange={onChange} name="email" value={email} type="text" placeholder="Email" />
          <div>
            <Input
              onChange={onChange}
              name="number"
              value={number}
              type="text"
              placeholder="Auth Number"
            />

            <button onClick={sendNumber} style={{ background: 'transparent' }}>
              <Img src={BeforeCheck} />
            </button>
          </div>
        </InputContainer>

        <Btn onClick={findPW}>
          FIND
          <Img src={ClickCheck} />
        </Btn>
      </S.Container>
    </S.Wrapper>
  );
};

export default FindPWPage;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Input = styled.input`
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

  ::placeholder {
    color: #c4c4c4;
  }
`;

const Img = styled.img`
  width: 20px;
`;

const Btn = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 32px;
  background: #ffffff;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 700;
  gap: 10px;
  padding: 14px 64px;
`;
