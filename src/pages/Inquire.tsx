import React from 'react';
import styled from 'styled-components';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { QustionInputTypeAtom } from '../atom/InquireAtom';
import { useQuestion } from '../components/hooks/apis/useQueston';

const Inquire = () => {
  const [inputs, setInputs] = useRecoilState(QustionInputTypeAtom);
  const inputData = useRecoilValue(QustionInputTypeAtom);
  const { mutate } = useQuestion(inputData);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <InputWrapper>
            <Title>
              제목 <Highlight>*</Highlight>
            </Title>
            <Input
              type="text"
              name="title"
              placeholder="문의 제목을 입력해 주세요."
              onChange={(e) => onChange(e)}
            />
          </InputWrapper>

          <InputWrapper>
            <Title>
              문의할 내용을 요약해서 적어주세요. <Highlight>*</Highlight>
            </Title>

            <TextArea
              name="content"
              placeholder="문의 내용을 입력해 주세요."
              onChange={(e) => onChange(e)}
            />
          </InputWrapper>

          <Button text="Submit" width={15} onClick={() => mutate()} />
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 100px 130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 30px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  font-size: 28px;
  font-weight: 700;
`;

const TextArea = styled.textarea`
  background: #f5f5f7;
  height: 55vh;
  border: none;
  outline: none;
  padding: 10px 20px;
  resize: none;
  &::placeholder {
    color: #c4c4c4;
    font-family: Noto Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Highlight = styled.div`
  margin-left: 5px;
  font-size: 28px;
  font-weight: 700;
  color: #d92b35;
`;

export default Inquire;
