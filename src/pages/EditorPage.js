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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningIcon from '@mui/icons-material/Warning';

const EditorPage = () => {
  const editorRef = useRef();
  const [title, setTitle] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [hashArr, setHashArr] = useState([]);
  const [data, setData] = useState('');
  const [dialog, setDialog] = useState(false);

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
      if (e.keyCode === 13 && e.target.value.trim() !== '') {
        if (!hashArr.includes(hashtag)) {
          setHashArr((hashArr) => [...hashArr, hashtag]);
        }
        setHashtag('');
      }
    },
    [hashtag, hashArr],
  );

  const tagRemove = (tagName) => {
    setHashArr(hashArr.filter((hashtag) => hashtag !== tagName));
  };

  const handleClose = () => {
    setDialog(false);
  };

  const saveButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    const getContent_md = editorInstance.getMarkdown();

    if (title === '') {
      alert('제목입력');
      return;
    }

    if (getContent_md === '') {
      alert('본문입력');
    }
    setData(getContent_html);
    // 내용전송 함수
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
      <input
        type="text"
        style={{
          border: 'none',
          width: '100%',
          height: '50px',
          fontSize: '30px',
          outline: 'none',
        }}
        placeholder="제목을 입력하세요."
        name="titleInput"
        value={title}
        onChange={onChangeAction}
      />
      <HashDivrap className="HashWrap">
        {hashArr.map((tag) => (
          <div className="HashWrapInner" onClick={() => tagRemove(tag)}>
            {tag}
          </div>
        ))}

        <input
          className="HashInput"
          type="text"
          style={{
            border: 'none',
            display: 'inline',
            height: '40px',
            fontSize: '25px',
          }}
          placeholder="태그를 입력하세요. (입력 후 엔터 !)"
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
      <Button
        onClick={() => {
          setDialog(true);
        }}
        variant="outlined"
        color="primary"
      >
        <ArrowBackRoundedIcon />
        &nbsp; <div>뒤로가기</div>
      </Button>
      {`  `}
      <div style={{ display: 'inline', float: 'right' }}>
        <Button onClick={saveButton} variant="outlined" color="secondary">
          <SaveAsRoundedIcon />
          &nbsp; <div>임시저장</div>
        </Button>
        {`  `}
        <Button onClick={submitButton} variant="outlined" color="success">
          <EmailRoundedIcon />
          &nbsp; <div>등록하기</div>
        </Button>
      </div>

      <Dialog
        open={dialog}
        onClose={() => {
          setDialog(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div style={{ fontSize: '20px', color: 'red' }}>저장 안내</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div>저장하지 않은 내용은 삭제됩니다. 뒤로가시겠습니까 ?</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <div>뒤로가기</div>
          </Button>
          <Button onClick={handleClose} autoFocus>
            <div>취소하기</div>
          </Button>
        </DialogActions>
      </Dialog>

      {/* <Viewer initialValue={저장된 값} /> */}
    </div>
  );
};

const HashDivrap = styled.div`
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: -0.6px;
  color: #444241;
  padding: 2px 2px 8px 2px;

  .HashWrapOuter {
    display: flex;
    flex-wrap: wrap;
  }

  .HashWrapInner {
    margin-top: 5px;
    background: #d1ddff;
    border-radius: 56px;
    padding: 8px 12px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 10px;
    margin-right: 5px;
    cursor: pointer;
  }

  .HashInput {
    width: 400px;
    margin-top: 10px;
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
