import useBlocks from '../Hooks/useBlocks'
import MCQBlock from './MCQBlock/MCQBlock'
import MarkdownBlock from './MarkdownBlock/MarkdownBlock'
import { BlockType, RawBlock } from '../types/block.types'

/**
 * A HOC made up of a series of blocks fetched from our server.
 */
function Article() {
  const { blocks, loading } = useBlocks()

  if (!loading && !blocks)
    return <div className="no-content">No content found</div>

  return (
    <div
      className="article"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        blocks.map((b: RawBlock, i: number) => {
          switch (b.Type) {
            case BlockType.Markdown:
              return <MarkdownBlock block={b} />
            case BlockType.MCQ:
              return <MCQBlock blockIndex={i} block={b} />
            default:
              return <div className="block" />
          }
        })
      )}
    </div>
  )
}

export default Article
