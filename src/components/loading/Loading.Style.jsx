import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
`;

export const LoadingContainer = styled.div`
  width: 325px;
  margin: 0 auto;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  animation: ${fadeInOut} 2s ease-in-out infinite;
  font-size: 27px;
  font-weight: bold;
  color: #f7be3b;
  letter-spacing: 0.3px;
  padding-top: 10px;
`;

export const LoadingImage = styled.img`
  width: 200px;
  animation: ${fadeInOut} 2s ease-in-out infinite;
`;
