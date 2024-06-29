import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 네비게이션 바 임포트
import NavigationBar from './components/NavigationBar/NavigationBar';

// 페이지 임포트
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Category from './pages/category/Category';
import Quiz from './pages/quiz/Quiz';
import Start from './pages/start/Start';
import List from './pages/list/List';
import Cocktail from './pages/cocktail/Cocktail';
import Error from './pages/error/Error';

const AppWrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const AppContainer = styled.div`
  background-color: #1f2c3a;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 90px);
  -webkit-overflow-scrolling: touch;
`;

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:category" element={<List />} />
          <Route path="/cocktails/:id" element={<Cocktail />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/start" element={<Start />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AppContainer>
      <NavigationBar />
    </AppWrapper>
  );
};

export default App;
