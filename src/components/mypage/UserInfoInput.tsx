import { useState } from 'react';
import styled from 'styled-components';

import Input from '../common/Input';
import { UserInfo, UserInfoDetail } from '../../constants';
import { IUserInfoDetailType } from '../../models/Mypage';
import { Images } from '../../assets/mypage';

const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const UserInfoInput = () => {
  const [password, setPassword] = useState<string>('');
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  // 정규식 검사
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
        <DetailInputWrapper key={item.id}>
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            name={item.name}
            onChange={item.name === 'Password' ? handlePasswordChange : undefined}
            placeholder={item.placeholder}
          />
          {item.id === 4 ? <BlackLock src={Images.blackCloseLock} alt="" /> : ''}
          {item.id === 5 ? <BlackCheck src={Images.blackBeforeCheck} alt="" /> : ''}
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            onChange={item.name === 'Password' ? handlePasswordChange : undefined}
            placeholder={item.otherplaceholder}
          />
          {item.id === 4 ? <BlackLock2 src={Images.blackCloseLock} alt="" /> : ''}
          {item.id === 5 ? <BlackCheck2 src={Images.blackBeforeCheck} alt="" /> : ''}
          {item.name === 'Password' && !isValidPassword && password.length > 0 && (
            <WarningMessage>
              비밀번호는 최소 8자리이며, 영문자와 숫자를 포함해야 합니다.
            </WarningMessage>
          )}
        </DetailInputWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 20px;
`;

const Inputwrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const WarningMessage = styled.div`
  font-size: 12px;
  color: #e22a22;
  margin-top: 5px;
`;

const CommonStyles = `
  display: flex;
  width: 16px;
  height: 16px;          
  position: absolute;
  top: 8px;
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
