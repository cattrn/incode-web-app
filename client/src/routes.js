import pages from './pages'

// path string is the page component name without the "Page" at the end, and all lower case
const routes = Object.keys(pages).map((page) => {
  return {
    path: `/${page.toLowerCase().replace('page', '')}`,
    exact: true,
    component: pages[page]
  }
})

export default routes
