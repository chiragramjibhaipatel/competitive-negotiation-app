
function StarRating({ productId }: { productId: string | undefined }) {

  if(!productId) {
    return null
  }

  return (
    <>
     <div>
      <p>Star Rating of this product is {productId}</p>
     </div>
    </>
  )
}

export default StarRating
