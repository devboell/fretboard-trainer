import React from 'react'
import { Provider } from 'react-redux'
// import * as getQuestion from 'lib/question'

import { quizzes } from 'fixtures/graphql/quiz'
import {
  clickStart,
  panelModes,
  selectPanelMode,
  questionPanelContains,
  answerPanelContains,
  clickChoice,
  choiceStatus,
  choicesContain,
} from 'test-utils/enzyme-queries/runner'
import Runner from '../index'
import { createMockStore, mockQuestion } from '../mocks'
import { initRunner } from '../reducer'


jest.mock('lib/question', () => jest.fn(() => mockQuestion))

describe('Runner', () => {
  let store
  let wrapper
  beforeEach(() => {
    store = createMockStore()
    store.dispatch(initRunner(quizzes[1]))
    wrapper = mount((
      <Provider store={store}>
        <Runner />
      </Provider>))
  })

  describe('default', () => {
    it('has 4 panelsModes', () => {
      expect(panelModes(wrapper).length).toBe(4)
    })
  })

  describe('start, quiz one, panelModeIndex 0', () => {
    beforeEach(() => clickStart(wrapper))

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('shows fretboard in question panel', () => {
      expect(questionPanelContains('FretboardPanel', wrapper)).toBe(true)
    })

    it('shows multiple choice in question panel', () => {
      expect(answerPanelContains('MultipleChoice', wrapper)).toBe(true)
    })

    it('choice 1 click shows incorrect status', () => {
      clickChoice(0, wrapper)
      expect(choiceStatus(0, wrapper)).toBe('incorrect')
    })

    it('choice 4 click shows correct status', () => {
      clickChoice(3, wrapper)
      expect(choiceStatus(3, wrapper)).toBe('correct')
    })

    it('choices contain name panels', () => {
      expect(choicesContain('NamePanel', wrapper)).toBe(true)
    })
  })

  describe('start, quiz one, panelModeIndex 1', () => {
    beforeEach(() => {
      clickStart(wrapper)
      selectPanelMode(1, wrapper)
    })

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('shows fretboard in question panel', () => {
      expect(questionPanelContains('FretboardPanel', wrapper)).toBe(true)
    })

    it('shows multiple choice in question panel', () => {
      expect(answerPanelContains('MultipleChoice', wrapper)).toBe(true)
    })

    it('choice 1 click shows incorrect status', () => {
      clickChoice(0, wrapper)
      expect(choiceStatus(0, wrapper)).toBe('incorrect')
    })

    it('choice 4 click shows correct status', () => {
      clickChoice(3, wrapper)
      expect(choiceStatus(3, wrapper)).toBe('correct')
    })

    it('choices contain name panels', () => {
      expect(choicesContain('StaffPanel', wrapper)).toBe(true)
    })
  })

  describe('start, quiz one, panelModeIndex 2', () => {
    beforeEach(() => {
      clickStart(wrapper)
      selectPanelMode(2, wrapper)
    })

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('shows fretboard in question panel', () => {
      expect(questionPanelContains('FretboardPanel', wrapper)).toBe(true)
    })

    it('shows multiple choice in question panel', () => {
      expect(answerPanelContains('MultipleChoice', wrapper)).toBe(true)
    })

    it('choice 1 click shows incorrect status', () => {
      clickChoice(0, wrapper)
      expect(choiceStatus(0, wrapper)).toBe('incorrect')
    })

    it('choice 4 click shows correct status', () => {
      clickChoice(3, wrapper)
      expect(choiceStatus(3, wrapper)).toBe('correct')
    })

    it('choices contain name panels', () => {
      expect(choicesContain('SoundPanel', wrapper)).toBe(true)
    })
  })

  describe('start, quiz one, panelModeIndex 3', () => {
    beforeEach(() => {
      clickStart(wrapper)
      selectPanelMode(3, wrapper)
    })

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('shows fretboard in question panel', () => {
      expect(questionPanelContains('NamePanel', wrapper)).toBe(true)
    })

    it('shows multiple choice in question panel', () => {
      expect(answerPanelContains('FretboardPanel', wrapper)).toBe(true)
    })

    it('handle fretboard fret answers', () => {
      const correctLoc = { loc: { str: 5, pos: 0 } }
      const incorrectLoc1 = { loc: { str: 5, pos: 1 } }
      const incorrectLoc2 = { loc: { str: 5, pos: 2 } }
      const expected = {
        correct: [correctLoc],
        incorrect: [incorrectLoc1, incorrectLoc2],
      }
      const { clickAction } = wrapper.find('FretboardPanel').props()
      clickAction(correctLoc)
      clickAction(incorrectLoc1)
      clickAction(incorrectLoc2)
      const updatedProps = wrapper.update().find('FretboardPanel').props()

      expect(updatedProps.answers).toEqual(expected)
    })
  })
})
