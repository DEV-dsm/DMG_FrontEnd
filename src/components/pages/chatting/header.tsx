import React from 'react';
import styled from 'styled-components';
import { Images } from '../../../assets/mypage';
import { ChattingImages } from '../../../assets/chatting';
import { useForm } from '../../hooks/useForm';
import { CommonImages } from '../../../assets/common';

const Header = () => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    search: '',
  });
  const { search } = signForm;

  return (
    <>
      <Container>
        <Wrapper>
          <LeftWrapper>
            <Img style={{ width: '40px' }} src={Images.defaultProfile} alt="" />

            <TextWrapper>
              <Text>{`성이름`}</Text>
              <Img src={ChattingImages.offline} alt="" />
            </TextWrapper>
          </LeftWrapper>

          <RightWrapper>
            <InputWrapper>
              <Input
                type="text"
                name="search"
                value={search}
                onChange={signFormChange}
                placeholder="Search"
              />

              <Btn onClick={() => {}}>
                <Img style={{ width: '16px' }} src={CommonImages.searchIcon} alt="" />
              </Btn>
            </InputWrapper>

            <Btn onClick={() => {}}>
              <Img style={{ width: '24px' }} src={ChattingImages.setting} alt="" />
            </Btn>
          </RightWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  padding: 16px 20px;
  width: 100%;
  border-bottom: 1px solid #393939;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Img = styled.img``;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Text = styled.div`
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 700;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const InputWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #393939;
`;

const Input = styled.input`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const Btn = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
`;
