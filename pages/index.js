import Link from "next/link"
import { useRouter } from "next/router"
import ListRendering from "@/components/listRendering/ListRendering"
import MethodAs1 from "@/components/MethodAsProp/MethodAS1"
import ContextA from "@/components/UseContextHook/ContextA"
import Count from "@/components/UseEffect/Count"
import Scoreboard2 from "@/components/UseEffect/Scoreboard2"
import CountByUseReducer from "@/components/UseReducer/CountByUseReducer"
function Home() {
  //   const router =useRouter()

  //   const handleClick=()=>{
  // router.replace("/product")
  // }
  return (
    <div>
      {/* <h1>home page</h1>
      <Link href={"/product"}>
      product
      </Link>
      <br/>
      <button onClick={handleClick}>place order</button> */}
     
      <ListRendering/>
      <MethodAs1/>
      <ContextA/>
      {/* <Count/> */}
      
      <Scoreboard2/>
      <CountByUseReducer/>
    </div>
  )
}

export default Home
