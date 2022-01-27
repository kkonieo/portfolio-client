import React from 'react';
import styled from 'styled-components';

const SearchBox = () => {
  return (
    <SearchForm>
      <input type="text" placeholder="이름or닉네임을 입력하세요" autoFocus />
    </SearchForm>
  );
};

const SearchForm = styled.div`
  input {
    width: 300px;
    height: 30px;
    font-size; 20px;
  }
`;
export default SearchBox;
