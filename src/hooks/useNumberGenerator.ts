import { useCallback, useState } from "react"

export function useNumberGenerator() {
  const [isGenerated, setIsGenerated] = useState(false)
  const [numbers, setNumbers] = useState<number[]>([])

  const generateNumber = useCallback((max: number) => {
    const number = Math.floor(Math.random() * max + 1)

    return number
  }, [])

  const generate = useCallback((totalNumbers: number, max: number) => {
    const generatedNumbers: number[] = []

    for (let iterator = 0; iterator <= totalNumbers; iterator++) {
      const number = generateNumber(max)

      generatedNumbers.push(number)
    }

    setNumbers(generatedNumbers)
    setIsGenerated(true)
  }, [generateNumber, numbers])

  const clear = useCallback(() => {
    setIsGenerated(false)
    setNumbers([])
  }, [])

  return {
    isGenerated,
    numbers,
    generate,
    clear,
  }
}