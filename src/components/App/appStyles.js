import styled from 'styled-components'

export const AppContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 400px repeat(2, 200px) repeat(3, 400px);
  grid-template-areas:
  '. .'
  'total total'
  'small1 small2'
  'small3 small4'
  'form form'
  'grafic grafic'
  'operations operations';
  gap: 15px;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 60px 300px 150px 400px;
    grid-template-areas:
    '. . . .'
    'total total form form'
    'small1 small2 small3 small4'
    'operations operations grafic grafic'
  }
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }

`
