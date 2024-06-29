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
        <S.CocktailLocation>위치: {cocktail.location}</S.CocktailLocation>
        <S.CocktailIngredient>
          재료: {cocktail.ingredients}
        </S.CocktailIngredient>
        <S.CocktailGarnish>장식: {cocktail.garnish}</S.CocktailGarnish>
        <S.CocktailContent>레시피: {cocktail.content}</S.CocktailContent>
        <S.CocktailColor>색: {cocktail.color}</S.CocktailColor>
        <S.CocktailAbv>도수: {cocktail.abv}</S.CocktailAbv>
      </S.CocktailContentWrapper>
    </S.CocktailContainer>
  );
};

export default Cocktail;
