export const getMenu = /* GraphQL */ `
  query getMenu {
    menu(handle: "main-menu") {
      items {
        id
        title
        url
      }
    }
  }
`
