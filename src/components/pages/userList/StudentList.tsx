import styled from 'styled-components';
import { Images } from '../../../assets/mypage/index';
import { CommonImages } from '../../../assets/common';
import { useState } from 'react';
import { useQuery } from 'react-query';
import instance from '../../../utils/axios';
import { StudentListType } from '../../../models/userList';

const StudentList = () => {
  const [userList, setUserList] = useState([]);

  const {
    data: studentUserLists,
    isLoading,
    isError,
  } = useQuery(['getStduentUserLists'], async () => {
    const response = await instance.get('/profile/student');
    return response.data.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <Container>
      {studentUserLists?.map((value: StudentListType, index: number) => (
        <Wrapper key={index}>
          <LeftWrapper>
            <Img src={value.profile || Images.defaultProfile} />

            <div>
              <UserName>{value.name}</UserName>
              <Number>{value.number}</Number>
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
  padding-left: 10px;
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

export default StudentList;
