---
title: Apple Notarization
authors: [davidyoon]
tags: [Apple, Xcode, Notarization]
---

## Notarization(공증)

- 코드사인된 앱을 애플에 보내서 기본적인 검사를 진행하고 OK도장을 받는 작업

> Notarization gives users more confidence that the Developer ID-signed software you distribute has been checked by Apple for malicious components. Notarization is not App Review. The Apple notary service is an automated system that scans your software for malicious content, checks for code-signing issues, and returns the results to you quickly. If there are no issues, the notary service generates a ticket for you to staple to your software; the notary service also publishes that ticket online where Gatekeeper can find it.

- ID-signed 소프트웨어를 애플 시스템에서 자동으로 스캔하여 악의적인 컨텐츠, 코드 서명 이슈가 있는지 체크한다.

## 참조
- http://cwyang.github.io/2020/12/09/osx-codesign-notarization.html
- https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution
