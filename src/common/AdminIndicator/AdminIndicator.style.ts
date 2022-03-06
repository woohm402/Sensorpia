import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  z-index: 2;
  transition: 0.2s;
  text-align: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const LogoutButton = styled.button`
  width: 80px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transition: 0.2s all;

  &:hover {
    box-shadow: 0 2px 4px black;
  }
`;

export const SaveButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 8px;
  transition: 0.2s all;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 2px 4px black;
  }
`;
