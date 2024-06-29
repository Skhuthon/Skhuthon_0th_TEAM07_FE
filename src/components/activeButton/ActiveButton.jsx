import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ActiveButton.Style';

const ActiveButton = ({ title, navigateTo }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(navigateTo);
  };

  return (
    <S.ButtonWrapper>
      <S.ActiveButton onClick={handleNavigate}>{title}</S.ActiveButton>
    </S.ButtonWrapper>
  );
};

export default ActiveButton;
