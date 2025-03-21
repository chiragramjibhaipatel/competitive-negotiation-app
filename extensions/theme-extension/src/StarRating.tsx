
function StarRating({ productId }: { productId: string | undefined }) {

  if(!productId) {
    return null
  }

  return (
    <>
     <div>
      <p>Star Rating</p>
      <p>Product ID: {productId}</p>
     </div>
    </>
  )
}

export default StarRating
