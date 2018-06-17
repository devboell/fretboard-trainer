import React from 'react'

import StyledNavLink from './StyledNavLink'

const Nav = () =>
  <div>
    <StyledNavLink exact to="/"><h3>Training</h3></StyledNavLink>
    <StyledNavLink to="/editor"><h3>Editor</h3></StyledNavLink>
  </div>


export default Nav
