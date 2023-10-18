import React from 'react';
import styled from 'styled-components';

import { Images } from '../../assets/mypage';

const UserDetailInfo = () => {
  return (
    <>
      <BlockImg src={Images.BlockImg} />
    </>
  );
};

const BlockImg = styled.img`
  width: 100%;
  height: 40vh;
`;

export default UserDetailInfo;
