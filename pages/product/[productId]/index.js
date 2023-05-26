import { useRouter } from "next/router"


function productId() {
    const router= useRouter()
    const customerId=router.query.productId
  return (
    <div>
      Product id :-{customerId}
    </div>
  )
}

export default productId
