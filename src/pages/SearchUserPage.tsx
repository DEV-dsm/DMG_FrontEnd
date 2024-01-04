import StudentUserDetailInfo from '../components/pages/mypage/student/StudentUserDetailInfo';
import SearchUser from '../components/pages/searchUser/SearchUser';
import styled from 'styled-components';
import instance from '../utils/axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchedUsersState } from '../atom/ListAtom';
import { GetStudentList } from '../utils/api/auth/page';
import { IsearchUserDataTypeDTO } from '../models/userList';
import SearchUserInfo from '../components/pages/mypage/student/SearchUserInfo';

const SearchUserPage = () => {
  const [clickedIndex, setClickedIndex] = useState<number>(-1);
  const [selectedUser, setSelectedUser] = useState<IsearchUserDataTypeDTO[]>([]);
  const searchUsers = useRecoilValue(searchedUsersState);
  const { data: studentUserLists } = GetStudentList();

  const handleItemClick = async (index: number) => {
    setClickedIndex(index === clickedIndex ? -1 : index);
    const selectedUserId =
      searchUsers?.length > 0
        ? searchUsers[index]?.user_userID
        : studentUserLists[index]?.qb_userID;
    instance.get(`/profile/student/${selectedUserId}`).then((response) => {
      setSelectedUser(response.data?.data);
    });
  };
  return (
    <Wrapper>
      <UserInfoWrapper>
        <SearchUser
          clickedIndex={clickedIndex}
          setClickedIndex={setClickedIndex}
          selectedUser={selectedUser}
          handleItemClick={handleItemClick}
          studentUserLists={studentUserLists}
        />
      </UserInfoWrapper>
      <UserContainer>
        <SearchUserInfo selectedUser={selectedUser} />
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

export default SearchUserPage;
