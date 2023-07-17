import React from "react";
import styled from "styled-components";

function SubmitBtn() {
  return (
    <div>
      <Button type="submit">
        <TextBtn>Submit</TextBtn>
      </Button>
    </div>
  );
}

const Button = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 30px;
  background: #393939;
`;

const TextBtn = styled.div`
  color: #ffffff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 600;
`;

export default SubmitBtn;