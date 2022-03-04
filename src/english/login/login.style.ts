import styled from '@emotion/styled';

export const Form = styled.form`
  position: fixed;
  width: 200px;
  height: 96px;
  left: calc(50vw - 100px);
  top: calc(50vh - 48px);

  input {
    width: 100%;
    height: 32px;
    padding-inline: 16px;
    letter-spacing: 4px;
    margin-bottom: 4px;
  }

  button {
    width: 100%;
    height: 24px;
  }
`;
