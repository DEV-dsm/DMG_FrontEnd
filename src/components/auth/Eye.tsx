import { EyeIcon1, EyeIcon2 } from '../../assets/auth';
import styled from 'styled-components';

interface EyeProps {
  isShowPassword: boolean;
  onClick: () => void;
}

const Eye = ({ isShowPassword, onClick }: EyeProps) => {
  return (
    <EyeWrapper>
      <EyeContainer onClick={onClick}>{isShowPassword ? <EyeIcon1 /> : <EyeIcon2 />}</EyeContainer>
    </EyeWrapper>
  );
};

const EyeContainer = styled.div`
  position: absolute;
  top: -30px;
  right: 10px;
  cursor: pointer;
`;

const EyeWrapper = styled.div`
  position: relative;
`;

export default Eye;
