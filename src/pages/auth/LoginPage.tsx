import * as S from '@/components/auth/style';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginInput from '@/components/auth/LoginInput';
import AuthButton from '@/components/common/AuthButton';
import CheckImgs from '@/assets/auth/clickCheck.png';
import { useRecoilValue } from 'recoil';
import { loginInputsAtom } from '@/atom/authAtom';
import { useLogin } from '@/components/hooks/apis/useLogin';

const LoginPage = () => {
  const navigate = useNavigate();
  const inputsData = useRecoilValue(loginInputsAtom);
  const loginMutation = useLogin(inputsData);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>LOG IN</S.Title>
        <form onSubmit={handleSubmit}>
          <LoginInput />
          <ButtonContainer>
            <AuthButton text="LOG IN" width="50%" />
            <CheckImg src={CheckImgs} />
          </ButtonContainer>
        </form>
        <S.Link onClick={() => navigate('/findFW')}>Forgot Password?</S.Link>
      </S.Container>
    </S.Wrapper>
  );
};

const CheckImg = styled.img`
  width: 14px;
  position: absolute;
  right: 125px;
  top: 62px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 50px;
`;

export default LoginPage;
