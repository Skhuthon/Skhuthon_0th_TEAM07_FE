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
      <S.CocktailTitle>{cocktail.korName}</S.CocktailTitle>
      <S.CocktailTitle>{cocktail.engName}</S.CocktailTitle>
    </S.CocktailContainer>
  );
};

export default Cocktail;
