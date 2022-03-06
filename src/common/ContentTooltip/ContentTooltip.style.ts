import styled from '@emotion/styled';

export const Pop = styled.article`
  position: absolute;
  height: 80px;
  width: 200px;
  top: -78px;
  left: 0;
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  z-index: 9999;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px gray;

  input {
    margin-bottom: 4px;
    width: 100%;
  }

  button {
    float: right;
  }
`;

export const Wrapper = styled.div`
  display: block;
  position: absolute;
  width: 40px;
  right: 4px;
`;
