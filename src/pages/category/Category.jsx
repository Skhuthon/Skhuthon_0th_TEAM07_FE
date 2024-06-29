import React from 'react';
import * as S from './Category.Style';
import Logo from '../../components/logo/Logo';
import CategoryList from '../../components/categoryList/CategoryList';

const Category = () => {
  return (
    <S.CategoryContainer>
      <Logo />
      <CategoryList />
    </S.CategoryContainer>
  );
};

export default Category;
