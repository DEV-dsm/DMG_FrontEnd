import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-hot-toast';

import { menus, Logout } from '../../constants';
import { IMenuType } from '../../models/Mypage';
import { loginInputsAtom } from '../../atom/authAtom';
import { removeToken } from '../../utils/functions/TokenManager';

const SideBar = () => {
  const navigate = useNavigate();
  const setInput = useSetRecoilState(loginInputsAtom);

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleChangeClick = ({ name, id }: { name: string; id?: string }): void => {
    setSelectedMenu(name);
    navigate(`/${id}`);
  };

  const handleMouseEnter = (name: string): void => {
    setHoveredMenu(name);
  };

  const handleMouseLeave = (): void => setHoveredMenu(null);

  const onLogoutClick = (): void => {
    navigate('/');
    removeToken();
    setInput({
      identify: '',
      password: '',
    });
    toast.success(`로그아웃 되었습니다.`, { duration: 1500 });
  };

  return (
    <FlexContainer>
      <SideBarContainer>
        <SideBartabs>
          {menus.map((item: IMenuType, index: number) => {
            const isSelected = selectedMenu === item.name;
            const isHovered = hoveredMenu === item.name;
            const IconColor = isSelected || isHovered ? item.whiteIcons : item.BlackIcons;
            return (
              <SideBarBackColor
                key={index}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onClick={() => handleChangeClick({ name: item.name, id: item.id })}
                selected={isSelected}
                hovered={isHovered}
              >
                <TabBarWrapper>
                  <IconStyle src={IconColor} />
                  <TextStyle selected={isSelected || isHovered}>{item.name}</TextStyle>
                </TabBarWrapper>
              </SideBarBackColor>
            );
          })}
        </SideBartabs>
        <LogoutWrapper onClick={onLogoutClick}>
          {Logout.map((item, index: number) => {
            const isSelected = selectedMenu === item.name;
            const isHovered = hoveredMenu === item.name;
            const iconColor = isSelected || isHovered ? item.whiteIcons : item.BlackIcons;
            return (
              <SideBarBackColor
                key={index}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onClick={() => handleChangeClick({ name: item.name, id: item.id })}
                selected={isSelected}
                hovered={isHovered}
              >
                <LogoutTabBar>
                  <IconStyle src={iconColor} />
                  <TextStyle selected={isSelected || isHovered}>{item.name}</TextStyle>
                </LogoutTabBar>
              </SideBarBackColor>
            );
          })}
        </LogoutWrapper>
      </SideBarContainer>
      <Outlet />
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SideBartabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 20vw;
  align-items: center;
  border-right: 1px solid #393939;
  justify-content: space-between;
  padding: 100px 30px 50px 30px;
  @media screen and (max-width: 1050px) {
    span {
      display: none;
    }
  }
`;

const TabBarWrapperStyle = `
  display: flex;
  align-items: center;
  gap: 17px;
`;

const TabBarWrapper = styled.div`
  ${TabBarWrapperStyle}
`;

const LogoutTabBar = styled.div`
  ${TabBarWrapperStyle}
  padding-right: 20px;
`;

const SideBarBackColor = styled.div<{ selected: boolean; hovered: boolean }>`
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
  padding: 24px 30px 24px 20px;
  ${(props) =>
    props.selected || props.hovered
      ? css`
          background-color: #393939;
          box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
        `
      : css`
          background-color: transparent;
        `}
`;

const TextStyle = styled.span<{ selected?: boolean }>`
  font-family: 'Inter';
  color: ${(props) => (props.selected ? '#FFFFFF' : '#000000')};
  font-size: 17px;
  font-weight: 600;
`;

const IconStyle = styled.img`
  width: 25px;
  height: 25px;
`;

const LogoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SideBar;
