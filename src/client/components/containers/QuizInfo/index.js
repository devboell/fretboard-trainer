import { connect } from 'react-redux'

import { initRunner } from 'components/containers/Runner/reducer'
import InfoViewer from 'components/presentational/TrainingPage/InfoViewer'

const mapStateToProps = state => ({
  runnerStatus: state.runner.status,
})

const mapDispatchToProps = dispatch => ({
  onInitRunner: qz => dispatch(initRunner(qz)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoViewer)
