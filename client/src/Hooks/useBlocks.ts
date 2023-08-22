import { useState, useEffect } from 'react'
import { RawBlock } from '../types/block.types'

export default function useBlocks() {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<RawBlock[]>([])

  async function fetchData() {
    try {
      setLoading(true)
      const res = await fetch(`/blocks`)
      if (res) {
        const newData = await res.json()
        setData(newData)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      // In real world - integrate with logging/error tracking service here
      console.log('Error loading blocks from server', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    blocks: data,
    loading,
  }
}
