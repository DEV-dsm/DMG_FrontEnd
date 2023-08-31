import styled from 'styled-components';

const SubmitBtn = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

const Button = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 30px;
  background: #393939;
  outline: none;
  border: none;
  color: #ffffff;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 600;
`;

export default SubmitBtn;
