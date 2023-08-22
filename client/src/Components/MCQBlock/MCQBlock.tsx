import { useState } from 'react'
import { RawBlock } from '../../types/block.types'
import '../../App.css'
import './MCQBlock.css'

const FEEDBACK_INCORRECT_PREFIX = 'Incorrect - '
const FEEDBACK_CORRECT_TEXT = 'Correct - Nice work!'

function Option({
  optionName,
  onClick,
  quizName,
}: {
  optionName: string
  onClick: () => void
  quizName: string
}) {
  return (
    <div className="quiz-q" style={{ marginBottom: 10 }} onClick={onClick}>
      <input type="radio" id={optionName} value={optionName} name={quizName} />
      <label htmlFor={optionName} style={{ marginLeft: 5 }}>
        {optionName}
      </label>
    </div>
  )
}

/**
 * Adds to correct option into the options array at a random location
 * So the correct option is not always in the same place.
 */
// function shuffleCorrectOption(
//   IncorrectOptions: string[],
//   CorrectOption: string
// ) {
//   const randomizedIndex = Math.floor(Math.random() * IncorrectOptions.length)
//   return [
//     ...IncorrectOptions.slice(0, randomizedIndex),
//     CorrectOption,
//     ...IncorrectOptions.slice(randomizedIndex),
//   ]
// }

export default function MCQBlock(props: {
  block: RawBlock
  blockIndex: number
}) {
  const {
    block: {
      Object: {
        Question,
        CorrectOption,
        IncorrectOptions,
        FeedbackOnIncorrect,
      },
    },
    blockIndex,
  } = props
  const quizName = `quiz-q-${blockIndex}`

  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Validate
    if (selectedOption !== CorrectOption) {
      alert(`${FEEDBACK_INCORRECT_PREFIX}${FeedbackOnIncorrect}`)
    } else {
      alert(FEEDBACK_CORRECT_TEXT)
    }
    event.preventDefault()
  }

  if (!IncorrectOptions || !CorrectOption) return null

  return (
    <div className="block quiz">
      <div className="title" style={{ marginBottom: 10 }}>
        Quick Quiz
      </div>
      <form name={quizName} onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>{Question}</div>

        {[...IncorrectOptions, CorrectOption].map((o: string) => (
          <Option
            quizName={quizName}
            optionName={o}
            onClick={() => setSelectedOption(o)}
          />
        ))}

        <input
          type="submit"
          value="Submit"
          style={{ width: 100, marginTop: 5 }}
        />
      </form>
    </div>
  )
}
