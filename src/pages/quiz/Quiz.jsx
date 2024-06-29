import React from 'react';
import * as S from './Quiz.Style';

const Quiz = () => {
  return (
    <S.QuizContainer>
      <S.QuestionBox>
        <S.QuestionText>Q1. 칵테일을 언제 마시는 걸 선호하나요?</S.QuestionText>
      </S.QuestionBox>
      <S.OptionWrapper>
        <S.OptionBox>
          <S.OptionText>1. 식사 전(식욕 증진을 위해)</S.OptionText>
        </S.OptionBox>
        <S.OptionBox>
          <S.OptionText>2. 식사 전(상쾌한 맛을 즐기기 위해)</S.OptionText>
        </S.OptionBox>
        <S.OptionBox>
          <S.OptionText>3. 식사에 상관없이</S.OptionText>
        </S.OptionBox>
        <S.OptionBox>
          <S.OptionText>4. 식후에</S.OptionText>
        </S.OptionBox>
      </S.OptionWrapper>
    </S.QuizContainer>
  );
};

export default Quiz;
