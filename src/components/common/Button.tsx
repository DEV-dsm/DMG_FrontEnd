import styled from 'styled-components';

interface propType {
  text: string;
  width?: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, width = 100, onClick }: propType) {
  return (
    <BtnStyle width={width} onClick={onClick}>
      {text}
    </BtnStyle>
  );
}

const BtnStyle = styled.button<{
  width: number;
}>`
  padding: 12.5px 40px;
  width: ${({ width }) => width + '%'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 32px;
  background: #393939;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;
