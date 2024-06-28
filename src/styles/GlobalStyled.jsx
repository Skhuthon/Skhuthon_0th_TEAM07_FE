import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fonts } from './fonts';

const GlobalStyled = createGlobalStyle`
  ${reset}

  ${fonts}

  * {
    box-sizing: border-box;
    font-family: 'Pretendard', 'Roboto', sans-serif;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', 'Roboto', sans-serif;
    font-weight: 400;
    background-color: white;
    width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    body {
      background-color: #d2d2d2;
    }
  }
`;

export default GlobalStyled;
