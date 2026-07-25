import { Carousel } from '../components/Carousel.jsx'
import { asset } from '../utils/asset.js'

const heroSlides = [
  { id: 1, image: asset('/img/slider1.jpg') },
  { id: 2, image: asset('/img/slider5.jpg') },
  { id: 3, image: asset('/img/slider3.jpg') },
  { id: 4, image: asset('/img/slider4.jpg') },
]

const recommended = [
  { id: 1, image: asset('/img/pro1.png'), name: '[LG생활건강] 시리우스 윌 성견용 사료 1kg', price: '17,005원', original: '17,900원', unit: '1kg당 17,500원', reviews: 35 },
  { id: 2, image: asset('/img/pro2.png'), name: '테라카니스 퍼피 치킨과 호박 200g', price: '5,795원', original: '6,100원', unit: '10g당 290원', reviews: 5 },
  { id: 3, image: asset('/img/pro3.png'), name: '아침애 플러스 한우 800g', price: '15,200원', original: '16,000원', unit: '100g당 1,900원', reviews: 47 },
  { id: 4, image: asset('/img/pro4.png'), name: '[퓨리나] ONE 7세 이상 노령견용 2kg', price: '20,805원', original: '21,900원', unit: '1kg당 10,503원', reviews: 72 },
]

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">{product.price} <del>{product.original}</del></p>
      <p className="unit">({product.unit})</p>
      <p className="rating" aria-label={`별점 5점, 리뷰 ${product.reviews}개`}>★★★★★ <span>({product.reviews})</span></p>
      <span className="delivery">퀵배송</span>
    </article>
  )
}

export function HomePage() {
  return (
    <main>
      <section className="hero" aria-label="몰리스 펫샵 소개">
        <Carousel items={heroSlides} autoPlay className="hero-carousel" renderItem={(slide) => <img src={slide.image} alt="반려동물과 함께하는 몰리스 펫샵" />} />
        <div className="hero-copy"><img src={asset('/img/slide_logo.png')} alt="몰리스" /><span /><p>반려동물이라는 주제로 풀어가는 가족처럼 따뜻한 곳</p></div>
      </section>

      <section className="intro section-inner">
        <img src={asset('/img/img1.png')} alt="반려견과 함께 있는 사람" />
        <div><h2>내 집처럼 편안하게, 가족처럼 따뜻하게</h2><p>몰리스 펫샵은 이마트에서 직접 운영하는 국내 최초의 <strong>반려동물 원스톱 멀티샵</strong>입니다. 반려동물 병원, 미용실, 호텔, 유치원, 쇼핑, 카페까지 믿고 맡길 수 있는 편안한 서비스를 제공합니다.</p></div>
      </section>

      <section className="services"><div className="section-inner"><Service image={asset('/img/beauty.jpg')} title="반려견 미용 & 스파" text="내부가 보이는 반려견 전용 미용실에서 미용 과정을 직접 확인하세요. 반려견의 상태와 케어에 맞춘 천연 스파 프로그램으로 긴장을 낮추고 스트레스를 완화합니다." /><Service image={asset('/img/hotel.jpg')} title="반려견 호텔 & 놀이터" text="반려동물을 믿고 맡길 수 있는 호텔 서비스입니다. 쾌적하고 아늑한 공간과 넓은 놀이터, 다양한 프로그램을 경험해 보세요." /></div></section>

      <section className="products-section section-inner">
        <ProductShelf title="추천제품" products={recommended} />
        <ProductShelf title="행사제품" products={[...recommended].reverse()} />
      </section>
    </main>
  )
}

function Service({ image, title, text }) { return <article className="service-card" style={{ backgroundImage: `url(${image})` }}><div><h2>{title}</h2><p>{text}</p></div></article> }
function ProductShelf({ title, products }) { return <section className="product-shelf"><h2>{title}</h2><Carousel items={products} autoPlay className="product-carousel" renderItem={(product) => <ProductCard product={product} />} /></section> }
