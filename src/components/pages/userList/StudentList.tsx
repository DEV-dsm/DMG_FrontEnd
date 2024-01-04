import styled from 'styled-components';
import { Images } from '../../../assets/mypage/index';
import { CommonImages } from '../../../assets/common';
import { useEffect } from 'react';
import { IsearchUserDataTypeDTO, StudentListType } from '../../../models/userList';
import { IsearchResponseDataProps } from '../../../models/userList';

interface IProps {
  onSearchUsers: IsearchResponseDataProps['data'];
  onKeyword: string;
  clickedIndex: number;
  setClickedIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedUser: IsearchUserDataTypeDTO[];
  handleItemClick: (index: number) => void;
  studentUserLists: any;
}

const StudentList = ({
  onSearchUsers,
  onKeyword,
  handleItemClick,
  clickedIndex,
  studentUserLists,
  selectedUser,
}: IProps) => {
  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);
  return (
    <>
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
                    <Number>{value.number}</Number>
                  </div>
                </LeftWrapper>
                <Btn>
                  <Img src={CommonImages.logo1} style={{ width: '40px' }} />
                </Btn>
              </Wrapper>
            ))
          : studentUserLists?.map((value: StudentListType, index: number) => (
              <Wrapper
                key={index}
                onClick={() => handleItemClick(index)}
                isActive={index === clickedIndex}
              >
                <LeftWrapper>
                  <Img src={value.profile ?? Images.defaultProfile} />
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
    </>
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
  border-radius: 50%;
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
