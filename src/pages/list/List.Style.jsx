import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 325px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export const ListName = styled.div`
  width: 155px;
  height: 34px;
  border-radius: 20px;
  margin: 25px auto 50px auto;
  background-color: #f7be3b;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.5px;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 15px;
`;

export const ListThumbnail = styled.img`
  width: 100%;
  height: 105px;
  object-fit: cover;
  margin: 0;
  display: block;
`;

export const InfoContainer = styled.div`
  padding: 9px;
  background-color: #48b0d9;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  font-size: 12px;
`;

export const ListTitle = styled.h2`
  font-size: 13px;
  margin: 0;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ListLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ListItems = styled.div`
  border-radius: 16px;
  overflow: hidden;
  outline: 2px solid #48b0d9;
  width: 155px;
  height: 155px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    outline: 2px solid #398cbf;
    ${InfoContainer} {
      background-color: #398cbf;
    }
    ${ListTitle} {
      color: white;
    }
  }
`;
