import { styled } from 'styled-components';
import StudentInfo from '../components/pages/mypage/student/StudentInfo';
import TeacherInfo from '../components/pages/mypage/teacher/TeacherInfo';
import StudentUserDetailInfo from '../components/pages/mypage/student/StudentUserDetailInfo';
import { GetIndividualUserStudnet } from '../utils/api/auth/page';
import TeacherUserDetailInfo from '../components/pages/mypage/teacher/TeacherUserDetailInfo';

const MyPage = () => {
  const { data } = GetIndividualUserStudnet();
  return (
    <Wrapper>
      <UserInfoWrapper>{data?.isStudent ? <StudentInfo /> : <TeacherInfo />}</UserInfoWrapper>
      <UserContainer>
        {data?.isStudent ? <StudentUserDetailInfo /> : <TeacherUserDetailInfo />}
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
