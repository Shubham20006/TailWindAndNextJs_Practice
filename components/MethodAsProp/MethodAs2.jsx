import React from 'react'

function MethodAs2(prop) {
  return (
    <div>
      <button onClick={()=>prop.greet({name:" Shubham"})}>click</button>
    </div>
  )
}

export default MethodAs2
