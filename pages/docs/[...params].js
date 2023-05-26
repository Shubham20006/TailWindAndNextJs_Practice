import { useRouter } from "next/router"


function params() {
    const router =useRouter()
    const {params=[]}=router.query
   if(params.length===2){
    return(
        <h1>
            doc feature is {params[0]} and content is {params[1]}
        </h1>
    )
   }else if(params.length===1){
    return(
        <h1>
            feature is {params[0]}
        </h1>
    )
   }
    console.log(params)
  return (
    <div>
      Doc Page
    </div>
  )
}

export default params
