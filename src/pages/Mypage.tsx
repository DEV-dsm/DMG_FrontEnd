import { styled } from 'styled-components';
import StudentInfo from '../components/common/StudentInfo';
import UserDetailInfo from '../components/mypage/UserDetailInfo';

const MyPage = () => {
  return (
    <Container>
      <StudentInfo />
      <UserDetailInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default MyPage;
