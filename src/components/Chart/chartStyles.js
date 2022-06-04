import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`
export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  font-size: 18px;
  font-weight: 700;
  & > li {
    position: relative;
  }
  & > li::before {
    position: absolute;
    content: '';
    left: -25px;
    top: 8px;
    width: 20px;
    height: 10px;
    border-radius: 10px;
    background-color: var(--color-main);
  }
`
