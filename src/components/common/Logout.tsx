import { LOGOUT } from "../../contanse";
import { styled } from "styled-components";

function Logout() {
  return (
    <LogoutMenuBarWrapper>
      <IconStyle src={LOGOUT.BlackIcons} alt="image" />
      <TextStyle>{LOGOUT.name}</TextStyle>
    </LogoutMenuBarWrapper>
  );
}

const MenuBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoutMenuBarWrapper = styled(MenuBarWrapper)`
  width: 220px;
`;

const TextStyle = styled.span`
  font-family: "Inter";
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 20px;
`;

const IconStyle = styled.img`
  width: 28px;
  height: 28px;
  vertical-align: middle;
`;

export default Logout;
