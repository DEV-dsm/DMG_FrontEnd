import styled from 'styled-components';
import { Images } from '../../../../assets/mypage';

const SearchUserInfo = ({ selectedUser }: any) => {
  return (
    <>
      <ImageContainer
        style={{
          backgroundImage: `url(${selectedUser.background || `${Images.Background}`})`,
        }}
      >
        <ProfileImage src={selectedUser?.profile || Images.defaultProfile} />
      </ImageContainer>
      <ProfleInfos>
        <Title>{selectedUser?.isStudent ? <>Student</> : null}</Title>
        <Group>
          <p>{selectedUser?.name}</p>
          <OnLineContainer>
            {selectedUser?.isOnline ? (
              <>
                <img src={Images.GreenCircle} alt="Online" />
                <p style={{ color: '#27AE62' }}>ONLINE</p>
              </>
            ) : (
              <>
                <img src={Images.RedCircle} alt="Offline" />
                <p style={{ color: '#D92B35' }}>OFFLINE</p>
              </>
            )}
          </OnLineContainer>
        </Group>
        <Email>{selectedUser?.email}</Email>
        <Infos>
          <div>
            <p>{selectedUser?.major || '-'}</p>
            <DetailInfos>Major</DetailInfos>
          </div>
          <Border />
          <div>
            <p>{selectedUser?.number || '-'}</p> <DetailInfos>Number</DetailInfos>
          </div>
          <Border />
          <div>
            <p>{selectedUser?.github || '-'}</p> <DetailInfos>Github</DetailInfos>
          </div>
        </Infos>
      </ProfleInfos>
    </>
  );
};

const OnLineContainer = styled.div`
  display: flex;
  gap: 7px;
  padding-top: 7px;
`;

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
    font-size: 40px;
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
  border: 0.5px solid black;
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
  width: 280px;
  height: 280px;
`;

const ProfleInfos = styled.div`
  ${FlexCenter}
  flex-direction: column;
  gap: 30px;
  margin-top: 100px;
  padding-bottom: 120px;
`;

const Infos = styled.span`
  ${FlexCenter}
  ${baseTextStyle}
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  gap: 20px;
`;

const DetailInfos = styled.p`
  ${FlexCenter}
  flex-direction: column;
  color: #818181;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default SearchUserInfo;
