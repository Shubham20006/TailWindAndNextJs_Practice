import React, { useContext } from 'react'
import { citycontext, usercontext } from './ContextA'

function ContextC() {
    const name=useContext(usercontext)
    const city=useContext(citycontext)
  return (
    <div>
       Your name is {name} and city is {city}
    </div>
  )
}

export default ContextC
