import { styled } from 'styled-components';

// styled-components
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #393939 0%, #f5f5f7 100%);
`;

export const Container = styled.div`
  padding: 100px 270px 50px 270px; // change!!
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border-radius: 24px;
  background: #393939;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 36px;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

// components
export const Input = styled.input`
  padding: 10px 0;
  width: 340px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #fff;
  background: transparent;

  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;

  &::placeholder {
    color: #c4c4c4;
  }
`;

// components
export const Btn = styled.button`
  padding: 14px 64px;
  display: flex;
  gap: 5px;
  border-radius: 32px;
  background: #ffffff;
`;
export const Text = styled.p`
  font-size: 16px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 700;
`;
export const Img = styled.img`
  width: 14px;
`;

export const Link = styled.p`
  font-size: 16px;
  font-family: Noto Sans;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;

  &:hover {
    text-decoration-line: underline;
  }
`;
