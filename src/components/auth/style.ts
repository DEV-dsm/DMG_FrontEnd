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
