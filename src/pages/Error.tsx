import React from 'react';
import styled from 'styled-components';
import sadFace from '../assets/sadFace.png';

const Error = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Text style={{ fontSize: '92px', fontWeight: 700 }}>404</Text>
            <Text style={{ fontSize: '36px', fontWeight: 600 }}>PAGE NOT FOUND</Text>
          </Header>

          <Img src={sadFace} />

          <TextWrapper>
            <Text style={{ fontSize: '32px', fontWeight: 400 }}>
              요청하신 페이지를 찾을 수 없습니다.
            </Text>
            <Text style={{ fontSize: '32px', fontWeight: 400 }}>
              Unable to find pages you reaurested.
            </Text>
          </TextWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393939;
`;

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  height: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border-radius: 16px;
  background: #fff;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-family: Inter;
`;

const Img = styled.img`
  width: 25%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Error;
