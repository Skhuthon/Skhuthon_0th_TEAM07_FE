import React, { useState, useEffect } from 'react';
import * as S from './Search.Style';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/loading/Loading';

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPages = async () => {
      setLoading(true);
      let allPosts = [];
      let page = 0;
      let hasMore = true;

      try {
        while (hasMore) {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/cocktails`,
            {
              params: {
                page,
                size: 10,
              },
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );
          allPosts = [...allPosts, ...response.data.cocktails];
          page += 1;
          hasMore = page < response.data.totalPages;
        }
        setPosts(allPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPages();
  }, []);

  const filteredPosts = searchTerm
    ? posts.filter(
        (post) =>
          post.korName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.engName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const handleSearchClick = (post) => {
    navigate(`/cocktails/${post.id}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        name="search"
        placeholder="원하는 칵테일을 검색해보세요!"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <>
          <S.SearchTitle>검색 결과</S.SearchTitle>
          {loading ? (
            <S.SearchLoading>
              <Loading />
            </S.SearchLoading>
          ) : (
            <S.SearchList>
              {filteredPosts.map((post) => (
                <S.SearchItem
                  key={post.id}
                  onClick={() => handleSearchClick(post)}
                >
                  {post.korName} / {post.engName}
                </S.SearchItem>
              ))}
            </S.SearchList>
          )}
        </>
      )}
      {/* 검색어가 없을 때 전체 목록을 보이지 않도록 주석 처리 */}
      {/* {!searchTerm && allLoaded && (
        <S.SearchList>
          {posts.map((post) => (
            <S.SearchItem
              key={post.id}
              onClick={() => handleSearchClick(post)}
            >
              {post.korName} / {post.engName}
            </S.SearchItem>
          ))}
        </S.SearchList>
      )} */}
    </S.SearchContainer>
  );
};

export default Search;
