import React from 'react';
import Messages from './Messages';
import styled from 'styled-components';
import Header from '../components/chatting/header';

const ChattingPage = () => {
  return (
    <>
      <Messages />

      <Container>
        <Header />
      </Container>
    </>
  );
};

export default ChattingPage;

const Container = styled.div`
  width: 50vw;
`;
