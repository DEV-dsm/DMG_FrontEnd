import { useState } from "react";
import { menus } from "../contanse";
import { IMenuType } from "../../types/MainPage";
import styled from "styled-components";
import Logout from "./Logout";

const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleChangeClick = (name: string): void => {
    setSelectedMenu(name);
  };

  const handleMouseEnter = (name: string): void => {
    setHoveredMenu(name);
  };

  const handleMouseLeave = (): void => setHoveredMenu(null);

  return (
    <>
      <SideBarContainer>
        {menus.map((item: IMenuType, index: number) => {
          const isSelected = selectedMenu === item.name;
          const isHovered = hoveredMenu === item.name;
          return (
            <MenuBarWrapper key={index}>
              <SideBarBackColor
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onClick={() => handleChangeClick(item.name)}
                selected={isSelected}
                hovered={isHovered}
              >
                <IconStyle
                  src={
                    isSelected || isHovered ? item.whiteIcons : item.BlackIcons
                  }
                  alt="image"
                />
                <TextStyle selected={isSelected || isHovered}>
                  {item.name}
                </TextStyle>
              </SideBarBackColor>
            </MenuBarWrapper>
          );
        })}
        <Logout />
      </SideBarContainer>
    </>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 100px 30px 0 30px;
  gap: 20px;
`;

const MenuBarWrapper = styled.div``;

const SideBarBackColor = styled.div<{ selected: boolean; hovered: boolean }>`
  background: ${({ selected, hovered }) =>
    selected || hovered ? "#393939" : "transparent"};
  border-radius: 15px;
  width: 270px;

  cursor: pointer;
  display: flex;
  padding: 23px 20px;
`;

const TextStyle = styled.span<{ selected: boolean }>`
  font-family: "Inter";
  color: ${(props) => (props.selected ? "#FFFFFF" : "#000000")};
  font-size: 20px;
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
