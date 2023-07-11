import { LOGOUT } from "../contanse";
import { styled } from "styled-components";
import { IMenuType } from "../../types/mypage";
import { LogOutBlackIcons } from "../../assets/icons";

function Logout() {
  return (
    <div>
      {LOGOUT.map((item: IMenuType, index: number) => {
        return (
          <LogoutMenuBarWrapper key={index}>
            <IconStyle src={LogOutBlackIcons} alt="image" />
            <TextStyle>{item.name}</TextStyle>
          </LogoutMenuBarWrapper>
        );
      })}
    </div>
  );
}

const MenuBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoutMenuBarWrapper = styled(MenuBarWrapper)`
  padding-top: 200px;
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
