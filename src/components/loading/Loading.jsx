import React from 'react';
import * as S from './Loading.Style';
import LoadingImage from '../../assets/images/image-navigation-logo.png';

const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingImage src={LoadingImage} alt="로딩중..." />
      <S.LoadingText>잠시만 기다려 주세요!</S.LoadingText>
    </S.LoadingContainer>
  );
};

export default Loading;
