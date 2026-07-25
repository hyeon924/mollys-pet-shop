import { useEffect, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { BackToTop } from './components/BackToTop.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { DogProductsPage } from './pages/DogProductsPage.jsx'

function getPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

export default function App() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onPopState = () => setPath(getPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to) => {
    if (to !== path) {
      window.history.pushState({}, '', to)
      setPath(to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const page = path === '/products/dogs'
    ? <DogProductsPage />
    : <HomePage navigate={navigate} />

  return (
    <div className="app-shell">
      <Header navigate={navigate} />
      {page}
      <Footer />
      <BackToTop />
    </div>
  )
}
