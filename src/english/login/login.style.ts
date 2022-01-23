import styled from '@emotion/styled'

export const Form = styled.form`
  position: fixed;
  width: 200px;
  height: 60px;
  left: calc(50vw - 100px);
  top: calc(50vh - 30px);
  
  input {
    width: 100%;
    height: 30px;
    padding-inline: 16px;
    letter-spacing: 8px;
  }
  
  button {
    width: 100%;
    height: 24px;
    margin-top: 6px;
  }
`
