---
title: Git Stash
authors: [davidyoon]
tags: [Git, Git Command, Bare, server, repository]
---

# 서버에 Git 레포지토리 만들기

- 서버에 깃 레포를 만들고 여러 사람이 사용할 수 있는 레포지토리를 만들기 위해서는 Bare 저장소를 만들어야 한다.
- Bare 저장소란 워킹 데렉토리가 없는 저장소이다.
- 기존 프로젝트에 --bare 옵션을 주고 clone을 하게 되면 새로운 Bare 저장소가 만들어진다.
- Bare 저장소 디렉토리는 관례에 따라 .git 글자가 이름에 붙는다.

> git clone --bare my_project my_project.git

# 서버에 Bare저장소 넣기

- 위에서 만든 my_project.git 을 scp, fstp 등으로 통해서 사용할 서버에 올린다.
- fstp 방식
    - 이 방식을 사용할 시 서버 경로에 동일한 이름의 directory를 먼저 생성해 두어야 한다.
    - put -r myproject.git 
- 서버에 올라간 프로젝트로 경로를 이용하여 bare, shared로 재 초기화를 해준다.

> git init --bare --shared
- shared 옵션을 추가하면 Git은 자동으로 그룹 쓰기 권한을 추가한다.


# 참조
- https://git-scm.com/book/ko/v2/Git-서버-서버에-Git-설치하기