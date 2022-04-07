import React from 'react';
import styled from 'styled-components';

// icons
import { BsXLg } from 'react-icons/bs';

const Modal = ({ setOpenModal, children, ...rest }) => {
  return (
    <ModalBackground>
      <ModalContainer {...rest}>
        <TitleCloseBtn>
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <BsXLg color="var(--main)" />
          </Button>
        </TitleCloseBtn>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  z-index: 30;
`;

const ModalContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  background-color: var(--modalgray);
  border: 1px solid var(--lightgray);
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  display: flex;
  flex-direction: column;
  padding: 25px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  ${({ theme }) => theme.device.mobile} {
    min-width: 20rem;
    min-height: 20rem;
  }
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.fontSize};
`;

export default Modal;
