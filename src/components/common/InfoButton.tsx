import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
}

interface StyledButtonProps {
  width?: string;
}

const InfoButton = ({ ...props }: ButtonProps) => {
  return (
    <Button onClick={props.onClick} width={props.width}>
      {props.text}
    </Button>
  );
};

const Button = styled.button<StyledButtonProps>`
  width: ${(props) => props.width || '100%'};
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

export default InfoButton;
