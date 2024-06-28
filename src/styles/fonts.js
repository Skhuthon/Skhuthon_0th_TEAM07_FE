import { css } from 'styled-components';

// Pretendard font-famaily 얇은체 100
import Pretendard_Thin_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-Thin.woff2';
import Pretendard_Thin_woff from '../assets/fonts/Pretendard/woff/Pretendard-Thin.woff';
import Pretendard_Thin_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-Thin.ttf';

// Pretendard font-famaily 매우가는체 200
import Pretendard_ExtraLight_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-ExtraLight.woff2';
import Pretendard_ExtraLight_woff from '../assets/fonts/Pretendard/woff/Pretendard-ExtraLight.woff';
import Pretendard_ExtraLight_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-ExtraLight.ttf';

// Pretendard font-famaily 가는체 300
import Pretendard_Light_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-Light.woff2';
import Pretendard_Light_woff from '../assets/fonts/Pretendard/woff/Pretendard-Light.woff';
import Pretendard_Light_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-Light.ttf';

// Pretendard font-famaily 일반체 400
import Pretendard_Regular_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-Regular.woff2';
import Pretendard_Regular_woff from '../assets/fonts/Pretendard/woff/Pretendard-Regular.woff';
import Pretendard_Regular_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-Regular.ttf';

// Pretendard font-famaily 중간체 500
import Pretendard_Medium_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-Medium.woff2';
import Pretendard_Medium_woff from '../assets/fonts/Pretendard/woff/Pretendard-Medium.woff';
import Pretendard_Medium_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-Medium.ttf';

// Pretendard font-famaily 세미볼드체 600
import Pretendard_SemiBold_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-SemiBold.woff2';
import Pretendard_SemiBold_woff from '../assets/fonts/Pretendard/woff/Pretendard-SemiBold.woff';
import Pretendard_SemiBold_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-SemiBold.ttf';

// Pretendard font-famaily 볼드체 700
import Pretendard_Bold_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-Bold.woff2';
import Pretendard_Bold_woff from '../assets/fonts/Pretendard/woff/Pretendard-Bold.woff';
import Pretendard_Bold_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-Bold.ttf';

// Pretendard font-famaily 엑스트라볼드체 800
import Pretendard_ExtraBold_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-ExtraBold.woff2';
import Pretendard_ExtraBold_woff from '../assets/fonts/Pretendard/woff/Pretendard-ExtraBold.woff';
import Pretendard_ExtraBold_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-ExtraBold.ttf';

// Pretendard font-famaily 블랙체 900
import Pretendard_Black_woff2 from '../assets/fonts/Pretendard/woff2/Pretendard-Black.woff2';
import Pretendard_Black_woff from '../assets/fonts/Pretendard/woff/Pretendard-Black.woff';
import Pretendard_Black_ttf from '../assets/fonts/Pretendard/ttf/Pretendard-Black.ttf';

// 퀴즈용 여기어때 체
import Jalnan2_otf from '../assets/fonts/Jalnan2/Jalnan2.otf';
import Jalnan2_ttf from '../assets/fonts/Jalnan2/Jalnan2TTF.ttf';

export const fonts = css`
  // Pretendard font-famaily 얇은체 100
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src:
      local('Pretendard Thin'),
      url(${Pretendard_Thin_woff2}) format('woff2'),
      url(${Pretendard_Thin_woff}) format('woff'),
      url(${Pretendard_Thin_ttf}) format('truetype');
  }

  // Pretendard font-famaily 매우가는체 200
  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src:
      local('Pretendard ExtraLight'),
      url(${Pretendard_ExtraLight_woff2}) format('woff2'),
      url(${Pretendard_ExtraLight_woff}) format('woff'),
      url(${Pretendard_ExtraLight_ttf}) format('truetype');
  }

  // Pretendard font-famaily 가는체 300
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src:
      local('Pretendard Light'),
      url(${Pretendard_Light_woff2}) format('woff2'),
      url(${Pretendard_Light_woff}) format('woff'),
      url(${Pretendard_Light_ttf}) format('truetype');
  }

  // Pretendard font-famaily 일반체 400
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src:
      local('Pretendard Regular'),
      url(${Pretendard_Regular_woff2}) format('woff2'),
      url(${Pretendard_Regular_woff}) format('woff'),
      url(${Pretendard_Regular_ttf}) format('truetype');
  }

  // Pretendard font-famaily 중간체 500
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src:
      local('Pretendard Medium'),
      url(${Pretendard_Medium_woff2}) format('woff2'),
      url(${Pretendard_Medium_woff}) format('woff'),
      url(${Pretendard_Medium_ttf}) format('truetype');
  }

  // Pretendard font-famaily 세미볼드체 600
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src:
      local('Pretendard SemiBold'),
      url(${Pretendard_SemiBold_woff2}) format('woff2'),
      url(${Pretendard_SemiBold_woff}) format('woff'),
      url(${Pretendard_SemiBold_ttf}) format('truetype');
  }

  // Pretendard font-famaily 볼드체 700
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src:
      local('Pretendard Bold'),
      url(${Pretendard_Bold_woff2}) format('woff2'),
      url(${Pretendard_Bold_woff}) format('woff'),
      url(${Pretendard_Bold_ttf}) format('truetype');
  }

  // Pretendard font-famaily 엑스트라볼드체 800
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src:
      local('Pretendard ExtraBold'),
      url(${Pretendard_ExtraBold_woff2}) format('woff2'),
      url(${Pretendard_ExtraBold_woff}) format('woff'),
      url(${Pretendard_ExtraBold_ttf}) format('truetype');
  }

  // Pretendard font-famaily 블랙체 900
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src:
      local('Pretendard Black'),
      url(${Pretendard_Black_woff2}) format('woff2'),
      url(${Pretendard_Black_woff}) format('woff'),
      url(${Pretendard_Black_ttf}) format('truetype');
  }

  // 퀴즈용 여기어때 체
  @font-face {
    font-family: 'Jalnan2';
    font-display: swap;
    src:
      local('Jalnan2'),
      url(${Jalnan2_otf}) format('opentype'),
      url(${Jalnan2_ttf}) format('truetype');
  }
`;
