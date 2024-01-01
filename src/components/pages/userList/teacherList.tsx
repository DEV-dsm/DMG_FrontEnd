import { styled } from 'styled-components';
import { Images } from '../../../assets/mypage/index';
import { CommonImages } from '../../../assets/common';
import { GetTeacherList } from '../../../utils/api/auth/page';
import { TeacherListType } from '../../../models/userList';
import { IsearchResponseDataProps } from '../../../models/userList';
import { useState } from 'react';
import instance from '../../../utils/axios';

interface IProps {
  onSearchUsers: IsearchResponseDataProps['data'];
  onKeyword: string;
}

const TeacherList = ({ onSearchUsers, onKeyword }: IProps) => {
  const { data: teacherUserLists } = GetTeacherList();
  const [clickedIndex, setClickedIndex] = useState<number>(-1);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleItemClick = async (index: number) => {
    setClickedIndex(index === clickedIndex ? -1 : index);
    const selectedUserId =
      onSearchUsers?.length > 0
        ? onSearchUsers[index]?.user_userID
        : teacherUserLists[index]?.qb_userID;
    try {
      const response = await instance.get(`/profile/student/${selectedUserId}`);
      setSelectedUser(response.data?.data);
    } catch (e) {
      console.log(e);
      setSelectedUser(null);
    }
  };
  return (
    <Container>
      {onKeyword.trim() !== ''
        ? onSearchUsers.map((value: any, index: number) => (
            <Wrapper
              key={index}
              onClick={() => handleItemClick(index)}
              isActive={index === clickedIndex}
            >
              <LeftWrapper>
                <Img src={value.profile ?? Images.defaultProfile} />
                <div>
                  <UserName>{value.name}</UserName>
                  <Number>{value.subject}</Number>
                </div>
              </LeftWrapper>
              <Btn>
                <Img src={CommonImages.logo1} style={{ width: '40px' }} />
              </Btn>
            </Wrapper>
          ))
        : teacherUserLists?.map((value: TeacherListType, index: number) => (
            <Wrapper
              key={index}
              onClick={() => handleItemClick(index)}
              isActive={index === clickedIndex}
            >
              <LeftWrapper>
                <Img src={value.profile ?? Images.defaultProfile} />
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
  padding-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  padding: 15px 25px 10px 15px;
  align-items: center;

  &:hover {
    border-radius: 20px 0px 0px 20px;
    background: #ececef;
  }
  ${(props) =>
    props.isActive &&
    `
    border-radius: 20px 0px 0px 20px;
    background: #ececef;
  `}
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
