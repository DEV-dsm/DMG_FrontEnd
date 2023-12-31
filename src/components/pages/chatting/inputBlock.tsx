import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ChattingImages } from '../../../assets/chatting';
import { useForm } from '../../hooks/useForm';

interface propsType {
  display: boolean;
}

export const InputBlock = ({ display }: propsType) => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    text: '',
  });
  const { text } = signForm;

  return (
    <Container display={display}>
      <InputWrapper>
        <Input
          type="text"
          name="text"
          value={text}
          onChange={signFormChange}
          placeholder="메시지를 입력해 주세요."
        />

        <Btn onClick={() => {}}>
          <Img src={ChattingImages.fileUpload} />
        </Btn>
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  padding: 16px 30px;
  width: 100%;
`;

const Img = styled.img``;

const InputWrapper = styled.div`
  padding: 10px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #f5f5f7;
  border-radius: 100px;
`;

const Input = styled.input`
  width: 90%;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  background: transparent;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const Btn = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
`;
