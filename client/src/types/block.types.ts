export enum BlockType {
  Markdown = 'Markdown',
  MCQ = 'MCQ',
}

type RawObject = {
  Question?: string
  CorrectOption?: string
  IncorrectOptions?: string[]
  FeedbackOnIncorrect?: string
  Text?: string
}

export type RawBlock = {
  Type: BlockType
  Object: RawObject
  BlockId: string
}
