import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './NavigationBar.Style';

// 홈 아이콘 임포트
import HomeIcon from '../../assets/icons/icon-navigation-home.png';
import HomeIconActive from '../../assets/icons/icon-navigation-home-active.png';

// 검색 아이콘 임포트
import SearchIcon from '../../assets/icons/icon-navigation-search.png';
import SearchIconActive from '../../assets/icons/icon-navigation-search-active.png';

// 카테고리 아이콘 임포트
import CategoryIcon from '../../assets/icons/icon-navigation-category.png';
import CategortIconActive from '../../assets/icons/icon-navigation-category-active.png';

// 퀴즈 아이콘 임포트
import QuizIcon from '../../assets/icons/icon-navigation-quiz.png';
import QuizIconActive from '../../assets/icons/icon-navigation-quiz-active.png';

// 중앙 메인 로고 임포트
import Logo from '../../assets/images/image-navigation-logo.png';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <S.NavigationBarWrapper>
      <S.NavigationBarContainer>
        {/* 홈 버튼 컴포넌트 */}
        <S.NavigationBarMenu onClick={() => navigate('/')}>
          <S.NavigationBarIcon
            src={isActive('/') ? HomeIconActive : HomeIcon}
            alt="홈"
          />
          <S.NavigationBarText $active={isActive('/')}>
            Home
          </S.NavigationBarText>
        </S.NavigationBarMenu>

        {/* 검색 버튼 컴포넌트 */}
        <S.NavigationBarMenu onClick={() => navigate('/search')}>
          <S.NavigationBarIcon
            src={isActive('/search') ? SearchIconActive : SearchIcon}
            alt="Search"
          />
          <S.NavigationBarText $active={isActive('/search')}>
            Search
          </S.NavigationBarText>
        </S.NavigationBarMenu>

        {/* 중앙 메인 이미지 로고 */}
        <S.NavigationBarMenu>
          <S.NavigationBarLogo src={Logo} alt="Logo" />
        </S.NavigationBarMenu>

        {/* 카테고리 버튼 컴포넌트 */}
        <S.NavigationBarMenu onClick={() => navigate('/category')}>
          <S.NavigationBarIcon
            src={isActive('/category') ? CategortIconActive : CategoryIcon}
            alt="Category"
          />
          <S.NavigationBarText $active={isActive('/category')}>
            Category
          </S.NavigationBarText>
        </S.NavigationBarMenu>

        {/* 퀴즈 버튼 컴포넌트 */}
        <S.NavigationBarMenu onClick={() => navigate('/start')}>
          <S.NavigationBarIcon
            src={isActive('/start') ? QuizIconActive : QuizIcon}
            alt="Quiz Start"
          />
          <S.NavigationBarText $active={isActive('/start')}>
            Quiz
          </S.NavigationBarText>
        </S.NavigationBarMenu>
      </S.NavigationBarContainer>
    </S.NavigationBarWrapper>
  );
};

export default NavigationBar;
