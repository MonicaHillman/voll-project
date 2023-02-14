import { useEffect, useState } from "react"


export default function useFetch<T>({ param }: { param: string }) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/${param}`).then(
            resposta => resposta.json()
        ).then((dados => setData(dados))
        ).catch((erro => setError(erro)))
    }, [param])

    return { data, error }
}