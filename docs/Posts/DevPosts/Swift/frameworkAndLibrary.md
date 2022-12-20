---
title: Framwork Vs Library
tags: [Swift, Xcode, Framework, Library]
---

# Framework, Library 

- 일반적으로 프레임워크와 라이브러리의 차이는 주체의 의해 사용되는 것인지 틀에 맞추어 제어권을 부여할 것인지에 따 달라진다.
- Library의 경우 사용자가 필요에 따라 선언하고 사용한다.
- Framework의 경우 프레임워크가 제공하는 틀에 따라 구현해 놓으면 프레임워크가 작동하면서 구현한 내용을 실행 시킨다.

# iOS에서 Framework의 종류

- static framework: Do not embed(복사)
- dynamic framwork: Embed(참조)
- 차이점은 컴파일된 코드를 참조하는 방식
- 프레임워크 생성 시 디폴트는 dynamic으로 만들어진다.

# static framework

- 앱의 실행 파일 안에 복사.
- 앱 실행파일에 직접 복사되어 있으므로 런타임상 속도가 빠르다.
- 참조가 아닌 복사방식이므로 안정적이다.
- dynamic 방식에 비해 메모리를 더 많이 차지한다.
- Framework안에 이미지 파일과 같은 리소스 파일이 있어도 사용이 불가하다.

# Dynamic Framework

- 런타임상에서 Mach-O 파일과 참조관계이다.
- Framework내에 이미지나 뷰같은 리소스 파일, Bundle을 Embed할 수 있다.
- 빌드속도가 빠르다.
- 메모리 상 필요할 때 load시킨다(lazy).
- 디버그시 필요한 dSYM파일을 프레임워크 개발자가 따로 제공해야한다.
- static에 비하여 런타임에서 속도가 저하된다.

# 사용 방법에 따라 선택적 사용이 필요

- 코드상에 API만 제공해주는 경우 static framework 사용, 아니라면 dynamic framework 사용

# Dynamic Library VS Static Library

- 두 라이브러리의 가장 중요한 차이점은 실행 파일에 연결되는 방식에 있다.
- Dynamic 라이브러리의 경우 말 그대로 동적으로 실행파일에 연결되어 있다.
- 이 경우 라이브러리는 실행파일의 부분으로 포함되지 않는다.
- 즉, 앱이 실행될 때 필요한 라이브러리들을 로드하는 방식이다.
- 앱에 Dynamic 라이브러리를 많이 포함하는 것은 좋은 방법이 아니다.
- static 라이브러리의 경우 빌드타임에서 static linker를 사용하여 실행파일에 모든 프레임워크를 머지하게 된다.
- 결국 실행파일이 더욱 커지게 된다, 만약 사용하지 않는 파일이 있어도 모두 포함되어 실행파일로 만들어진다.(비효율)

- dynamic Library 경우 embed and sign으로 링크 연결을 해주어야 한다.

# Custom Framework 생성
- Project -> Framework로 프로젝트 생성
- 필요한 소스코드 작성 
    - 소스코드 작성 시 외부에서 import 하여 사용해야 할 함수와 클래스의 경우 open으로 생성해야만 접근이 가능하다.
- Build Setting -> All, Levels, Linking 옵션으로 검색하면 Mach-O Type을 선택할 수 있다.
- Dynamic, static를 선택하여 프레임워크를 빌드한다.
- Product -> Show Build Folder in Finder 선택하여 product 안에 생성된 framework를 확인한다.

# Custom Framework 실행
- 실행 앱 프로젝트 생성
- 생성한 프레임워크 드래그 앤 드롭으로 copy 옵션으로 앱에 추가
- Targets -> Frameworks, Libraries, and Embeded Content 에서 embed 여부 선택
- Dynamic일 경우 Embed and sign 하지 않을 시 앱 실행시 에러 발생

## 참조
- https://ios-development.tistory.com/281

