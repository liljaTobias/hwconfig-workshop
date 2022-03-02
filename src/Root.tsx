import React from 'react'
import { Callout, FontWeights, mergeStyleSets, PrimaryButton, Stack, Text } from '@fluentui/react'

import styled from 'styled-components'
import { useBoolean } from '@fluentui/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Example1 } from './examples/example_1'

// Use fluentui's build in styles-manager
const styles = mergeStyleSets({
  callout: {
    width: 320,
    maxWidth: '90%',
    padding: '20px 24px',
  },
  title: {
    marginBottom: 12,
    fontWeight: FontWeights.semilight,
  },
  link: {
    display: 'block',
    marginTop: 20,
  },
})

// or styled-componets
const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const queryClient = new QueryClient()

export const Root: React.FC = () => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false)

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CenteredBox>
        <Stack>
          <Text variant="xxLarge" block>
            HWconfig Workshop
          </Text>
          <PrimaryButton id="testButton" onClick={toggleIsCalloutVisible}>
            Get data from API
          </PrimaryButton>
          {isCalloutVisible && (
            <Callout target="#testButton" className={styles.callout} onDismiss={toggleIsCalloutVisible}>
              <Text block variant="xLarge" className={styles.title}>
                Response from the server
              </Text>
              <Example1 />
            </Callout>
          )}
        </Stack>
      </CenteredBox>
    </QueryClientProvider>
  )
}
