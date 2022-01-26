import React, { useState, useRef } from 'react';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

// Viewer
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

import Button from '@mui/material/Button';
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

const EditorPage = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [data, setData] = useState('');

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputHashtag = (e) => {
    // setTitle(e.target.value);
    setHashtag(e.target.value);
  };
  const tagKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      let tag = `<div style="display:inline">${hashtag}</div>`;
      setHashtag('');
      document.getElementById('hashtag').innerHTML += tag;
    }
  };

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

    // 저장시 제목, 태그(?), 내용(data) 서버전송 , 화면에서 조회(출력) 시 Viewer의 initialValue를 data 로 출력하도록 하자
    // 수정 기능을 대비해서 markdown 데이터도 저장 해야함 !
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <TextField
        id="outlined-basic"
        label="제목"
        size="large"
        fullWidth="true"
        variant="outlined"
        placeholder="제목을 입력하세요"
        name="title"
        value={title}
        onChange={inputTitle}
      />
      <br />
      <br />
      <div id="hashtag">
        <TextField
          id="outlined-basic"
          label="태그"
          size="small"
          fullWidth="true"
          variant="outlined"
          placeholder="태그를 입력하세요"
          name="hashtag"
          value={hashtag}
          onChange={inputHashtag}
          onKeyPress={tagKeyPress}
        />
      </div>
      <br />
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

        <Chip label="oooooo"></Chip>
      </div>

      {/* <Viewer initialValue={저장된 값} /> */}
    </div>
  );
};

export default EditorPage;
