import styled from 'styled-components';
import { Images } from '../../../assets/mypage';
import { TeacherListType } from '../../../models/userList';

interface propsType {
  data: TeacherListType;
}

export const TeacherRow = ({ data }: propsType) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Img src={data.profile || Images.defaultProfile} />

        <div>
          <UserName>{data.name}</UserName>
          <Number>{data.subject}</Number>
        </div>
      </LeftWrapper>

      {/* <Btn>
        <Img src={CommonImages.logo1} style={{ width: '40px' }} />
      </Btn> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  padding: 15px 25px 10px 15px;
  align-items: center;

  &:hover {
    border-radius: 20px 0px 0px 20px;
    background: #ececef;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 50px;
`;

const UserName = styled.div`
  margin-bottom: 5px;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 600;
`;

const Number = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  color: #393939;
`;
