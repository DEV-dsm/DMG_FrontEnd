import styled from 'styled-components';

interface AuthButtonProps {
  text: string;
  onClick: () => void;
}

const AuthButton = ({ text, onClick }: AuthButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 32px;
  background: #ffffff;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 700;
  gap: 10px;
  padding: 14px 64px;
`;

export default AuthButton;
