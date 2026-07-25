import { useMemo, useState } from 'react'
import { products } from '../data/products.js'

const filters = ['전체보기', '퍼피', '어덜트', '시니어', '전연령', '유기농', '성견']
const sortOptions = { sales: '판매량 순', recommended: '추천 순', high: '가격 높은 순', low: '가격 낮은 순' }
const PAGE_SIZE = 8

export function DogProductsPage() {
  const [filter, setFilter] = useState('전체보기')
  const [sort, setSort] = useState('sales')
  const [page, setPage] = useState(1)
  const filtered = useMemo(() => products.filter((product) => filter === '전체보기' || product.lifeStage === filter), [filter])
  const sorted = useMemo(() => [...filtered].sort((a, b) => {
    if (sort === 'high') return b.price - a.price
    if (sort === 'low') return a.price - b.price
    if (sort === 'sales') return b.reviews - a.reviews
    return a.id - b.id
  }), [filtered, sort])
  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const visibleProducts = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const chooseFilter = (value) => { setFilter(value); setPage(1) }

  return <main className="dog-page">
    <section className="dog-hero"><div><p>HOME &gt; 상품 &gt; <strong>강아지</strong></p><h1>강아지</h1></div></section>
    <section className="dog-content section-inner">
      <div className="category-tabs" aria-label="상품 카테고리"><button className="active">사료</button><button>간식</button><button>용품</button></div>
      <fieldset className="filter-panel"><legend>상품 필터</legend>{filters.map((item) => <label key={item}><input type="radio" name="life-stage" checked={filter === item} onChange={() => chooseFilter(item)} />{item}</label>)}</fieldset>
      <div className="product-toolbar"><p><strong>{filtered.length}개</strong>의 상품이 준비되어 있습니다.</p><div role="group" aria-label="상품 정렬">{Object.entries(sortOptions).map(([value, label]) => <button className={sort === value ? 'active' : ''} key={value} onClick={() => { setSort(value); setPage(1) }}>{label}</button>)}</div></div>
      <div className="dog-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      <nav className="pagination" aria-label="상품 페이지"><button onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1} aria-label="이전 페이지">‹</button>{Array.from({ length: pageCount }, (_, index) => <button key={index + 1} className={currentPage === index + 1 ? 'active' : ''} onClick={() => setPage(index + 1)}>{index + 1}</button>)}<button onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={currentPage === pageCount} aria-label="다음 페이지">›</button></nav>
    </section>
  </main>
}

function ProductCard({ product }) { return <article className="dog-card"><img src={product.image} alt={product.name} /><h2>{product.name}</h2><p className="price">{product.priceLabel} <del>{product.original}</del></p><p className="unit">({product.unit})</p><p className="rating" aria-label={`별점 5점, 리뷰 ${product.reviews}개`}>★★★★★ <span>({product.reviews})</span></p><span className="delivery">퀵배송</span></article> }
