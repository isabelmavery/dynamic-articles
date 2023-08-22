import { useState } from 'react'
import remarkGfm from 'remark-gfm'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { saveBlockEdit } from '../../api/saveBlockEdit'
import { RawBlock } from '../../types/block.types'
import './MarkdownBlock.css'

export default function MarkdownBlock(props: { block: RawBlock }) {
  const { block } = props
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [text, setText] = useState<string | undefined>(block.Object.Text)

  if (!text) return null

  return (
    <div className="block" style={{ paddingBottom: 30 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={() => {
            setIsEditMode(!isEditMode)
            isEditMode && saveBlockEdit(block, text)
          }}
        >
          {isEditMode ? 'Save' : 'Edit'}
        </button>
      </div>

      {isEditMode ? (
        <textarea
          className="edit-text"
          name="edit-markdown"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      ) : (
        <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
      )}
    </div>
  )
}
