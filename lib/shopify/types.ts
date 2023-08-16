export type Product = {
  node: {
    id: string
    title: string
    description: string
    images: {
      edges: {
        node: {
          originalSrc: string
          altText: string
        }
      }[]
    }
  }
}
