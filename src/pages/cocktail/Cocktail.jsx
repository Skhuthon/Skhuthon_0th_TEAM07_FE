import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './Cocktail.Style';
import TopBar from '../../components/topBar/TopBar';
import Loading from '../../components/loading/Loading';

const Cocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManualData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/cocktails/${id}`,
        );
        setCocktail(response.data);
      } catch (error) {
        console.error('칵테일을 불러오는데 실패했습니다:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchManualData();
  }, [id]);

  if (isLoading) {
    return (
      <S.LoadingWrapper>
        <Loading />
      </S.LoadingWrapper>
    );
  }

  return (
    <S.CocktailContainer>
      <TopBar onBack={() => navigate(-1)} />
      <S.CocktailKorTitle>{cocktail.korName}</S.CocktailKorTitle>
      <S.CocktailEngTitle>{cocktail.engName}</S.CocktailEngTitle>
      <S.CocktailImage src={cocktail.image} alt={cocktail.engName} />
      <S.CocktailContentWrapper>
        <S.CocktailDescription>
          <S.CocktailDetail>
            <S.Keyword>재료: </S.Keyword> {cocktail.ingredients}
          </S.CocktailDetail>
          <S.CocktailDetail>
            <S.Keyword>장식: </S.Keyword> {cocktail.garnish}
          </S.CocktailDetail>
          <S.CocktailDetail>
            <S.DetailItem>
              <S.Keyword>위치: </S.Keyword> {cocktail.location}
            </S.DetailItem>
            <S.DetailItem>
              <S.Keyword>색: </S.Keyword> {cocktail.color}
            </S.DetailItem>
            <S.DetailItem>
              <S.Keyword>도수: </S.Keyword> {cocktail.abv}
            </S.DetailItem>
          </S.CocktailDetail>
        </S.CocktailDescription>
        <S.Keyword>즐기는법</S.Keyword>
        <S.CocktailContent>{cocktail.content}</S.CocktailContent>
      </S.CocktailContentWrapper>
    </S.CocktailContainer>
  );
};

export default Cocktail;
