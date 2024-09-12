interface Props {
  questionCounter: number;
  questionQuantity: number;
  timer: number;
}

function ProgressBar({ questionCounter, questionQuantity, timer }: Props) {
  return (
    <div className='progress-bar-section'>
      <div className='progress-bar-text'>
        <div>{new Date(1000 * timer).toISOString().substring(14, 19)}</div>
        <div>{questionCounter}/{questionQuantity}</div>
      </div>
      <div className='progress-bar-background'>
        <div className='progress-bar-background bar' style={{width: `${questionCounter/questionQuantity*100}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar