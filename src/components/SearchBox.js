import React from 'react';
import styled from 'styled-components';

const SearchBox = () => {
  return (
    <SearchForm>
      <input type="text" placeholder="이름or닉네임을 입력하세요" autoFocus />
      <SearchButton>
        <span>검색</span>
      </SearchButton>
      <DetailButton>
        <span>상세검색</span>
      </DetailButton>
    </SearchForm>
  );
};

const SearchForm = styled.div`
  margin-top: 80px;
  right: 7%;
  justify-content: center;
  position: absolute;
  display: flex;

  input {

    position: relative;
    display: block;

    width: 300px;
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

  justify-content: center;
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
  background-color: var(--darkblue);
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
`;

export default SearchBox;
