import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './List.Style';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const ChangeCateNameToId = (category) => {
  const categoryIds = {
    'aperitif-cocktail': 1,
    'before-dinner-cocktail': 2,
    'all-day-type-cocktail': 3,
    'after-dinner-cocktail': 4,
  };

  return categoryIds[category] || null;
};

const ChangeCateName = (category) => {
  const categoryNames = {
    'aperitif-cocktail': '식전(식욕 증진)',
    'before-dinner-cocktail': '식전(드라이)',
    'all-day-type-cocktail': 'All Day',
    'after-dinner-cocktail': '식후(디저트)',
  };

  return categoryNames[category] || '알 수 없는 카테고리';
};

const List = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/cocktails/${id}`);
  };

  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const categoryId = ChangeCateNameToId(category);
        if (!categoryId) {
          throw new Error('유효하지 않은 카테고리입니다.');
        }
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/cocktails/categories/${categoryId}`,
        );
        setPosts(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 데 실패했습니다:', error);
        setError('데이터를 불러오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [category]);

  if (isLoading) {
    return (
      <S.ListLoding>
        <Loading />
      </S.ListLoding>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (posts.length === 0) {
    return <div>해당 카테고리에 대한 게시물이 없습니다.</div>;
  }

  return (
    <S.ListWrapper>
      <S.ListName>{ChangeCateName(category)}</S.ListName>
      <S.ListContainer>
        {posts.map((post) => (
          <S.ListItems key={post.id} onClick={() => handlePostClick(post.id)}>
            <S.ListThumbnail src={post.image} alt={post.korName} />
            <S.InfoContainer>
              <S.ListTitle>{post.korName}</S.ListTitle>
              <S.ListTitle>{post.engName}</S.ListTitle>
            </S.InfoContainer>
          </S.ListItems>
        ))}
      </S.ListContainer>
    </S.ListWrapper>
  );
};

export default List;
