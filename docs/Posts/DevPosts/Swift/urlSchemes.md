---
title: Swift URLSchemes
tags: [Swift, URLScheme, 앱 간 이동]
---

# 앱간 이동을 위한 URL Scheme 설정
- targets -> project -> Info -> URL Type 추가
- Identifier에 앱의 Bundle id를 등록한다.
- URLSchemes 값에 사용할 스킵 정보를 작성하여 추가한다.
- 타 앱에서 해당 ULR로 UIApplication.shared.open(URL(string: "scheme://")) 으로 앱 이동요청 이벤트를 작성하면, 해당 이벤트로 앱 이동이 된다.


## 참조
- https://developer.apple.com/documentation/coredata

