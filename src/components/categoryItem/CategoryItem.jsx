import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './CategoryItem.Style';

const CategoryItem = ({ name, icon, path }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(path);
  };

  return (
    <S.CategoryItemWrapper onClick={handleItemClick}>
      <S.CategoryIconWrapper>
        <S.CategoryIcon src={icon} alt={`${name} icon`} />
      </S.CategoryIconWrapper>
      <S.CategoryTextWrapper>
        <S.CategoryText>{name}</S.CategoryText>
      </S.CategoryTextWrapper>
    </S.CategoryItemWrapper>
  );
};

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CategoryItem;
