import styled from 'styled-components';

import Input from '../../common/Input';
import { UserInfo, UserInfoDetail } from '../../../constants';
import { IUserInfoDetailType } from '../../../models/Mypage';

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
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            placeholder={item.otherplaceholder}
          />
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

export default UserInfoInput;
