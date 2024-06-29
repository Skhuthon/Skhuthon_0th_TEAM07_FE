import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './ActiveButton.Style';

const ActiveButton = ({ title, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (navigateTo === '-1') {
      navigate(-1);
    } else {
      navigate(navigateTo);
    }
  };

  return (
    <S.ButtonWrapper>
      <S.ActiveButton onClick={handleNavigate}>{title}</S.ActiveButton>
    </S.ButtonWrapper>
  );
};

ActiveButton.propTypes = {
  title: PropTypes.string.isRequired,
  navigateTo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default ActiveButton;
