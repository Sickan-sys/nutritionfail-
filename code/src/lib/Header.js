import React from 'react'
//import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.section`
background-color: lightblue;
width: 100%;
padding: 2em;
display: flex;
color: #fff;
justify-content: center;
background-image: url("https://previews.123rf.com/images/jpkirakun/jpkirakun1806/jpkirakun180600207/103664696-backdrop-and-texture-of-green-leaves-natural-wall-.jpg");
`

export const Header = () => {
    return (
      <HeaderContainer>
          <h1>VeggieChecker</h1>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" aria-hidden="true" focusable="false"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></div>
      </HeaderContainer>
    )
  }