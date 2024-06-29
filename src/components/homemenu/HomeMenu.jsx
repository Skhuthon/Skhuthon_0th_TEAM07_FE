import React from 'react';
import HomeItem from '../homeItem/HomeItem';
import * as S from './HomeMenu.Style';
import TestIcon from '../../assets/images/image-navigation-logo.png';

const categoryData = [
  {
    name: '식전 칵테일\n(식욕 증진용)',
    icon: TestIcon,
    path: '/category/aperitif-cocktail',
  },
  {
    name: '식전 칵테일\n(드라이 타입)',
    icon: TestIcon,
    path: '/category/before-dinner-cocktail',
  },
  {
    name: '식사와 상관없이\n마시는 칵테일',
    icon: TestIcon,
    path: '/category/all-day-type-cocktail',
  },
  {
    name: '식후에 마시기\n좋은 칵테일',
    icon: TestIcon,
    path: '/category/after-dinner-cocktail',
  },
];

const HomeMenu = () => {
  return (
    <S.HomeMenuWrapper>
      <S.MenuTitle>🤔어떤 종류의 칵테일이 필요하신가요?</S.MenuTitle>
      <S.MenuItemsContainer>
        {categoryData.map((category) => (
          <HomeItem
            key={category.name}
            name={category.name}
            icon={category.icon}
            path={category.path}
          />
        ))}
      </S.MenuItemsContainer>
    </S.HomeMenuWrapper>
  );
};

export default HomeMenu;
