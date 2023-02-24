import { useEffect, useState } from "react"

export default function useFetch<T>({ url }: { url: string }) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/${url}`).then(
            resposta => resposta.json()
        ).then((dados => setData(dados))
        ).catch((erro => setError(erro)))
    }, [url])

    return { data, error }
}