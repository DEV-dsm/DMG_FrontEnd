import { styled } from 'styled-components';
import { Images } from '../../../assets/mypage/index';
import { CommonImages } from '../../../assets/common';
import { useQuery } from 'react-query';
import instance from '../../../utils/axios';
import { TeacherListType } from '../../../models/userList';

const TeacherList = () => {
  const {
    data: teacherUserLists,
    isError,
    isLoading,
  } = useQuery(['getTeacherUserLists'], async () => {
    const response = await instance.get('/profile/teacher');
    return response.data.data;
  });

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  if (isError) {
    return <h3>오류가 발생했습니다.</h3>;
  }

  return (
    <Container>
      {teacherUserLists.map((value: TeacherListType, index: number) => (
        <Wrapper key={index}>
          <LeftWrapper>
            <Img src={Images.defaultProfile} />

            <div>
              <UserName>{value.name}</UserName>
              <Number>{value.subject}</Number>
            </div>
          </LeftWrapper>

          <Btn>
            <Img src={CommonImages.logo1} style={{ width: '40px' }} />
          </Btn>
        </Wrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-left: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 15px 25px 10px 15px;
  align-items: center;

  &:hover {
    border-radius: 20px 0px 0px 20px;
    background: #ececef;
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
  font-size: 18px;
  font-weight: 600;
`;

const Number = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  color: #393939;
`;

const Btn = styled.button`
  background-color: transparent;
`;

export default TeacherList;
