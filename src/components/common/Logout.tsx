import { LOGOUT } from '../../contanse';
import { styled } from 'styled-components';

const Logout = () => {
  return (
    <MenuBarWrapper>
      <IconStyle src={LOGOUT.BlackIcons} />
      <TextStyle>{LOGOUT.name}</TextStyle>
    </MenuBarWrapper>
  );
};

const MenuBarWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-left: 18px;
`;

const TextStyle = styled.span`
  font-family: 'Inter';
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 17px;
`;

const IconStyle = styled.img`
  width: 27px;
  height: 27px;
  vertical-align: middle;
`;

export default Logout;
