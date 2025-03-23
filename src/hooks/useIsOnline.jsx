import { useEffect, useState } from 'react'

const useIsOnline = () => {
    const [isOnline,setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
        const handleOnline=()=>{
            setIsOnline(true);
            console.log("User is online yay!!");
        }
        const handleOffline = ()=>{
            setIsOnline(false);
            console.log("user is offline");
        }
        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)
    
        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }
    }, [])
    

  return isOnline;
}

export default useIsOnline