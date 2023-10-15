import React from 'react';
import styled from 'styled-components';
import { useForm } from '../components/hooks/useForm';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Inquire = () => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    title: '',
    content: '',
  });
  const { title, content } = signForm;

  const submit = () => {};

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
              value={title}
              placeholder="문의 제목을 입력해 주세요."
              onChange={signFormChange}
            />
          </InputWrapper>

          <InputWrapper>
            <Title>
              문의할 내용을 요약해서 적어주세요. <Highlight>*</Highlight>
            </Title>

            <Input
              type="text"
              name="content"
              value={content}
              placeholder="문의 내용을 입력해 주세요."
              onChange={signFormChange}
            />
          </InputWrapper>

          <Button text="Submit" width={18} onClick={submit} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Inquire;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 60%;
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
const Highlight = styled.div`
  margin-left: 5px;
  font-size: 28px;
  font-weight: 700;
  color: #d92b35;
`;
