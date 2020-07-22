//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Data
import { colors } from './data/styles/styleVars'



//STYLES
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
const RoasterPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${colors.pink};
  h4{
    font-family: 'AtlasGrotesk-Regular';
    font-size: 40px;
    color: ${colors.red};
    letter-spacing: 0;
    line-height: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }
`
const ShopPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${colors.white};
`

function App() {
  return (
    <Container>
      <RoasterPanel>
        <h4>Roaster</h4>
      </RoasterPanel>
      <ShopPanel></ShopPanel>
    </Container>
  )
}

export default App
