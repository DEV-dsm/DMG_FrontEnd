import { styled } from "styled-components";
import SubmitBtn from "./SubmitBtn";
import { Images } from "../../assets/mypage";
import UserInfoInput from "../mypage/UserInfoInput";

const StudentInfo = () => {
  return (
    <Wrapper>
      <BlockImg src={Images.BlockImg} alt="" />
      <img src={Images.defaultOrofile} alt="" />
      <UserInfoInput />
      <SubmitBtn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 600px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlockImg = styled.img`
  width: 90%;
`;

export default StudentInfo;
