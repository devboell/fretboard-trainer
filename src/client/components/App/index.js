import React from 'react'
import { Route } from 'react-router-dom'
import Nav from 'components/Nav'
import TrainingPage from 'components/TrainingPage'
import EditorPage from 'components/EditorPage'
import Wrapper from './Wrapper'


const App = () =>
  <Wrapper>
    <Nav />
    <Route exact path="/" component={TrainingPage} />
    <Route exact path="/editor" component={EditorPage} />
  </Wrapper>

export default App
