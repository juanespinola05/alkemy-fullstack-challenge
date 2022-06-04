import styled from 'styled-components'

export const Container = styled.li`
  margin-top: 13px;
  width: 100%;
  height: 55px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  & > div{
    display: flex;
    gap: 10px
  }
`
export const Image = styled.div`
  height: 45px;
  width: 45px;
  padding: 8px;
  background-color: ${({ type }) => type.bg};
  border-radius: 50%;
  span {
    transform: scaleY(${({ type }) => type.scaleY});
  }
`
export const Concept = styled.p`
  font-weight: 700;
  font-size: 18px;
`
export const Amount = styled.p`
  font-weight: 900;
  color: ${({ type }) => type.color};

`
