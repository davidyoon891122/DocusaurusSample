---
title: iOS fastlane 도입
tags: [fastlane, 설치방법, MAC, 자동 배포]
---

# Fastlane 이란

> fastlane is an open source platform aimed at simplifying Android and iOS development. fastlane lets you automate every aspect of your development and release workflow

- fastlane은 Android, iOS 배포를 간편하게 도와주기 위한 오픈소스 플랫폼이다.
- fastlane을 사용하면 아래 기능들을 사용할 수 있다.(아래 기능에 대한 자세한 내용은 공식 홈페이지 참고)
    - Automate Screenshots
    - Beta Deployment
    - App Store Deployment
    - Code Signing

# AppStore에 앱을 배포하는 과정

- Xcode를 통해 앱을 만들고 Version, BuildNumber, Profile,  Development team 등을 세팅한다.
- Archive를 만드는 행위 즉, release를 할 때에는 Distribution Type의 Certificate가 필요하다.
- Product -> Archive를 통해 앱 아카이브를 만든다(.ipa 파일)
- TestFlight에 앱을 배포한다.
- 배포된 앱에 대한 세팅을 진행한다.(앱 설명 및 스크린샷 등록 등)
- 앱을 심사 등록 한다.

# Fastlane 도입시 배포되는 과정

- Fastlane 설정 파일을 수정하여, 세부 설정 세팅
- action 명령어를 사용사용.
- Version 자동 올림 처리, BuildNumber 자동 올림 처리 
- AppStore TestFlight 배포까지 자동으로 진행

# Fastlane 설치

- brew install fastlane
- fastlane 설치 과정 중 Permission deny Error가 발생하면 sudo 명령어를 넣어주면 된다.
- fastlane은 ruby를 사용하기 때문에 bundler를 설치해야한다.

# Project에 fastlane 도입

- fastlane을 도입 할 프로젝트 폴더로 이동한다.
- fastlane init 명령어를 사용하여 fastlane을 적용한다.

<img src="/fastlane/fastlane_init.png" width="500px" height="300px" title="FastlaneInit" />

- Apple 서버에 접근가능한 아이디 입력 및 패스워드 입력 창이 뜨게 된다.

<img src="/fastlane/apple_id_input.png" width="500px" height="300px" title="AppleIDInput" />

# fastlane init 완료 후 생성되는 파일

- Gemfile, Gemfile.lock
- fastlane 디렉토리
1. AppFile
    - Apple 계정 정보가 들어있는 파일이다.
    - fastlane init 이후 로그인 과정에서 필요한 정보들을 이 파일에 저장해 놓고 사용한다.
2. FastFile
    - 생성이후 커스터 마이징을 해야하는 파일이다.
    - fastlane lane들의 정보를 입력하고 fastlane lane_name으로 실행한다.
    - 기본적으로 beta lane이 작성되어 있다.
    - beta의 action들은 increment_build_number, build_app, upload_to_testflight 로 구성되어 있다.
    - 빌드넘버를 1 올려주고 앱을 archive 한후 테스트 플라이트에 배포하는 행위가 이루어 진다.
3. README.md
    - fastlane lane 과정에서 에러나 예외 상황이 발생하면 해당 내용에 대한 정보가 입력되어 생성된다.
4. report.xml
    - action들과 time에 대한 정보가 xml 파일로 만들어진다.

<img src="/fastlane/fastlane_generated_files.png" width="500px" height="300px" title="GeneratedFiles" />

# Fastlane으로 TestFlight 배포

- fastlane init으로 적용을 완료하면 기본 구성으로 되어 있는 fastlane beta 를 실행한다.
> fastlane beta

<img src="/fastlane/fastlane_beta.png" width="500px" height="300px" title="Beta" />

# Authenticating with Apple Services

- 공식 홈페이지 DOC(https://docs.fastlane.tools/getting-started/ios/authentication/) 자세히 써있다.
- 저자의 경우에는 Application-specific passwords를 사용하여 인증을 진행했다.
- appleid.apple.com/account/manage
- 위 페이지에 들어가 암호를 만들고 잘 저장해 두고 해당 암호를 사용하여 인증을 한다.
- .env.default에 내용을 작성해 놓으면 해당 파일에 내용을 읽어서 배포를 시도한다

```js
FASTLANE_USER=AppleID
FASTLANE_PASSWORD=ApplePassword
FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD=GeneratedPasscodes
```




# 참조

- https://fastlane.tools/
- https://docs.fastlane.tools/getting-started/ios/setup/