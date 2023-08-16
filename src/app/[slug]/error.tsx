'use client'

import { useEffect } from 'react'
import PageTitle from '@/components/text/page-title'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => console.error(error), [error])

  return (
    <div>
      <PageTitle title="Something went wrong" />
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
