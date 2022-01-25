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

const EditorPage = () => {
  const editorRef = useRef();
  const [data, setData] = useState('none');

  const submitButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    console.log('--마크다운--');
    console.log(getContent_md);
    const getContent_html = editorInstance.getHTML();
    setData(getContent_html);
    console.log('--HTML--');
    console.log(getContent_html);

    alert(data);
    // 저장시 제목, 태그(?), 내용(data) 서버전송 , 화면에서 조회(출력) 시 Viewer의 initialValue를 data 로 출력하도록 하자
  };

  return (
    <div style={{ width: '100%', height: '100%', padding: '50px' }}>
      <Editor
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        previewStyle="vertical"
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        onChange={() => {
          const innerTxt = editorRef.current.getInstance().getHTML();
          setData(innerTxt);
        }}
        ref={editorRef}
      />
      <button onClick={submitButton}>전송</button>

      {/* <Viewer initialValue={저장된 값} /> */}
    </div>
  );
};

export default EditorPage;
