---
title: tracking 파일 gitginore 처리
authors: [davidyoon]
tags: [Cocoapods, Xcode, Git, gitignore, cached files]
---

# 문제 확인
- Project 내부에 Pods 폴더가 git으로 형상관리 되고 있어 pod install 할 때마다 수정사항이 생김.
- Xcode project 형상관리 시 Podfile, Podfile.lock 파일은 형상관리에 포함하지만, Pods 파일은 형상관리 하지 않는 파일에 포함된다.
- 간혹, Git에 대한 이해가 없는 상태에서 Pods까지 형상관리에 포함하는 개발자들이 있어 빈번하게 볼 수 있이다.

# 해결
- gitignore에 Pods/ 를 추가한다.
- gitignore에 추가해도 이미 tracking 중인 pods 파일들은 "커밋하도록 정하지 않은 변경 사항"으로 표시되며 git add . 시 다시 관리 대상이 된다.

## tracking 제거하기
- git rm -r --cached .
    - cache에 기록된 tracking 중인 파일리스트를 삭제한다
- git st를 쳐보면 많은 파일들이 다시 추가되어 놀라게 되는데 걱정하지말고 다음 커맨드를 진행한다
- git add .
- git commit -m 'remove ignored file'
    - 캐쉬에서 리스트를 제고하고 ignore된 파일을 제거하고 다시 add 한후 commit을 해주는 것이다.



## 참조
- https://medium.com/@kwoncharles/git-gitignore-%EB%B3%80%EA%B2%BD-%EB%B0%98%EC%98%81%ED%95%98%EA%B8%B0-3f0559947c2b