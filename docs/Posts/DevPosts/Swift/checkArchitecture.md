---
title: How to check library build architectures
tags: [Swift, linux, command, architecture, library, static]
---

# How to check library build architectures

- Intel Mac에서 업데이트된 thrid party 라이브러리를 사용하면 Simulator가 실행되지 않는 문제가 발생한다.

<img src="/framework/buildError.png" width="500px" height="300px" title="BuildError"/>

# 문제
- 이 에러의 원인은 해당 라이브러리의 아키텍처가 맞지 않기 때문에다.
- 그렇다면, 해당 라이브러리의 아키덱처를 알 수 있는 방법은 무엇일까
- lipo -info library.a(라이브러리 이름)

# Framework의 경우
- 해당 .freamwork 폴더로 이동하여 lipo -info framework_name으로 명령어를 실행해야 한다.

<img src="/framework/checkArchitectures.png" width="500px" height="300px" title="CheckArchitectures" />



## 참조
- https://developer.apple.com/documentation/coredata

