---
title: Method
tags: [Swift, SwiftUI, Font, FontWeight, HIG]
---

## SwiftUI FontWeight

- SwiftUI Text의 Modifiers 중 fontWeight에 적용할 수 있는 값을 확인해 보자

# fontWeight(\_:)

```Swift
func fontWeight(_ weight: Font.Weight?) -> Text
```

- Sets the font weight of the text
- Text Font Weight값을 지정하는 함수
- 적용할 수 있는 값

1. static let black: Font.Weight
   - 900
2. static let bold: Font.Weight
   - 700
   <!-- 3. static let heavy: Font.Weight -->
3. static let light: Font.Weight
   - 300
4. static let medium: Font.Weight
   - 500
5. static let regular: Font.Weight
6. static let semibold: Font.Weight
   - 600
7. static let thin: Font.Weight
   - 100
8. static let ultraLight: Font.Weight
   - 200

## 참조

- https://developer.mozilla.org/ko/docs/Web/CSS/font-weight
- https://developer.apple.com/design/human-interface-guidelines/foundations/typography/
