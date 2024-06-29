import styled from 'styled-components';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  margin: 0 auto;
`;

export const QuestionBox = styled.div`
  background-color: #79bbe9;
  width: 325px;
  height: 150px;
  margin-top: 60px;
  border: 1px solid #79bbe9;
  border-radius: 20px;
`;

export const QuestionText = styled.h5`
  font-size: 18px;
  line-height: 150px;
  text-align: center;
  align-items: center;
`;

export const OptionWrapper = styled.div`
  margin-top: 20px;
`;

export const OptionBox = styled.div`
  background-color: #f7be3b;
  width: 325px;
  height: 50px;
  margin: 25px 0 25px 0;
  border: 1px solid #f7be3b;
  border-radius: 20px;
`;

export const OptionText = styled.h5`
  margin-left: 25px;
  margin-top: 17px;
`;
