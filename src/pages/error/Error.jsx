import React from 'react';
import * as S from './Error.Style';
import Logo from '../../components/logo/Logo';
import ActiveButton from '../../components/activeButton/ActiveButton';

const ErrorPage = () => {
  return (
    <S.ErrorWrapper>
      <Logo />
      <S.ErrorContainer>
        <S.ErrorTitle>다시 한번 확인해주세요!</S.ErrorTitle>
        <S.ErrorText>
          여긴 아무것도 없는 곳이에요!
          <br />
          아래의 버튼을 눌러서 돌아가주세요!
        </S.ErrorText>
        <ActiveButton title="돌아가기" navigateTo="-1" />
      </S.ErrorContainer>
    </S.ErrorWrapper>
  );
};

export default ErrorPage;
