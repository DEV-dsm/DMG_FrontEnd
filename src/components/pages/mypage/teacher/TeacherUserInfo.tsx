import styled from 'styled-components';

import Input from '../../../common/Input';
import { TeacherInfo, TeacherInfoDetail } from '../../../../constants';
import { IUserInfoDetailType } from '../../../../models/Mypage';

// const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const TeacherInfoList = () => {
  return (
    <Container>
      {TeacherInfo.map((item: IUserInfoDetailType, index: number) => (
        <div key={index}>
          <Input type="text" name={item.name} placeholder={item.placeholder} />
        </div>
      ))}
      {TeacherInfoDetail.map((item: IUserInfoDetailType) => (
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
          <Input
            type={item.name === 'Password' ? 'password' : 'text'}
            placeholder={item.theotherplaceholder}
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
  gap: 5px;
`;

export default TeacherInfoList;
