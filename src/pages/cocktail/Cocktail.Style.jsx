import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CocktailContainer = styled.div`
  padding-top: 30px;
  margin-top: 56px;
  width: 325px;
  margin: 0 auto;
`;

export const CocktailKorTitle = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const CocktailEngTitle = styled.h2`
  color: #f7be3b;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CocktailImage = styled.img`
  width: 325px;
  border: 1px solid #1f2c3a;
  border-radius: 10px;
  display: block;
  margin: 20px auto 0;
`;

export const CocktailContentWrapper = styled.div`
  margin-top: 25px;
  width: 325px;
`;

export const CocktailDescription = styled.div`
  margin-bottom: 15px;
`;

export const CocktailDetail = styled.div`
  color: #ffffff;
  font-size: 12px;
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
`;

export const DetailItem = styled.span`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Keyword = styled.span`
  color: #f7be3b;
  font-weight: bold;
`;

export const CocktailContent = styled.div`
  color: white;
  font-size: 14px;
  margin-top: 8px;
  white-space: pre-line;
  line-height: 1.5;
  margin-bottom: 20px;
`;
