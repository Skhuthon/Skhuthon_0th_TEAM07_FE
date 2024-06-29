import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  margin-bottom: 20px;
  font-size: 23px;
  border: 1px solid #ddd;
  border-radius: 15px;

  &::placeholder {
    color: #cac5b4;
    opacity: 1;
  }
`;

export const SearchTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #f7be3b;
  margin-bottom: 15px;
  align-items: start;
  padding-left: 10px;
`;

export const SearchList = styled.div`
  width: 100%;
`;

export const SearchItem = styled.div`
  background: #fbf3c9;
  color: #2d1914;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fffde7;
  }
`;

export const SearchLoading = styled.div`
  padding-top: 20px;
`;
