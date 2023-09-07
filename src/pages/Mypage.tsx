import { styled } from 'styled-components';
import StudentInfo from '../components/mypage/StudentInfo';
// import UserDetailInfo from '../components/mypage/UserDetailInfo';

const MyPage = () => {
  return (
    <Container>
      <StudentInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 80vw;
`;

export default MyPage;
