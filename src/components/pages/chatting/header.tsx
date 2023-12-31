import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Images } from '../../../assets/mypage';
import { ChattingImages } from '../../../assets/chatting';
import { useForm } from '../../hooks/useForm';
import { CommonImages } from '../../../assets/common';
import { chatRoomInfoResponse } from '../../../models/ChatRoomInfo';

interface propsType {
  data: chatRoomInfoResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ data, isLoading, isError, click, setClick }: propsType) => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    search: '',
  });
  const { search } = signForm;

  return (
    <Container>
      <Wrapper>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {data && (
          <LeftWrapper>
            <Img
              style={{ width: '40px' }}
              src={data.thisGroup.profile ? data.thisGroup.profile : CommonImages.logo1}
              alt=""
            />
            <Text>{data?.thisGroup.name}</Text>
          </LeftWrapper>
        )}

        <RightWrapper>
          <InputWrapper click={click}>
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

          <Btn onClick={() => setClick(!click)}>
            <Img style={{ width: '24px' }} src={ChattingImages.setting} alt="" />
          </Btn>
        </RightWrapper>
      </Wrapper>
    </Container>
  );
};

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
  align-items: center;
  gap: 15px;
`;

const Img = styled.img`
  width: 70px;
`;

const Text = styled.div`
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 700;
`;

const RightWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const InputWrapper = styled.div<{ click: boolean }>`
  width: 300px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #393939;
  visibility: ${({ click }) => (click ? 'visible' : 'hidden')};
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
