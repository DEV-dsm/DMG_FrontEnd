import { useState } from 'react';
import styled from 'styled-components';
import { Images } from '../../../assets/mypage';
import { StudentListType } from '../../../models/userList';

interface propsType {
  data: StudentListType;
  checkBoxOnClick: (userId: number) => void;
}

export const StudentRow = ({ data, checkBoxOnClick }: propsType) => {
  const [check, setCheck] = useState(false);
  return (
    <Wrapper>
      <LeftWrapper>
        <Img src={data.profile || Images.defaultProfile} />

        <div>
          <UserName>{data.name}</UserName>
          <Number>{data.number}</Number>
        </div>
      </LeftWrapper>

      <CheckBox
        check={check}
        onClick={() => {
          if (!check) setCheck(true);
          else setCheck(false);
          checkBoxOnClick && checkBoxOnClick(data.qb_userID);
        }}
      />
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

const CheckBox = styled.button<{
  check: boolean;
}>`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.check ? '#393939' : '#FFFFFF')};
  border: ${(props) => (props.check ? 'none' : `1px solid #393939`)};
`;
