import { Spinner } from '@fluentui/react'
import React from 'react'
import { useExampleHook } from '../hooks/exampleHook'

export const Example1 = () => {
  const { status, data } = useExampleHook()

  if (status === 'loading' || status === 'error') {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <div>
      <code>{JSON.stringify(data)}</code>
    </div>
  )
}
