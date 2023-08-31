import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { menus } from '../../contanse';
import { IMenuType } from '../../types/mypage';
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
              <div key={index}>
                <SideBarBackColor
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onClick={() => handleChangeClick({ name: item.name, id: item.id })}
                  selected={isSelected}
                  hovered={isHovered}
                >
                  <IconStyle src={IconColor} alt="image" />
                  <TextStyle selected={isSelected || isHovered}>{item.name}</TextStyle>
                </SideBarBackColor>
              </div>
            );
          })}
        </SideBartabs>
        <Logout />
      </SideBarContainer>

      <Outlet />
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
`;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 290px;
  gap: 20px;
  align-items: center;
  border-right: 1px solid #393939;
  justify-content: space-between;
  padding: 100px 30px 50px 30px;
`;

const SideBartabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SideBarBackColor = styled.div<{ selected: boolean; hovered: boolean }>`
  border-radius: 20px;
  width: 250px;
  cursor: pointer;
  display: inline-flex;
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

const TextStyle = styled.span<{ selected: boolean }>`
  font-family: 'Inter';
  color: ${(props) => (props.selected ? '#FFFFFF' : '#000000')};
  font-size: 18px;
  font-weight: 600;
  vertical-align: middle;
  margin-left: 20px;
  align-items: center;
`;

const IconStyle = styled.img`
  width: 28px;
  height: 28px;
  vertical-align: middle;
`;

export default SideBar;
