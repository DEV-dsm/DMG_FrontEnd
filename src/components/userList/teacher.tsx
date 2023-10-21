import React, { useState } from 'react';
import styled from 'styled-components';
import { teacherListType } from '../../models/userList';
import { Images } from '../../assets/mypage/index';
import { CommonImages } from '../../assets/common';

const TeacherList = () => {
  const data = [ // 임시 데이터
    {
      userID: 1,
      name: '가나다',
      subject: '담당 과목',
      profile: '프로필사진 파일 경로',
    },
    {
      userID: 2,
      name: '이름',
      subject: '담당 과목',
      profile: '프로필사진 파일 경로',
    },
    {
      userID: 3,
      name: '이름',
      subject: '담당 과목',
      profile: '프로필사진 파일 경로',
    },
  ];

  return (
    <Container>
      {data.map((value, index) => (
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
  width: 605px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 15px 30px 15px 20px;
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
  font-size: 20px;
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
