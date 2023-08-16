import Image from 'next/image'
import { Product } from '../../../lib/shopify/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div key={product.node.id}>
      <h2>{product.node.title}</h2>
      <Image
        src={product.node.images.edges[0].node.originalSrc}
        alt={product.node.images.edges[0].node.altText}
        width={450}
        height={450}
      />
      <p>{product.node.description}</p>
    </div>
  )
}
