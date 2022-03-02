import { useQuery } from "react-query"

const getDataFromAPI = async () => {
    const res = await fetch('https://api.github.com/users/octocat')
    const json = await res.json()
    return json
}

export const useExampleHook = () => {
    return useQuery("octocat", getDataFromAPI)
}