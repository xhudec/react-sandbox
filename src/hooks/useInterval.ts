import React from 'react'

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = React.useRef<any>()

  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  React.useEffect(() => {
    if (typeof delay === 'number') {
      // @ts-ignore
      const intervalId = setInterval(() => savedCallback.current(), delay)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [delay])
}

export default useInterval
