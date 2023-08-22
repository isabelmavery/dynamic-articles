import markdownBlock1 from './markdown1.json'
import markdownBlock2 from './markdown2.json'
import markdownBlock3 from './markdown3.json'
import mcqBlock from './mcq.json'

// Add Id to block responses for easy editing
const responseWithIds = [
  markdownBlock1,
  markdownBlock3,
  mcqBlock,
  mcqBlock,
  mcqBlock,
  markdownBlock2,
  markdownBlock3,
].map((block, i) => ({ ...block, BlockId: `${i}` }))

export default responseWithIds
