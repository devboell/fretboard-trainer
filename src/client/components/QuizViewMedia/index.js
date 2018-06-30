import React from 'react'
import 'matchmedia-polyfill'
import fullScreen from 'components/QuizViewFullscreen'
import modal from 'components/QuizViewModal'

export default Component =>
  () => {
    const isPhone = matchMedia('only screen and (max-width: 480px)').matches
    const MediaComponent = isPhone
      ? fullScreen(Component)
      : modal(Component)
    return <MediaComponent />
  }
