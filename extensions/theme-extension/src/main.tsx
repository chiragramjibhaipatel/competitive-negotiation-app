import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarRating from './StarRating.tsx'

const root = document.getElementById('root')
const productId = root?.dataset.productId

if (root) {
  createRoot(root).render(
    <StrictMode>
      <StarRating productId={productId} />
    </StrictMode>,
  )
}
