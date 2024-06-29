import styled from 'styled-components';

export const ActiveButton = styled.button`
  background-color: #f7be3b;
  color: #2d1914;
  font-size: 22px;
  width: 150px;
  height: 35px;
  margin-top: 40px;
  border: none;
  border-radius: 20px;

  &:active {
    box-shadow:
      0 0 0 1px #fbb24d inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgba(0, 0, 0, 0.4);
    transform: translateY(6px);
  }
`;

export const ButtonWrapper = styled.div``;
