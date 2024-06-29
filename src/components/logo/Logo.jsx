import React from 'react';
import * as S from './Logo.Style';
import { useNavigate } from 'react-router-dom';
import MainLogo from '../../assets/images/image-text-logo.png';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <S.LogoWrapper onClick={() => navigate('/')}>
      <S.LogoContainer
        src={MainLogo}
        alt="Estrella"
        onClick={handleLogoClick}
      />
    </S.LogoWrapper>
  );
};

export default Logo;
