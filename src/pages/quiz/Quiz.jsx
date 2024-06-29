import React from 'react';
import * as S from './Quiz.Style';

import LogoTest from '../../components/logo/Logo';
import LoadingTest from '../../components/loading/Loading';

const Quiz = () => {
  return (
    <S.QuizContainer>
      <LogoTest />
      <LoadingTest />
      <S.QuizTitleTest>Quiz</S.QuizTitleTest>
    </S.QuizContainer>
  );
};

export default Quiz;
