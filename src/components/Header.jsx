const menus = [
  { label: "Molly's", items: ['소개', '오시는 길', '약속'] },
  { label: '서비스', items: ['미용 & 스파', '호텔 & 놀이터', '카페'] },
  { label: '상품', items: ['강아지', '고양이', '소동물'] },
  { label: '커뮤니티', items: ['Q&A', '후기정보', '나의 글'] },
  { label: '매장안내', items: ['가까운 매장찾기', '단골매장'] },
]

export function Header({ navigate }) {
  const onMenuClick = (label) => {
    if (label === '강아지') navigate('/products/dogs')
  }

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('/')} aria-label="몰리스 펫샵 홈">
        <img src="/img/logo1.png" alt="몰리스 펫샵" />
      </button>
      <nav aria-label="주요 메뉴">
        <ul className="main-nav">
          {menus.map((menu) => (
            <li key={menu.label}>
              <button type="button">{menu.label}</button>
              <ul className="sub-nav">
                {menu.items.map((item) => (
                  <li key={item}><button type="button" onClick={() => onMenuClick(item)}>{item}</button></li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
