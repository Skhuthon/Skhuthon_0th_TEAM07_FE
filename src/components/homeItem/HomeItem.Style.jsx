import styled from 'styled-components';

export const HomeItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
`;

export const MenuIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: #d2d999;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;

  &:hover {
    background-color: #fef5a6;
  }
`;

export const MenuIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const MenuTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MenuText = styled.span`
  font-size: 11px;
  color: #f7be3b;
  text-align: center;
  font-weight: bold;
  white-space: pre-wrap;
  text-align: center;
`;
