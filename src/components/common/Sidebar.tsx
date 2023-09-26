import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';

import { menus } from '../../constants';
import { IMenuType } from '../../models/Mypage';
import Logout from './Logout';

const SideBar = () => {
  const navigate = useNavigate();
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
        <Logout />
      </SideBarContainer>
      <Outlet />
    </FlexContainer>
  );
};

const TabBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
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
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

const SideBartabs = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SideBarBackColor = styled.div<{ selected: boolean; hovered: boolean }>`
  border-radius: 20px;
  cursor: pointer;
  align-items: center;
  padding: 24px 30px 24px 20px;
  display: flex;
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

export default SideBar;
