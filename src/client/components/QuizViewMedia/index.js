import React from 'react'
import 'matchmedia-polyfill'
import fullScreen from 'components/QuizViewFullscreen'
import modal from 'components/QuizViewModal'
import { deviceSizes } from 'css/media'

export default Component =>
  () => {
    const phoneQuery = `only screen and (max-width: ${deviceSizes.phone}px)`
    const isPhone = matchMedia(phoneQuery).matches
    const MediaComponent = isPhone
      ? fullScreen(Component)
      : modal(Component)
    return <MediaComponent />
  }
