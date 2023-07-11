import { styled } from "styled-components";
import SubmitBtn from "./SubmitBtn";

function StudentInfo() {
  return (
    <Wrapper>
      <SubmitBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #393939;
  width: 600px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 330px;
`;

export default StudentInfo;
