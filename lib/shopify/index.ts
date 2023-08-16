export async function shopifyFetch(query: string) {
  const url = `https://${process.env.PUBLIC_STORE_DOMAIN}/api/2023-07/graphql.json`
  const token = `${process.env.PUBLIC_STOREFRONT_API_TOKEN}`

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': token,
      },
      body: JSON.stringify({ query }),
      cache: 'no-cache', // testing only, remove for production
    })

    return {
      status: result.status,
      data: await result.json(),
    }
  } catch (error) {
    console.error('Error:', error)

    return {
      status: 500,
      error: 'Error receiving data',
    }
  }
}
