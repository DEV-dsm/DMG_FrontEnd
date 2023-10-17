import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import styled from 'styled-components';

interface EyeProps {
  isShowPassword: boolean;
  onClick: () => void;
}

const Eye = ({ isShowPassword, onClick }: EyeProps) => {
  return (
    <EyeWrapper>
      <EyeContainer onClick={onClick}>
        {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </EyeContainer>
    </EyeWrapper>
  );
};

const EyeContainer = styled.div`
  position: absolute;
  top: -30px;
  right: 20px;
  cursor: pointer;
  background-color: white;
`;

const EyeWrapper = styled.div`
  position: relative;
`;

export default Eye;
