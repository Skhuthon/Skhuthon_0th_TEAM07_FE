import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './HomeItem.Style';

const HomeItem = ({ name, icon, path }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(path);
  };
  return (
    <S.HomeItemWrapper onClick={handleItemClick}>
      <S.MenuIconWrapper>
        <S.MenuIcon src={icon} alt={`${name} icon`} />
      </S.MenuIconWrapper>
      <S.MenuTextWrapper>
        <S.MenuText>{name}</S.MenuText>
      </S.MenuTextWrapper>
    </S.HomeItemWrapper>
  );
};

HomeItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default HomeItem;
