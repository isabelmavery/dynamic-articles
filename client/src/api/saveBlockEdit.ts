import { RawBlock } from '../types/block.types'

/**
 * Submits a PUT request to edit the changed markdown block.
 * Note: this is more of a mock method as we are not actually changing the value in the backend.
 * @param block
 * @param text
 * @returns updated blocks list resp
 */
export const saveBlockEdit = async (block: RawBlock, text: string) => {
  try {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({
        ...block,
        Object: {
          Text: text,
        },
      }),
      headers: { 'Content-Type': 'application/json' },
    }
    const resp = await fetch(`blocks/${block.BlockId}`, requestOptions)
    return resp.json()
  } catch (error) {
    alert('There was an error saving your changes')
    console.log(`Error on put to ${block.BlockId}`, error)
  }
}
