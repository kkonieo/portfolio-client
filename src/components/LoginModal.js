import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

const LoginModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (props.open) {
      console.log('IN!');
      setIsOpen(true);
    }
  }, [props.open]);
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <div style={{ fontSize: '30px', textAlign: 'center' }}>로그인</div>
        <hr></hr>
      </DialogTitle>
      <DialogContent style={{ width: '350px' }}>
        <Button
          variant="contained"
          style={{
            width: '100%',
            backgroundColor: 'black',
            marginBottom: '10px',
          }}
        >
          <GitHubIcon />
          <span style={{ marginLeft: '5px' }}>Github 아이디로 로그인하기</span>
        </Button>
        <Button
          variant="contained"
          style={{
            width: '100%',
            backgroundColor: '#FAE100',
            marginBottom: '10px',
          }}
        >
          <img alt="" src="/Image/kakao.png" width="20px" />
          <span style={{ marginLeft: '5px', color: '#3C1E1E' }}>
            kakao 아이디로 로그인하기
          </span>
        </Button>
        <Button
          variant="outlined"
          style={{
            width: '100%',
            backgroundColor: 'white',
            marginBottom: '10px',
          }}
          color="success"
        >
          <img alt="" src="/Image/naver.png" width="20px" />
          <span style={{ marginLeft: '5px', color: '#1EC800' }}>
            naver 아이디로 로그인하기
          </span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
