import * as S from '../components/auth/style';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/auth/LoginInput';
import AuthButton from '../components/common/AuthButton';
import CheckImgs from '../assets/auth/clickCheck.png';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>LOG IN</S.Title>
        <LoginInput />
        <ButtonContainer>
          <AuthButton text="LOG IN" />
          <CheckImg src={CheckImgs} />
        </ButtonContainer>
        <S.Link onClick={() => navigate('/findpassword')}>Forgot Password?</S.Link>
      </S.Container>
    </S.Wrapper>
  );
};

const CheckImg = styled.img`
  width: 14px;
  position: absolute;
  right: 45px;
  top: 13px;
`;

const ButtonContainer = styled.div`
  position: relative;
`;

export default LoginPage;
