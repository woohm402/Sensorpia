import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  height: 67px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  color: black;
  font-weight: bold;
  z-index: 2;
  transition: 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
