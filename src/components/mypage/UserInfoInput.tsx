import { useState } from 'react';
import { UserInfo, UserInfoDetail } from '../../contanse';
import { IUserInfoDetailType } from '../../types/mypage';
import styled from 'styled-components';
import { Images } from '../../assets/mypage';

const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const UserInfoInput = () => {
  const [password, setPassword] = useState<string>('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsValidPassword(regexp.test(inputPassword));
  };

  return (
    <Container>
      {UserInfo.map((item: IUserInfoDetailType, index: number) => (
        <Inputwrapper key={index}>
          <Input type="text" name={item.name} placeholder={item.placeholder} />
        </Inputwrapper>
      ))}
      {UserInfoDetail.map((item: IUserInfoDetailType) => (
        <Inputwrapper key={item.id}>
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            name={item.name}
            placeholder={item.placeholder}
            onChange={item.name === 'Password' ? handlePasswordChange : undefined}
          />
          {item.id === 4 ? <BlackLock src={Images.blackCloseLock} alt="" /> : ''}
          {item.id === 5 ? <BlackCheck src={Images.blackBeforeCheck} alt="" /> : ''}
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            placeholder={item.placeholder1}
            onChange={item.name === 'Password' ? handlePasswordChange : undefined}
          />
          {item.id === 4 ? <BlackLock2 src={Images.blackCloseLock} alt="" /> : ''}
          {item.id === 5 ? <BlackCheck2 src={Images.blackBeforeCheck} alt="" /> : ''}
          {item.name === 'Password' && !isValidPassword && password.length > 0 && (
            <WarningMessage>
              비밀번호는 최소 8자리이며, 영문자와 숫자를 포함해야 합니다.
            </WarningMessage>
          )}
        </Inputwrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Inputwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

const WarningMessage = styled.div`
  font-size: 12px;
  color: #e22a22;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 330px;
  height: 35px;
  background: #f5f5f7;
  border: none;
  outline: none;
  padding: 0 12px;
  &::placeholder {
    color: #c4c4c4;
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`;

const CommonStyles = `
  display: flex;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 7px;
  right: 15px;
`;

const BlackLock = styled.img`
  ${CommonStyles}
`;

const BlackLock2 = styled.img`
  ${CommonStyles}
  top: 47px;
`;

const BlackCheck = styled.img`
  ${CommonStyles}
  top: 47px;
`;

const BlackCheck2 = styled.img`
  ${CommonStyles}
`;

export default UserInfoInput;
