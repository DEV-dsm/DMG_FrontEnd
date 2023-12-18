import styled from 'styled-components';

interface AuthButtonProps {
  text: string;
  onClick?: any;
  width?: string;
  color?: string;
}

interface ButtonProps {
  width?: string;
  color?: string;
}

const AuthButton = ({ text, onClick, width, color }: AuthButtonProps) => {
  return (
    <Button onClick={onClick} width={width} color={color}>
      {text}
    </Button>
  );
};

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || '100%'};
  height: 40px;
  border-radius: 32px;
  background: ${(props) => props.color || '#ffffff'};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-weight: 700;
  gap: 10px;
  padding: 14px 32px;
`;

export default AuthButton;
