# HWConfig 2.0 Workshop

## Getting started
1. `yarn`
2. `yarn dev`

## Tasks for the workshop
### Try to answer the following questions
- React Query.
    1. Does it work well with the MSM?
    2. Does it work well with Websockets?
    3. Do you like it?

- Fluent UI
    1. How does Fluent UI v8 work?
    2. How difficult is it to migrate to v9?
    3. Styled-components or fluent's way of styling?

## Examples
React Query Custom Hook example: `src/hooks/exampleHook.ts` 
```typescript
import { useQuery } from "react-query"

const getDataFromAPI = async () => {
    const res = await fetch('https://api.github.com/users/octocat')
    const json = await res.json()
    return json
}

export const useExampleHook = () => {
    return useQuery("octocat", getDataFromAPI)
}
```

## Links
- [React Query](https://react-query.tanstack.com/)
- [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/controls/web)