import styled from 'styled-components';

import Input from '../common/Input';
import { UserInfo, UserInfoDetail } from '../../constants';
import { IUserInfoDetailType } from '../../models/Mypage';
import { Images } from '../../assets/mypage';

// const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const UserInfoInput = () => {
  return (
    <Container>
      {UserInfo.map((item: IUserInfoDetailType, index: number) => (
        <div key={index}>
          <Input type="text" name={item.name} placeholder={item.placeholder} />
        </div>
      ))}
      {UserInfoDetail.map((item: IUserInfoDetailType) => (
        <DetailInputWrapper key={item.id}>
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            name={item.name}
            placeholder={item.placeholder}
          />
          {item.id === 4 ? <BlackLock src={Images.blackCloseLock} alt="" /> : ''}
          {item.id === 5 ? <BlackCheck src={Images.blackBeforeCheck} alt="" /> : ''}
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            placeholder={item.otherplaceholder}
          />
          {item.id === 4 ? <BlackLock2 src={Images.blackCloseLock} alt="" /> : ''}
          {item.id === 5 ? <BlackCheck2 src={Images.blackBeforeCheck} alt="" /> : ''}
        </DetailInputWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const DetailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 7px;
`;

const CommonStyles = `
  display: flex;
  width: 16px;
  height: 16px;          
  position: absolute;
  top: 10px;
  right: 15px;
`;

const BlackLock = styled.img`
  ${CommonStyles}
`;

const BlackLock2 = styled.img`
  ${CommonStyles}
  top: 55px;
`;

const BlackCheck = styled.img`
  ${CommonStyles}
  top: 55px;
`;

const BlackCheck2 = styled.img`
  ${CommonStyles}
`;

export default UserInfoInput;
