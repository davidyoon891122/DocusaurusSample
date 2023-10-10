---
title: Xcode15 이슈 
tags: [Xcode15, Issue, 대응]
---

# 이슈

- Xcode 15 사용하여 앱 빌드 시 duplicated symbol 에러 발생
- 신규로 추가된 linker에 버그가 있어 발생하는 것 같다고 추정
- 정적 링크 속도를 크게 향상시키는 새로운 링커가 작성됨(Xcode new feature)
    - 이 링커는 모든 iOS 바이너리와 'Mergeable Libraries'기능을 사용하는 모든 사용자에게 기본값으로 제공됨.
    - (클래식 링커는 여전히 -ld64를 사용하여 명시적으로 요청할 수 있으며, 향후 릴리스에서 제거될 예정)

# 해결방법

- Build Settings → Other Linker Flags → add -ld64

# 관련자료
- Xcode 15 beta includes a new linker, known as `ld_prime`. This has a bunch of benefits, not least being the support for mergeable libraries, per WWDC 2023 Session 10268 [Meet mergeable libraries](https://developer.apple.com/videos/play/wwdc2023/10268/). However, any time you rewrite something that complex you inevitably run into the odd issue. Normally I’d suggest you file a bug about this, but we already have a bug report about this one (r. 110340167). In the meantime, you should be able to work around it by reverting to the old linker. The linker has two options, `-ld64` and `-ld_prime`, that override its default algorithm for choosing a back end. Thanks for taking the time to test with Xcode 15 beta!