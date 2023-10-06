import * as S from '../components/auth/style';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../components/auth/LoginInput';
import AuthButton from '../components/common/AuthButton';
import CheckImgs from '../assets/auth/clickCheck.png';
import { useRecoilValue } from 'recoil';
import { loginInputsAtom } from '../atom/authAtom';
import { useLogin } from '../components/hooks/useLogin';

const LoginPage = () => {
  const navigate = useNavigate();
  const inputsData = useRecoilValue(loginInputsAtom);
  const { mutate } = useLogin(inputsData);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>LOG IN</S.Title>
        <LoginInput />
        <ButtonContainer>
          <AuthButton text="LOG IN" onClick={() => mutate()} />
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
