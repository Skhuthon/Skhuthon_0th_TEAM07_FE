import React from 'react';
import * as S from './Quiz.Style';

import LogoTest from '../../components/logo/Logo';

const Quiz = () => {
  return (
    <S.QuizContainer>
      <LogoTest />
      <S.QuizTitleTest>Quiz</S.QuizTitleTest>
    </S.QuizContainer>
  );
};

export default Quiz;
