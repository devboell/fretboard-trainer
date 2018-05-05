const pcQuestion = quiz => quiz

export default (quiz) => {
  switch (quiz.type) {
    case 'pc': return pcQuestion(quiz)
    // case 'pitch': return pitchQuestion(fb)
    default: return null
  }
}
