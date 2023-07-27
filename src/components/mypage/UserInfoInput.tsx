import React, { useState } from "react";
import { UserInfo } from "../../contanse";
import { IUserInfoType, UserInfoInputType } from "../../types/mypage";
import styled from "styled-components";

const UserInfoInput = () => {
  const [input, setInput] = useState<UserInfoInputType>({
    Identity: 2110,
    Name: "서유정",
    Number: 2110,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name as keyof UserInfoInputType]: value,
    });
  };

  return (
    <Container>
      {UserInfo.map((item: IUserInfoType, index: number) => (
        <Inputwrapper key={index}>
          <InputName htmlFor={item.name}>{item.name}</InputName>
          <Input
            type="text"
            value={input[item.name as keyof UserInfoInputType]}
            name={item.name}
            onChange={(e) => onChange(e)}
          />
        </Inputwrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Inputwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputName = styled.label`
  color: #000;
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 380px;
  height: 35px;
  background: #f5f5f7;
  border: none;
  outline: none;
  padding: 0 12px;
`;

export default UserInfoInput;
