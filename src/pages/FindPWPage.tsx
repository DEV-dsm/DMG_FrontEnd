import styled from 'styled-components';
import * as S from '../components/auth/style';
import FindPWInput from '../components/auth/FindPWInput';
import AuthButton from '../components/common/AuthButton';
import { useNavigate } from 'react-router-dom';

const FindPWPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Find Password</S.Title>
        <form onSubmit={handleSubmit}>
          <FindPWInput />
          <ButtonContainer>
            <AuthButton text="FIND" width="50%" />
          </ButtonContainer>
        </form>
        <S.Link onClick={() => navigate('/')}>Go Login</S.Link>
      </S.Container>
    </S.Wrapper>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 50px;
`;

export default FindPWPage;
