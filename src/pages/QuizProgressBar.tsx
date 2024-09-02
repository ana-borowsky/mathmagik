interface Props {
  questionCounter: number;
  questionQuantity: number;
}

function ProgressBar({ questionCounter, questionQuantity }: Props) {
  return (
    <div className='progress-bar-section'>
      <div className='progress-bar-text'>
        <div>00:23</div>
        <div>{questionCounter}/{questionQuantity}</div>
      </div>
      <div className='progress-bar-background'>
        <div className='progress-bar-background bar' style={{width: `${questionCounter/questionQuantity*100}%` }}></div>
      </div>
    </div>
  )
}

export default ProgressBar