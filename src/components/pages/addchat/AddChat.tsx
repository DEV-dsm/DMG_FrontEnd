import StudentList from '../userList/StudentList';
import TeacherList from '../userList/TeacherList';
import styled from 'styled-components';
import Input from '../../common/Input';
import { useDropdown } from '../../hooks/useDropdown';
import { useForm } from '../../hooks/useForm';
import React, { useState } from 'react';

const AddChat = () => {
  const [activeButton, setActiveButton] = useState<string>('student');
  const { form: signForm, handleChange: signFormChange } = useForm({
    search: '',
  });
  const { search } = signForm;

  const { form, onChange } = useDropdown(['학번', '이름']);

  const handleDropdownChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    onChange(index, newValue);
  };

  const showStudent = () => {
    setActiveButton('student');
  };

  const showTeacher = () => {
    setActiveButton('teacher');
  };

  return (
    <>
      <Wrapper>
        <UserListWrapper>
          <HeaderWrapper>
            <Container>
              <Title>Profiles</Title>

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
          {activeButton === 'student' ? <StudentList /> : null}
          {activeButton === 'teacher' ? <TeacherList /> : null}
        </UserListWrapper>
      </Wrapper>
    </>
  );
};

export default AddChat;

const Wrapper = styled.div`
  display: flex;
  width: 30vw;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid #393939;
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
