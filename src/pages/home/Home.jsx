import React from 'react';
import * as S from './Home.Style';

// 상단 로고 컴포넌트
import Logo from '../../components/logo/Logo';

// 배너 컴포넌트
import Banner from '../../components/banner/Banner';

// 홈 메뉴 컴포넌트
import HomeMenu from '../../components/homemenu/HomeMenu';

const Home = () => {
  return (
    <S.HomeContainer>
      <Logo />
      <Banner />
      <HomeMenu />
    </S.HomeContainer>
  );
};

export default Home;
