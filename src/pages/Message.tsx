import styled from 'styled-components';
import { useForm } from '../components/hooks/useForm';
import { CommonImages } from '../assets/common';
import Input from '../components/pages/message/input';
import { useGetChatRoomList } from '../utils/api/chat';
import { MessageRow } from '../components/pages/message/MesssageRow';
import { useNavigate } from 'react-router-dom';

interface propsType {
  display?: boolean | undefined;
}

export default function MessagePage({ display = true }: propsType) {
  const navigate = useNavigate();

  const { form: signForm, handleChange: signFormChange } = useForm({
    search: '',
  });
  const { search } = signForm;

  const {
    data: chatRoomListData,
    isLoading: chatRoomListLoading,
    isError: chatRoomListError,
  } = useGetChatRoomList();

  return (
    <>
      <Container display={display}>
        <Wrapper>
          <Header>
            <InputWrapper>
              <Input
                type="text"
                name="search"
                value={search}
                placeholder="Search"
                onChange={signFormChange}
              />

              <Img src={CommonImages.searchIcon} alt="" />
            </InputWrapper>
          </Header>

          <MessageListWrapper>
            {chatRoomListLoading && <div>Loading...</div>}
            {chatRoomListError && <div>Error</div>}
            {chatRoomListData && (
              <>
                {chatRoomListData.data?.map((v, i) => (
                  <MessageRow data={v} i={i} onClick={() => navigate(`/message/${v.groupID}`)} />
                ))}
              </>
            )}
          </MessageListWrapper>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div<{ display: boolean | undefined }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  /* display: flex; */
  width: 30vw;
  background-color: #f5f5f7;
  border-right: 1px;
  border-style: solid;
  border-color: #393939;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
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

const MessageListWrapper = styled.div`
  padding-left: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
