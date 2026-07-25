import { useEffect, useState } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { BackToTop } from './components/BackToTop.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { DogProductsPage } from './pages/DogProductsPage.jsx'

function getPath() {
  const hashPath = window.location.hash.replace(/^#/, '')
  return hashPath.replace(/\/+$/, '') || '/'
}

export default function App() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onPopState = () => setPath(getPath())
    window.addEventListener('hashchange', onPopState)
    return () => window.removeEventListener('hashchange', onPopState)
  }, [])

  const navigate = (to) => {
    if (to !== path) {
      window.location.hash = to
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
