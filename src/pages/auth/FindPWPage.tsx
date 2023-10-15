import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import toast from 'react-hot-toast';
import { findPwInputsAtom } from '../../atom/authAtom';
import { useAuthCode } from '../../components/hooks/useAuthcode';
import * as S from '../../components/auth/style';
import CheckImgs from '../../assets/auth/clickCheck.png';
import FindPWInput from '../../components/auth/FindPWInput';
import AuthButton from '../../components/common/AuthButton';

const FindPWPage = () => {
  const navigate = useNavigate();
  const inputsData = useRecoilValue(findPwInputsAtom);
  const { mutate } = useAuthCode(inputsData);

  const onAuthClick = (): void => {
    if (!inputsData.authnumber) {
      toast.error('인증코드를 입력해 주세요', { duration: 1500 });
      return;
    }
    mutate();
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Find Password</S.Title>
        <FindPWInput />
        <ButtonContainer>
          <AuthButton text="FIND" width="50%" onClick={() => onAuthClick()} />
          <CheckImg src={CheckImgs} />
        </ButtonContainer>
        <S.Link onClick={() => navigate('/')}>Go Login</S.Link>
      </S.Container>
    </S.Wrapper>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const CheckImg = styled.img`
  width: 14px;
  position: absolute;
  right: 133px;
  top: 12px;
`;

export default FindPWPage;
