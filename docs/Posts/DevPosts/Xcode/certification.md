---
title: Archive Certification 문제
tags: [Xcode14, Release, Archive, Certification]
---


## Archive Certification 문제

- Xcode에서 TestFlight 배포중 발생하는 문제 해결
- Archive 하는 도중 아래와 같은 문구 팝업이 뜬다.
- codesign이 변경하려고 합니다. 허용하려면 관리자 이름 및 암호를 입력하십시오.

## 원인

- distribution certification이 keychain상에 시스템 키체인에 올라가 있어 발생

## 해결
- 시스템에 올라가 있는 인증서를 삭제하다.
- 기본 키체인 로그인쪽에 인증서와 private key를 등록한다.
- Archive를 다시 시도한다.