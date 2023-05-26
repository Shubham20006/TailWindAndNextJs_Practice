import { useRouter } from 'next/router'
import React from 'react'

function review() {
    const router =useRouter()
    const {productId,reviewId}=router.query
  return (
    <div>
      productId:- {productId},reviewId:- {reviewId}
    </div>
  )
}

export default review
