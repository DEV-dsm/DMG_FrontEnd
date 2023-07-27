import { useState } from "react";
import { menus } from "../../contanse";
import { IMenuType } from "../../types/mypage";
import styled, { css } from "styled-components";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const handleChangeClick = ({
    name,
    id,
  }: {
    name: string;
    id?: string;
  }): void => {
    setSelectedMenu(name);
    navigate(`/${id}`);
  };

  const handleMouseEnter = (name: string): void => {
    setHoveredMenu(name);
  };

  const handleMouseLeave = (): void => setHoveredMenu(null);

  return (
    <div>
      <SideBarContainer>
        <SideBartabs>
          {menus.map((item: IMenuType, index: number) => {
            const isSelected = selectedMenu === item.name;
            const isHovered = hoveredMenu === item.name;
            const IconColor =
              isSelected || isHovered ? item.whiteIcons : item.BlackIcons;
            return (
              <div key={index}>
                <SideBarBackColor
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onClick={() =>
                    handleChangeClick({ name: item.name, id: item.id })
                  }
                  selected={isSelected}
                  hovered={isHovered}
                >
                  <IconStyle src={IconColor} alt="image" />
                  <TextStyle selected={isSelected || isHovered}>
                    {item.name}
                  </TextStyle>
                </SideBarBackColor>
              </div>
            );
          })}
        </SideBartabs>
        <Logout />
      </SideBarContainer>
    </div>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  gap: 20px;
  align-items: center;
  border-right: 1px solid #393939;
  justify-content: space-between;
  padding: 80px 0 50px 0;
`;

const SideBartabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SideBarBackColor = styled.div<{ selected: boolean; hovered: boolean }>`
  border-radius: 15px;
  width: 250px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 23px 20px;
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
  font-family: "Inter";
  color: ${(props) => (props.selected ? "#FFFFFF" : "#000000")};
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
