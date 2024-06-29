import React from 'react';
import * as S from './CategoryList.Style';
import CategoryItem from '../categoryItem/CategoryItem';

import TestIcon from '../../assets/images/image-navigation-logo.png';

import MockImage1 from '../../assets/images/banner/1.png';
import MockImage2 from '../../assets/images/banner/2.png';
import MockImage3 from '../../assets/images/banner/3.png';
import MockImage4 from '../../assets/images/banner/4.png';

const categoryData = [
  {
    name: '식전 칵테일\n(식욕 증진용)',
    icon: MockImage1,
    path: '/category/aperitif-cocktail',
  },
  {
    name: '식전 칵테일\n(드라이 타입)',
    icon: MockImage2,
    path: '/category/before-dinner-cocktail',
  },
  {
    name: '식사와 상관없이\n마시는 칵테일',
    icon: MockImage3,
    path: '/category/all-day-type-cocktail',
  },
  {
    name: '식후에 마시기\n좋은 칵테일',
    icon: MockImage4,
    path: '/category/after-dinner-cocktail',
  },
];

const CategoryList = () => {
  return (
    <S.CategoryListWrapper>
      {categoryData.map((category) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          icon={category.icon}
          path={category.path}
        />
      ))}
    </S.CategoryListWrapper>
  );
};

export default CategoryList;
