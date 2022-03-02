import React, { useCallback } from 'react'
import { Callout, FontWeights, mergeStyleSets, PrimaryButton, Stack, Text } from '@fluentui/react'

import styled from 'styled-components'
import { useBoolean } from '@fluentui/react-hooks'

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

const Root: React.FC = () => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false)

  return (
    <CenteredBox>
      <Stack>
        <Text variant="xxLarge" block>
          Hello, world!
        </Text>
        <PrimaryButton id="testButton" onClick={toggleIsCalloutVisible}>
          Primary Button
        </PrimaryButton>
        {isCalloutVisible && (
          <Callout target={'#testButton'} className={styles.callout} onDismiss={toggleIsCalloutVisible}>
            <Text block variant="xLarge" className={styles.title}>
              Callout title here
            </Text>
            <Text block variant="small">
              Message body is optional. If help documentation is available, consider adding a link to learn more at the
              bottom.
            </Text>
          </Callout>
        )}
      </Stack>
    </CenteredBox>
  )
}

export default Root
