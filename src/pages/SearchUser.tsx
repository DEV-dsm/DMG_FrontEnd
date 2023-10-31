import React, { useState } from 'react';
import StudentList from '../components/userList/student';
import styled from 'styled-components';
import { useDropdown } from '../components/hooks/useDropdown';
import Input from '../components/common/Input';
import { useForm } from '../components/hooks/useForm';
import TeacherList from '../components/userList/teacher';

const SearchUser = () => {
  const { form: signForm, handleChange: signFormChange } = useForm({
    search: '',
  });
  const { search } = signForm;

  const { form, onChange } = useDropdown(['학번', '이름']);

  const handleDropdownChange = (index: number, event: any) => {
    const newValue = event.target.value;
    onChange(index, newValue);
  };

  const showStudent = () => {}; // 학생 버튼을 누르면 학생 리스트 컴포넌트 display: block (기본값: block)
  const showTeacher = () => {}; // 교사 버튼을 누르면 교사 리스트 컴포넌트 display: block (기본값: none)

  return (
    <>
      <Wrapper>
        <UserListWrapper>
          <HeaderWrapper>
            <InnerWrapper>
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

                <div style={{ display: 'flex', gap: '5px', height: '70%' }}>
                  <Btn onClick={showTeacher}>교사</Btn>
                  <Btn
                    onClick={showStudent}
                    style={{ backgroundColor: '#393939', color: '#ffffff' }}
                  >
                    학생
                  </Btn>
                </div>
              </InputWrapper>
            </InnerWrapper>
          </HeaderWrapper>

          <StudentList />
          {/* <TeacherList /> */}
        </UserListWrapper>
      </Wrapper>
    </>
  );
};

export default SearchUser;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const UserListWrapper = styled.div`
  width: 30vw;
  border-right: 1px;
  border-style: solid;
  border-color: #393939;
`;

const HeaderWrapper = styled.div`
  margin: 108px 0 50px;
  display: flex;
  justify-content: center;
`;

const InnerWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
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

const Btn = styled.button`
  width: 52px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #393939;
  background: #f5f5f7;

  color: #393939;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 600;
`;
