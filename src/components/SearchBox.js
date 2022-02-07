import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBox = ({ searchTerm, updateSearch }) => {
  const searchHandler = (event) => {
    updateSearch(event.currentTarget.value);
    // props.refreshFunction(event.currentTarget.value);
  };

  return (
    <SearchForm>
      <input
        type="text"
        placeholder="이름or닉네임을 입력하세요"
        autoFocus
        onChange={searchHandler}
        value={searchTerm}
      />
      {/* <SearchButton>
        <p>검색</p>
      </SearchButton> */}
      <DetailButton>
        <p>상세검색</p>
      </DetailButton>
    </SearchForm>
  );
};

const SearchForm = styled.div`
  margin-top: 80px;
  display: flex;
  input {

    position: relative;
    display: block;

    width: 200px;
    height: 30px;
    font-size; 25px;
    color: #ffffff;

    background-color:transparent;
    text-decoration: none;

    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #ffffff;

    align-items: flex-start;
  }

  input:: placeholder {
    color: #ffffff;
    outline: none;
  }

  input:focus {
    outline: none;
  }

  input:hover {
    border-bottom: 2px solid var(--darkblue);
  }
`;

const SearchButton = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  background-color: #ffffff;
  line-height: 2px;

  text-align: center;
  color: var(--darkblue);
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: var(--darkblue);
  }
`;

const DetailButton = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  line-height: 2px;

  background-color: var(--darkblue);
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
`;

export default SearchBox;
