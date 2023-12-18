import styled from 'styled-components';
import { GetIndividualUserList } from '../../../utils/api/auth/page';

const UserDetailInfo = () => {
  const { data: individualUserList } = GetIndividualUserList();
  return (
    <>
      <ImageContainer style={{ backgroundImage: `url(${individualUserList?.background})` }}>
        <ProfileImage src={individualUserList?.profile} />
      </ImageContainer>
      <ProfleInfos>
        <Title>{individualUserList?.isStudent && <>Student</>}</Title>
        <Group>
          <p>{individualUserList?.name}</p>
          <p>onLine</p>
        </Group>
        <Email>{individualUserList?.email}</Email>
        <Infos>
          {individualUserList?.major} <Border />
          {individualUserList?.number} <Border />
          {individualUserList?.github}
        </Infos>
      </ProfleInfos>
    </>
  );
};

const baseTextStyle = `
  font-family: 'Noto Sans';
  font-style: normal;
  line-height: normal;
`;

const Title = styled.p`
  ${baseTextStyle}
  color: #818181;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    ${baseTextStyle}
    color: #000;
    text-align: center;
    font-size: 50px;
    font-weight: 600;
  }
`;

const Email = styled.p`
  ${baseTextStyle}
  color: #393939;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const Border = styled.span`
  width: 1px;
  height: 20px;
  color: black;
  border: 1px solid black;
`;

const FlexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  ${FlexCenter}
  width: 100%;
  height: 40vh;
`;

const ProfileImage = styled.img`
  position: relative;
  top: 95px;
  border-radius: 50%;
  width: 33%;
`;

const ProfleInfos = styled.div`
  ${FlexCenter}
  flex-direction: column;
  gap: 30px;
  margin-top: 100px;
`;

const Infos = styled.span`
  ${FlexCenter}
  gap: 20px;
`;

export default UserDetailInfo;
