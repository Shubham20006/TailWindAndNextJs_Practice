import React, { useEffect, useState } from 'react'

function Count() {
    const [count,setcount]=useState(0)

    const tick=()=>{
        // setcount((prev)=>(prev+1)) 
                                     //  ====>  if we maintain prev state then no need to use dependency array.
          setcount(count+1)                        
    }
    useEffect(()=>{
        const interval=setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div>
     Hook count :  {count}
    </div>
  )
}

export default Count
