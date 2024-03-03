import { useState } from "react"

export function useXIsNext(initialValue) {
    const [xIsNext, setXIsNext] = useState(initialValue)
    return [xIsNext, setXIsNext]
}