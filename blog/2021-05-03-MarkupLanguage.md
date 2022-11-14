---
authors: [davidyoon]
tags: [Markdown, 문법]
---

1. Markdown 이란

- 일반 텍스트 문서의 양식을 편집하는 문법
- README 파일이나 온라인 문서, 혹은 일반 텍스트 편집기로 문서 양식을 편집할 때 사용
- 쉽게 HTML 등 다른 문서형태로 변화이 가능

2. Markdown 문법

- 헤더: 제목, 문단별 제목을 쓰고 싶을 때
  - # 제목 1단계
  - ## 제목 2단계
  - ### 제목 3단계
  - #### 제목 4단계
  - ##### 제목 5단계
- 수평선: 내용을 명시적으로 구분하고 싶을 때
  ***
- 엔터키(줄바꿈, 개행): 라인을 바꾸고 싶을 때
  - 띄어쓰기 2번 입력
- 목록(List): 요소를 나열할 때

  - 1. 첫번째
  - 2. 두번째
  - 3. 세번째
  - +, -, \*, +

- 강조: 문장 내 강조하고 싶은 단어를 눈에 띄게
  - **볼드(진하기)**
  - _이탤릭체(기울여서)_
  - ~~취소선~~
  - <u>밑줄</u>
  - **볼드로 진하게 만들다가*이탤릭으로 기울이고*다시 볼드로**(중복 활용 가능)
- 인용구: 인용할 경우 또는 분위기 전환시에도 사용(중복 형태 가능)

  - > 테스트
  - > > 테스트2
  - > > > 테스트3

- 링크(Link): 클릭하면 다른 페이지, 다른 부분으로 이동
  - 네이버(https://www.naver.com)
  - 네이버 <https://www.naver.com>
  - 동일 파일 내 이동 [동일 파일 내 이동]
  - [#Markdown 이란]