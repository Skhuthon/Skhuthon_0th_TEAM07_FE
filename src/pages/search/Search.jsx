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
    const fetchSearches = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/cocktails`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        setPosts(response.data.cocktails); // 응답 데이터 구조에 맞게 수정
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearches();
  }, []);

  const filteredPosts = searchTerm
    ? posts.filter(
        (post) =>
          post.korName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.engName.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  const handleSearchClick = (post) => {
    navigate(`/cocktail/${post.id}`);
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
    </S.SearchContainer>
  );
};

export default Search;

// import React, { useState, useEffect } from 'react';
// import * as S from './Search.Style';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Loading from '../../components/loading/Loading';

// const Search = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       if (!searchTerm) {
//         setSearchResults([]);
//         return;
//       }

//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BACKEND_URL}/cocktails/search`,
//           {
//             params: { name: searchTerm },
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           },
//         );
//         const ids = response.data;
//         if (Array.isArray(ids)) {
//           const results = await Promise.all(ids.map(fetchCocktailDetails));
//           setSearchResults(results.filter((result) => result !== null));
//         } else {
//           console.error('Response data is not an array:', ids);
//           setSearchResults([]);
//         }
//       } catch (error) {
//         console.error('Error fetching search results:', error);
//         setSearchResults([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchCocktailDetails = async (id) => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_BACKEND_URL}/cocktails/${id}`,
//         );
//         return response.data;
//       } catch (error) {
//         console.error('Error fetching cocktail details:', error);
//         return null;
//       }
//     };

//     fetchSearchResults();
//   }, [searchTerm]);

//   const handleSearchClick = (post) => {
//     navigate(`/cocktail/${post.id}`);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <S.SearchContainer>
//       <S.SearchInput
//         type="text"
//         name="search"
//         placeholder="원하는 칵테일을 검색해보세요!"
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       {searchTerm && (
//         <>
//           <S.SearchTitle>검색 결과</S.SearchTitle>
//           {loading ? (
//             <S.SearchLoading>
//               <Loading />
//             </S.SearchLoading>
//           ) : (
//             <S.SearchList>
//               {searchResults.map((post) => (
//                 <S.SearchItem
//                   key={post.id}
//                   onClick={() => handleSearchClick(post)}
//                 >
//                   {post.korName} / {post.engName}
//                 </S.SearchItem>
//               ))}
//             </S.SearchList>
//           )}
//         </>
//       )}
//     </S.SearchContainer>
//   );
// };

// export default Search;
