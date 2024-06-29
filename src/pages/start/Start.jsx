import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Start.Style';
import LogoImage from '../../assets/images/image-navigation-logo.png';
import ActiveButton from '../../components/activeButton/ActiveButton';

const Start = () => {
  const navigate = useNavigate();

  return (
    <S.StartContainer>
      <S.StartLogo src={LogoImage} alt="Logo" />
      <ActiveButton title="start" navigateTo="/quiz" />
    </S.StartContainer>
  );
};

export default Start;
