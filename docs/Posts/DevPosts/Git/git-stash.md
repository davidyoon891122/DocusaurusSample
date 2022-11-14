---
title: Git Stash
authors: [davidyoon]
tags: [Git, Git Command, Shotcut, 커밋 취소, add 취소]
---

# Git Stash

# Git stash란

- 아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 하는 명령어
- 아직 완료하지 않은 일을 commit하지 않고 나중에 다시 꺼내와 마무리할 수 있다
    - git stash 명령을 사용하면 워킹 디렉토리에서 수정한 파일들만 저장한다
    - stash란 아래에 해당하는 파일들을 보관해주는 장소이다
        - Modified이면서 Tracked 상태인 파일
            - Tracked 상태인 파일을 수정한 경우
            - Tracked 과거에 이미 commit하여 스냅샷에 넣어진 관리 대상 상태의 파일
        - Staging Area에 있는 파일(Staged 상태의 파일)
            - git add 명령을 실행한 경우
            - Staged 상태로 만들려면 git add 명령을 실행해야 한다
            - git add는 파일을 새로 추적할 때도 사용하고 수정한 파일을 Staged 상태로 만들 때도 사용한다

## 하던 작업 임시로 저장

### Git stash

- 위의 명령어를 통해 새로운 stash를 스택에 만들어 하던 작업을 임시로 저장한다
- git stash나 git stash save를 실행하면 스택에 새로운 stash가 만들어진다
- working directory는 깨끗해진다

## 목록 확인하기

### Git stash list

- 여러 번 stash를 했다면 위에 명령어를 통해 저장한 stash 목록을 확인 할 수 있다

## Stash 적용하기(했던 작업을 다시 가져오기)

### git stash apply

- git stash apply
- git stash apply [stash 이름]
- 이름(ex. stash@{2})
- 위 명령어로 Staged 상태였던 파일을 자동으로 다시 Staged 상태로 만들어 주지 않는다
    - —index 옵션을 주어야 Staged 상태까지 복원한다

## Stash 제거하기

### git stash drop

- apply 옵션은 단순히 stash를 적용하는 것으로, 해당 stash는 스택에 여전히 남아있다.
- 스택에 남아 있는 stash는 위에 명령어를 통해 제거할 수 있다
- git stash drop
- git stash drop [stash 이름]
- 적용과 동시에 스택에서 해당 stash를 제거하고 싶으면 git stash pop
    - git stash pop

## Stash 되돌리기

### git stash show -p | git apply -R

- 실수로 잘못 stash 적용한 것을 되돌리고 싶으면 위에 명령어를 사용
    - git stash show -p | git apply -R
        - 가장 최근의 stash를 사용하여 패치를 만들고 그것을 거꾸로 적용한다
    - git stash show -p [stash 이름] | git apply -R
        - stash 이름에 해당하는 stash를 이용하여 거꾸로 적용한다

# TIP

## stash-unapply라는 명령어 만들기

```swift
$ git config --global alias.stash-unapply '!git stash show -p | git apply -R'
$ git stash apply
$ #... work work work
// alias로 등록한 stash 되돌리기 명령어
$ git stash-unapply
```

출처: