---
title: SwiftUI Modifiers
authors: [davidyoon]
tags: [iOS, SwiftUI, Modifiers, 강좌]
---

## SwiftUI Modifiers

```Swift
Text("This is an apple")
    .opacity(0.5)
    .border(.black)
```

- Text를 그리고 텍스트에 투명도를 설정한 후 그 위에 border를 설정하는 코드이다
- 위 처럼 Modifier의 순서가 매우 중요하다

## Some View Modifiers in SwiftUI

- Kerning
  - 커닝(kerning)은 글자의 모양 때문에 활자가 고르게 배열되지 않은 것처럼 보이는 것을 글자 모양에 따라 적당한 간격을 두게 조정하여 시각적으로 매끄럽게 보이게 하는 것을 말한다.
- Bold
- Font
- Line Spacing
- Multiline Text Alignment
