---
title: Git Command
authors: [davidyoon]
tags: [Git, Git Command, Shotcut, 커밋 취소, add 취소]
---

## Git Command

# Git Add 취소
- git reset HEAD [fileName]
    - staged 되어 있는 파일을 unstaged 상태로 변경한다
    - fileName 을 넣지 않으면 staged 되어 있는 모든 파일이 unstaged 상태로 변경된다

# Git Alias
- git config --global alias.co checkout
    - git checkout 명령어를 git co 형태로 사용할 수 있도록 설정
- git config --global alias.br branch
    - git branch 명령어를 git br 형태로 사용할 수 있도록 설정
- git config --global alias.ci commit
    - git commit 명령어를 git ci 형태로 사용할 수 있도록 설정
- git config --global alias.st status
    - git status 명령어를 git st 형태로 사용할 수 있도록 설정
- git config --global alias.unstage 'reset HEAD --'
    - git reset HEAD로 add 취소 명령어를 git unstage 명령어로 설정
- git config --global alias.last 'log -1 HEAD'
    - 최근 커밋 하나의 로그만 출력하는 명령어를 git last로 설정

# Git commit 메시지 변경
- git commit --amend
    - 가장 최근 커밋 메시지를 변경 

# Git commit 취소
- git reset --soft HEAD^
    - 마지막 commit을 취소하고 마지막 커밋된 파일들을 staged 상태로 변경(Add가 되어 있는 상태)
- git reset --mixed HEAD^
    - 마지막 commit을 취소하고 마지막 커밋된 파일들을 unstaged 상태로 변경(Add 되어 있지 않은 상태)
    - git reset HEAD^ 커맨드도 동일한 명령
- git reset HEAD~2
    - 마지막 2개의 commit을 취소
- git reset --hard HEAD^
    - 마지막 commit을 취소하고 변경된 내역들을 모두 제거한다
    - 매우 위험한 명령(주의), 작업 했던 내용이 모두 사라진다

# Git reflog
- git reflog
    - branch 와 HEAD가 지난 몇 달 동안에 가르켰던 커밋 목록을 확인
    - rebase, merge 작업 시 유용

# Git 특정 commit으로 되돌리기
- git reset HEAD@{number}
- git reset [commit id]

# Git push remote
- git push origin branchName 
    - 해당 브랜치를 origin 저장소에 push
- git push origin branchName -f 
    - 해당 브랜치를 origin 저장소에 강제 push
    - 매우 위험
    - git push origin +branchName 과 동일

# Git clean
- git clean -f
    - untracked 파일들을 제거한다
    - default 값은 강제 삭제가 아니기 때문에 -f 옵션이 필요
    - git clean -f 
- git clean -f -d
    - untracked 디렉토리까지 제거
- git clean -f -d -x
    - untracked 파일, 디렉토리, 무시된 파일까지 제거
- git clean -n
    - 가상으로 어떤 파일들이 지워질지 먼저 보여줌
 
# Git 원격 브랜치 삭제
- 방법 1
    - git push origin —delete branchName
- 방법 2
    - git branch -d branchName
    - git push origin branchName

# 특정 파일만 변경사항 되돌리기
- git checkout -- fileName

## 참조
- https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-Git-Alias
- https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html 