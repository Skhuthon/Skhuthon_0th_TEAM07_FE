import React from 'react';
import * as S from './Home.Style';

// 상단 로고 컴포넌트
import Logo from '../../components/logo/Logo';

// 배너 컴포넌트
import Banner from '../../components/banner/Banner';

const Home = () => {
  return (
    <S.HomeContainer>
      <Logo />
      <Banner />
    </S.HomeContainer>
  );
};

export default Home;
