import { useEffect } from 'react'

//Created a hook that runs a certain callback function every n seconds.
const useInterval = (func , delay) => {
    useEffect(() => {
      const interval = setInterval(func, delay);
      
      // Don't set up the interval if delay is null or undefined
      if (delay === null || delay === undefined) return;

      return () => {
        clearInterval(interval);
      };
    }, [func,delay])

}

export default useInterval