import React from 'react'
import { Route } from 'react-router-dom'
import Nav from 'components/presentational/Nav'
import TrainingPage from 'components/presentational/TrainingPage'
import EditorPage from 'components/presentational/EditorPage'
import Wrapper from './Wrapper'


const App = () =>
  <Wrapper>
    <Nav />
    <Route exact path="/" component={TrainingPage} />
    <Route exact path="/editor" component={EditorPage} />
  </Wrapper>

export default App
