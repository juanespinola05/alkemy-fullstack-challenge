import styled from 'styled-components'
import { devices } from '../../GlobalStyles'

export const AppContainer = styled.div`
  margin-inline: auto;
  width: 100%;
  padding-inline: 15px;
  display: grid;
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
  gap: 30px;
  @media (${devices.tablet}) {
    width: 750px;
  }
  @media (${devices.desktop}) {
    width: clamp(970px, 90%, 1170px);
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 60px 300px 150px 400px;
    grid-template-areas:
    '. . . .'
    'total total form form'
    'small1 small2 small3 small4'
    'operations operations grafic grafic'
  }

`
