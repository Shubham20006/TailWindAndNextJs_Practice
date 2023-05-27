import React, { useState } from 'react'
import MethodAs2 from './MethodAs2.jsx'

function MethodAs1() {
  let Greet1="GoodMorning"
 
   const greet=(prop)=>{
         alert(Greet1 + prop.name)
    }
  return (
    <div>
      <MethodAs2 greet={greet}/>
    </div>
  )
}

export default MethodAs1
