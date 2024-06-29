import React from 'react';
import * as S from './Start.Style';
import LogoImage from '../../assets/images/image-navigation-logo.png';
import ActiveButton from '../../components/activeButton/ActiveButton';

const Start = () => {
  return (
    <S.StartContainer>
      <S.Header>
        당신의 칵테일을
        <br /> 골라드립니다!
      </S.Header>
      <S.StartLogo src={LogoImage} alt="Logo" />
      <ActiveButton title="Start" navigateTo="/quiz" />
    </S.StartContainer>
  );
};

export default Start;
