# Molly's Pet Shop

React와 Vite로 마이그레이션한 정적 쇼핑 페이지입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포 전 준비

- Vite의 `base`는 이 저장소 이름에 맞춘 `/mollys-pet-shop/`입니다.
- 상품 목록은 `/#/products/dogs` 해시 경로를 사용하므로 GitHub Pages 새로고침에서도 404가 발생하지 않습니다.
- `npm run build`로 생성되는 `dist/`를 GitHub Pages 배포 대상으로 사용합니다.
- `.nojekyll`이 빌드 산출물에 포함되어 Jekyll 처리를 막습니다.

이 커밋에는 배포 워크플로가 포함되어 있지 않습니다. GitHub Pages 설정을 완료한 뒤에만 배포를 실행하세요.
