import styled from 'styled-components';

export const CategoryItemWrapper = styled.div`
  width: 325px;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: #f7be3b;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fef5a6;
  }
`;

export const CategoryIconWrapper = styled.div`
  width: 80px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  padding: 5px;
`;

export const CategoryIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const CategoryTextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CategoryText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #2d1914;
  white-space: pre-wrap;
  text-align: center;
`;
