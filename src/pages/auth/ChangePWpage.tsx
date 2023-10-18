import styled from 'styled-components';
import * as S from '../../components/auth/style';
import ChangePWInput from '../../components/auth/ChangePWInput';
import AuthButton from '../../components/common/AuthButton';
import { useNavigate } from 'react-router-dom';
import CheckImgs from '@/assets/auth/clickCheck.png';
import { useRecoilValue } from 'recoil';
import { ChangePWInputsAtom } from '../../atom/authAtom';
import { useChangePW } from '../../components/hooks/apis/useChangePW';

const ChangePWPage = () => {
  const navigate = useNavigate();
  const inputData = useRecoilValue(ChangePWInputsAtom);
  const { mutate } = useChangePW(inputData);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Modify Password</S.Title>
        <ChangePWInput />
        <ButtonContainer>
          <AuthButton text="Change" width="50%" onClick={() => mutate()} />
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
  right: 123px;
  top: 13px;
`;

export default ChangePWPage;
