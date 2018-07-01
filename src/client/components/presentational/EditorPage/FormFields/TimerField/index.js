import React from 'react'
import { FormContext } from 'components/presentational/EditorPage/Form'
import TimeInput from './TimeInput'
import Label from '../Label'

import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'
import UseTimerInput from './UseTimerInput'
import FieldInputWrapper from './FieldInputWrapper'


const NameField = () =>
  <FieldWrapper>
    <FieldTitle>
      timer:
    </FieldTitle>
    <FieldInput>
      <FormContext.Consumer>
        {context =>
          <FieldInputWrapper>
            <Label>
              use timer
              <UseTimerInput name="useTimer" />
            </Label>
            {context.buffer.useTimer &&
              <Label>
                <TimeInput name="time" min="0" />
                seconds
              </Label>
            }
          </FieldInputWrapper>
        }
      </FormContext.Consumer>
    </FieldInput>
  </FieldWrapper>

export default NameField
