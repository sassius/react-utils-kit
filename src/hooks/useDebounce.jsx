import { useEffect, useState } from 'react'

const useDebounce = (value , timeout) => {
    const [debouncedValue ,setDebouncedValue] = useState(value);
    useEffect(() => {
      const removeTimeout = setTimeout(()=>{
        setDebouncedValue(value)
      },timeout)
    
      return () => {
        clearTimeout(removeTimeout);
      }
    }, [value])
    


  return debouncedValue;
}

export default useDebounce