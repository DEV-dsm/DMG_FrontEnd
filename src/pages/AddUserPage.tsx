import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import Input from '../components/common/Input';
import { useDropdown } from '../components/hooks/useDropdown';
import { useForm } from '../components/hooks/useForm';
import instance from '../utils/axios';
import ChattingPage from './ChattingPage';
import { StudentListType, TeacherListType } from '../models/userList';
import { StudentRow } from '../components/pages/addUser/StudentRow';
import { TeacherRow } from '../components/pages/addUser/TeacherRow';
import { useParams } from 'react-router-dom';
import { useNewMember } from '../utils/api/chat';

export default function AddUserPage() {
  const [activeButton, setActiveButton] = useState<string>('student');
  const {
    form: signForm,
    setForm: setSignForm,
    handleChange: signFormChange,
  } = useForm({
    search: '',
    newUser: [],
  });
  const { search, newUser } = signForm;

  const { groupID } = useParams<{ groupID: string }>();

  const { data: studentListData } = useQuery(['getStduentUserLists'], async () => {
    const response = await instance.get('/profile/student');
    return response.data.data;
  });

  const { data: teacherListData } = useQuery(['getTeacherUserLists'], async () => {
    const response = await instance.get('/profile/teacher');
    return response.data.data;
  });

  const { form, onChange } = useDropdown(['학번', '이름']);

  const handleDropdownChange = (index: number, event: any) => {
    const newValue = event.target.value;
    onChange(index, newValue);
  };

  const showStudent = () => {
    setActiveButton('student');
  };

  const showTeacher = () => {
    setActiveButton('teacher');
  };

  const CheckBoxClick = (userId: number) => {
    setSignForm((prevForm: any) => ({
      ...prevForm,
      newUser: [...prevForm.newUser, userId],
    }));
  };

  const { mutate } = useNewMember(Number(groupID), newUser);

  return (
    <>
      <Wrapper1>
        <UserListWrapper>
          <HeaderWrapper>
            <Container>
              <BtnWrapper>
                <Title>Profiles</Title>

                <Btn2 onClick={() => mutate()}>ADD</Btn2>
              </BtnWrapper>

              <InputWrapper>
                <Select value={form[0]} onChange={(e) => handleDropdownChange(0, e)}>
                  <option value="학번">학번</option>
                  <option value="이름">이름</option>
                </Select>

                <Input
                  type="text"
                  name="search"
                  value={search}
                  placeholder="Search"
                  onChange={signFormChange}
                />

                <ButtonWrapper>
                  <Btn onClick={showTeacher} active={activeButton === 'teacher'}>
                    교사
                  </Btn>
                  <Btn onClick={showStudent} active={activeButton === 'student'}>
                    학생
                  </Btn>
                </ButtonWrapper>
              </InputWrapper>
            </Container>
          </HeaderWrapper>
          {activeButton === 'student' && (
            <ListWrapper>
              {studentListData?.map((v: StudentListType, i: number) => (
                <StudentRow key={i} data={v} checkBoxOnClick={CheckBoxClick} />
              ))}
            </ListWrapper>
          )}
          {activeButton === 'teacher' && (
            <>
              <ListWrapper>
                {teacherListData?.map((v: TeacherListType, i: number) => (
                  <TeacherRow key={i} data={v} checkBoxOnClick={CheckBoxClick} />
                ))}
              </ListWrapper>
            </>
          )}
        </UserListWrapper>
      </Wrapper1>
      <Wrapper2>
        <ChattingPage is={false} click={false} />
      </Wrapper2>
    </>
  );
}

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid #393939;
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 50%;
`;

const ListWrapper = styled.div`
  padding-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
  height: 70%;
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const UserListWrapper = styled.div`
  width: 30vw;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  margin: 108px 0 50px;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-family: Noto Sans;
  font-size: 32px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  padding: 0 10px 0 0;
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: none;
  background-color: #f5f5f7;
  border-radius: 4px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;

const Btn = styled.button<{ active: boolean }>`
  width: 52px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #393939;
  background: ${(props) => (props.active ? '#393939' : '#ffffff')};
  color: ${(props) => (props.active ? '#ffffff' : '#393939')};
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const Btn2 = styled.button`
  padding: 8px;
  background: #393939;
  color: #ffffff;
  font-weight: 600;
  border-radius: 50px;
`;

const BtnWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
