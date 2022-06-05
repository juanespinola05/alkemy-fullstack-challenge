import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  & > div {
    width: 320px;
    height: 350px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`
export const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  & > div input {
    margin-top: 6px;
  }
  & > button {
    margin: 0 auto
  }
`
