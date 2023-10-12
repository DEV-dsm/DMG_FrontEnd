import { styled } from 'styled-components';
import StudentInfo from '../components/mypage/StudentInfo';
import UserDetailInfo from '../components/mypage/UserDetailInfo';

const MyPage = () => {
  return (
    <Wrapper>
      <UserInfoWrapper>
        <StudentInfo />
      </UserInfoWrapper>
      <UserContainer>
        <UserDetailInfo />
      </UserContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 80vw;
`;

const UserInfoWrapper = styled.div`
  width: 30vw;
`;

const UserContainer = styled.div`
  width: 50vw;
`;

export default MyPage;
