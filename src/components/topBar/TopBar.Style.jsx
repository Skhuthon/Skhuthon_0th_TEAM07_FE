import styled from 'styled-components';
import backIcon from '../../assets/icons/icon-topbar-back-white.png';

export const TopBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 16px 34px;
  z-index: 100;
  background-color: #1f2c3a;
`;

export const BackIcon = styled.img.attrs({
  src: backIcon,
})``;

export const ActionIcons = styled.div`
  display: flex;
  gap: 20px;
`;
