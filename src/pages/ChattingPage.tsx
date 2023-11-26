import React from 'react';
import Messages from './Messages';
import styled from 'styled-components';
import Header from '../components/chatting/header';
import Body from '../components/chatting/body';
import InputBlock from '../components/chatting/inputBlock';

const ChattingPage = () => {
  return (
    <>
      <Messages />

      <Container>
        <Header />
        <Body />
        <InputBlock />
      </Container>
    </>
  );
};

export default ChattingPage;

const Container = styled.div`
  width: 50vw;
`;
