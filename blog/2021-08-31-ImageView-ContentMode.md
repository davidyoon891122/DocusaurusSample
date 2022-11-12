---
authors: [davidyoon]
tags: [ImageView, iOS, Swift, ContentMode]
---

### ImageView ContentMode

1. ContentMode

- ContentMode는 enum이다.

  - case scaleToFill // 이미지의 높이와 너비는 UIImageView의 크기와 일치하도록 늘어납니다.
  - case scaleAspectFit // 이미지의 비율을 유지하면서 뷰의 사이즈에 맞게 이미지를 늘리는 옵션
  - case scaleAspectFill // 이미지의 비율을 유지하면서 뷰에 사이즈에 맞게 이미지를 꽉 채우는 옵션(특정 부분이 잘려 보일 수 있음)
  - case redraw
  - case center
  - case top
  - case bottom
  - case left
  - case right
  - case topLeft
  - case topRight
  - case bottomLeft
  - case bottomRight

- 정리
  - scaleToFill: 비율 유지 X, 화면 꽉 채움 O, 이미지 잘림 X
  - scaleAspectFit: 비율 유지 O, 화면 꽉 채움 X, 이미지 잘림 X
  - sacleAspectFill: 비율 유지 O, 화면 꽉 채움 O, 이미지 잘림 O
