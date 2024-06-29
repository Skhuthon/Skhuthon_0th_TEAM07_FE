import styled from 'styled-components';

export const ActiveButton = styled.button`
  background-color: #fbb24d;
  color: #2d1914;
  font-size: 22px;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 20px;
  box-shadow:
    0 0 0 1px #fbb24d inset,
    0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #bd863a,
    0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);

  &:active {
    box-shadow:
      0 0 0 1px #fbb24d inset,
      0 0 0 2px rgba(255, 255, 255, 0.15) inset,
      0 0 0 1px rgba(0, 0, 0, 0.4);
    transform: translateY(6px);
  }
`;

export const ButtonWrapper = styled.div``;
