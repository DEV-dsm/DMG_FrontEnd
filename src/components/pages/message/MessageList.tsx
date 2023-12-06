import styled from 'styled-components';
import { Images } from '../../../assets/mypage/index';
import { CommonImages } from '../../../assets/common';

const MessageList = () => {
  const data = [
    // 임시 데이터
    {
      userID: 1,
      name: '가나다',
      body: '안녕하세요.안녕하세요.안녕하세요.',
    },
    {
      userID: 2,
      name: '이름',
      body: '안녕하세요.안녕하세요.안녕하세요.',
    },
    {
      userID: 3,
      name: '이름',
      body: '안녕하세요.안녕하세요.안녕하세요.',
    },
  ];

  return (
    <Container>
      {data.map((value, index) => (
        <Wrapper key={index}>
          <LeftWrapper>
            <Img src={CommonImages.logo1} />

            <div>
              <UserName>{value.name}</UserName>
              <Body>{value.body}</Body>
            </div>
          </LeftWrapper>
        </Wrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-left: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
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

export default MessageList;
