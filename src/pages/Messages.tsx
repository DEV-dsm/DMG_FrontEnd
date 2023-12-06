import React from 'react';
import styled from 'styled-components';
import { useForm } from '../components/hooks/useForm';
import MessageInput from '../components/message/input';
import MessageList from '../components/message/MessageList';
import { CommonImages } from '../assets/common';

function Messages() {
  const { form: signForm, handleChange: signFormChange } = useForm({
    search: '',
  });
  const { search } = signForm;

  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <InputWrapper>
              <MessageInput
                type="text"
                name="search"
                value={search}
                placeholder="Search"
                onChange={signFormChange}
              />
              <Img src={CommonImages.searchIcon} alt="" />
            </InputWrapper>
          </Header>

          <MessageList />
        </Wrapper>
      </Container>
    </>
  );
}

export default Messages;

const Container = styled.div`
  display: flex;
  width: 30vw;
  background-color: #f5f5f7;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  border-right: 1px;
  border-style: solid;
  border-color: #393939;
`;

const Header = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 400px;
  padding: 0 10px 0 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
`;

const Img = styled.img`
  width: 20px;
`;
