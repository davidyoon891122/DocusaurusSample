---
title: Swift URLSchemes
tags: [Swift, URLScheme, 앱 간 이동]
---

# 앱간 이동을 위한 URL Scheme 설정

# 이동 요청을 받을 앱에서의 처리
- targets -> project -> Info -> URL Type 추가
- Identifier에 앱의 Bundle id를 등록한다.
- URLSchemes 값에 사용할 스킵 정보를 작성하여 추가한다.

# 앱으로 이동할 앱에서의 처리
- plist에 Queried URL Schemes 추가
- Item에 이동할 앱의 URLScheme 등록
- 타 앱에서 해당 ULR로 UIApplication.shared.open(URL(string: "scheme://")) 으로 앱 이동요청 이벤트를 작성하면, 해당 이벤트로 앱 이동이 된다.


## 참조
- https://developer.apple.com/documentation/coredata

