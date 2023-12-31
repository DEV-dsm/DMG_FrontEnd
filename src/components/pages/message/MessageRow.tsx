import { useEffect } from 'react';
import styled from 'styled-components';
import { CommonImages } from '../../../assets/common';
import { chatRoomResponse } from '../../../models/MessageList';

interface propsType {
  width?: string;
  data: chatRoomResponse;
  i: number;
  onClick: () => void;
}

export const MessageRow = ({ width = '100%', data, i, onClick }: propsType) => {
  return (
    <Container width={width} key={i} onClick={onClick}>
      <LeftWrapper>
        <Img src={data.profile ? data.profile : CommonImages.logo1} />

        <div>
          <UserName>{data?.name}</UserName>
          <Body>{data?.body}</Body>
        </div>
      </LeftWrapper>
    </Container>
  );
};

const Container = styled.div<{
  width: string;
}>`
  width: ${({ width }) => width};
  display: inline-flex;
  justify-content: space-between;
  padding: 15px 30px 15px 20px;
  align-items: center;

  &:hover {
    border-radius: 20px 0px 0px 20px;
    background: #ffffff;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 50px;
`;

const UserName = styled.div`
  margin-bottom: 5px;
  font-family: Noto Sans;
  font-size: 20px;
  font-weight: 600;
`;

const Body = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  color: #393939;
`;
