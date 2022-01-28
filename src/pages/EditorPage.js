import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import styled from 'styled-components';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// Viewer
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

import Button from '@mui/material/Button';
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const EditorPage = () => {
  const editorRef = useRef();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          (async () => {
            let formData = new FormData();
            console.log(blob);
            formData.append('file', blob);
            console.log(formData);

            axios.defaults.withCredentials = true;
            const { data: url } = await axios.post(`image.do`, formData, {
              header: { 'content-type': 'multipart/formdata' },
            });
            callback(url, 'alt text');
          })();

          return false;
        });
    }
    return () => {};
  }, [editorRef]);

  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [hashArr, setHashArr] = useState([]);
  const [data, setData] = useState('');

  const onChangeAction = (e) => {
    if (e.target.name === 'titleInput') {
      setTitle(e.target.value);
    }
    if (e.target.name === 'tagInput') {
      setHashtag(e.target.value);
    }
  };

  const tagKeyUp = useCallback(
    (e) => {
      const HashWrapOuter = document.querySelector('.HashWrapOuter');
      const HashWrapInner = document.createElement('div');
      HashWrapInner.className = 'HashWrapInner';

      HashWrapInner.addEventListener('click', () => {
        HashWrapOuter?.removeChild(HashWrapInner);
        console.log(HashWrapInner.innerHTML);
        console.log(
          hashArr.filter((hashtag) => hashtag !== HashWrapInner.innerHTML),
        );
        setHashArr(
          hashArr.filter((hashtag) => hashtag !== HashWrapInner.innerHTML),
        );
      });

      if (e.keyCode === 13 && e.target.value.trim() !== '') {
        console.log('Enter Key 입력됨!', e.target.value);
        HashWrapInner.innerHTML = e.target.value;
        HashWrapOuter?.appendChild(HashWrapInner);
        setHashArr((hashArr) => [...hashArr, hashtag]);
        setHashtag('');
      }
    },
    [hashtag, hashArr],
  );

  const backButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    const getContent_md = editorInstance.getMarkdown();

    alert('저장하지 않은 데이터는 날라간다.');
  };

  const saveButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    const getContent_md = editorInstance.getMarkdown();

    alert('제목 입력');
    alert('내용 입력');
  };

  const submitButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    const getContent_md = editorInstance.getMarkdown();
    setData(getContent_html);

    console.log(hashtag);
    console.log(hashArr);
    // 저장시 제목, 태그(?), 내용(data) 서버전송 , 화면에서 조회(출력) 시 Viewer의 initialValue를 data 로 출력하도록 하자
    // 수정 기능을 대비해서 markdown 데이터도 저장 해야함 !
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <input
        type="text"
        style={{
          border: 'none',
          width: '100%',
          height: '50px',
          fontSize: '30px',
        }}
        placeholder="제목을 입력하세요."
        name="titleInput"
        value={title}
        onChange={onChangeAction}
      />
      <HashDivrap className="HashWrap">
        <div className="HashWrapOuter"></div>
        <input
          className="HashInput"
          type="text"
          style={{
            border: 'none',
            display: 'inline',
            height: '40px',
            fontSize: '25px',
          }}
          placeholder="태그를 입력하세요."
          name="tagInput"
          value={hashtag}
          onChange={onChangeAction}
          onKeyUp={tagKeyUp}
        />
      </HashDivrap>
      <br />
      <Editor
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        previewStyle="vertical"
        placeholder="글을 작성해보세요"
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        onChange={() => {
          const innerTxt = editorRef.current.getInstance().getHTML();
          setData(innerTxt);
        }}
        ref={editorRef}
      />
      <br />
      <Button onClick={backButton} variant="outlined" color="primary">
        <ArrowBackRoundedIcon />
        &nbsp; 뒤로가기
      </Button>
      {`  `}
      <div style={{ display: 'inline', float: 'right' }}>
        <Button onClick={saveButton} variant="outlined" color="secondary">
          <SaveAsRoundedIcon />
          &nbsp; 임시저장
        </Button>
        {`  `}
        <Button onClick={submitButton} variant="outlined" color="success">
          <EmailRoundedIcon />
          &nbsp; 등록하기
        </Button>
      </div>

      {/* <Viewer initialValue={저장된 값} /> */}
    </div>
  );
};

const HashDivrap = styled.div`
  margin-top: 24px;
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: -0.6px;
  color: #444241;
  border-bottom: 1.6px solid gray;
  padding: 2px 2px 8px 2px;

  .HashWrapOuter {
    display: flex;
    flex-wrap: wrap;
  }

  .HashWrapInner {
    margin-top: 5px;
    background: #ffeee7;
    border-radius: 56px;
    padding: 8px 12px;
    color: #ff6e35;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 20px;
    margin-right: 5px;
    cursor: pointer;
  }

  .HashInput {
    width: auto;
    margin: 10px;
    display: inline-flex;
    outline: none;
    cursor: text;
    line-height: 2rem;
    margin-bottom: 0.75rem;
    min-width: 8rem;
    border: none;
  }
`;

export default EditorPage;
