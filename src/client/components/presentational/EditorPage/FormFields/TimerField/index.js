import React from 'react'
import { FormContext } from 'components/presentational/EditorPage/Form'

import FieldWrapper from 'components/reusable/FieldWrapper'
import TimeInput from './TimeInput'
import UseTimerInput from './UseTimerInput'
import FieldInputWrapper from './FieldInputWrapper'


const NameField = () =>
  <FieldWrapper label="timer">
    <FormContext.Consumer>
      {context =>
        <FieldInputWrapper>
          <label htmlFor="useTimer">
            use timer
            <UseTimerInput name="useTimer" />
          </label>
          {context.buffer.useTimer &&
            <label htmlFor="time">
              <TimeInput name="time" min="0" />
              seconds
            </label>
          }
        </FieldInputWrapper>
      }
    </FormContext.Consumer>
  </FieldWrapper>

export default NameField
