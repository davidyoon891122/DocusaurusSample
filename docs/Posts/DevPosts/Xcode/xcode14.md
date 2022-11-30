---
title: Xcode14 릴리즈 노트 정리
tags: [Xcode14, Release, 정리]
---

## Xcode 14 Release Note 정리

# 주의
- Xcode 14 대응을 위한 정리이며, 모든 내용을 포함하고 있지 않으니, 꼭 공식 Release Note를 확인 부탁드립니다.

# Overview
- Xcode 14는 Swift 5.7 과 iOS16, iPadOS 16, tvOS 16, watchOS 9, 그리고 macOS Monterey 12.3 SDK를 포함합니다.
- iOS 11 이상 ,tvOS 11 이상, watchOS 4이상의 기기에 대한 디버깅을 지원합니다.
- Xcode 14는 Monterey 12.5 이상 버전에서 사용 가능합니다.

# 변경점
1. Bitcode Deprecated

> Starting with Xcode 14, bitcode is no longer required for watchOS and tvOS applications, and the App Store no longer accepts bitcode submissions from Xcode 14.
Xcode no longer builds bitcode by default and generates a warning message if a project explicitly enables bitcode: “Building with bitcode is deprecated. Please update your project and/or target settings to disable bitcode.” The capability to build with bitcode will be removed in a future Xcode release. IPAs that contain bitcode will have the bitcode stripped before being submitted to the App Store. Debug symbols can only be downloaded from App Store Connect / TestFlight for existing bitcode submissions and are no longer available for submissions made with Xcode 14. (86118779)

- App Store는 더 이상 bitcode를 허용하지 않는다.
- Xcode는 더 이상 bitcode를 디폴트로 빌드하지 않고, 프로젝트에 bitcode가 허용되어 있으면 warning message가 발생한다.


2. Asset Catalogs
> Simplify an app icon with a single 1024x1024 image that is automatically resized for its target. Choose the Single Size option in the app icon’s Attributes inspector in the asset catalog. You can still override individual sizes with the All Sizes option.

- 1024x1024 이미지 한장으로 App Icon 설정이 단순화 되었습니다.
- 다양한 크기에 맞는 여러 이미지를 넣어주었던 방식에서 변경되었습니다, 단 원한다면 All Sizes option으로 각각 처리할 수 있습니다.

3. Build System

> Building iOS projects with deployment targets for the armv7, armv7s, and i386 architectures is no longer supported.

- amrv7, armv7s, and i386 architectures 에 대한 지원이 중단되었습니다.
- armv7
    - 32 bit ARM CPU
- armv7s
    - Apple A6, A6X
- i386
    - 32 bit simulator

- 최소 지원 버전이 iOS 11 이상으로 올랐습니다.
- Xcode 13은 iOS 9

4. Documentation
> Swift-DocC in Xcode now supports writing and building documentation for Objective-C and C APIs. 

- Swift-DocC 가 Objective-C 와 C APIs 를 지원합니다.

5. Localization
> You can now export local Swift packages for localization. Xcode generates a single localizations catalog for all projects and Swift packages contained in a project or workspace. You can also use xcodebuild 

- localization을 위한 local Swift packages들 추출할 수 있습니다.
- 프로젝안에 포함된 모든 프로젝트를 위한 localizations catalog를 생성합니다.  

6. Previews
> Xcode Previews now resume automatically when creating new projects.

- 새로운 프로젝트 생성 시 Previews resume을 자동으로 실행합니다.

> Xcode Previews no longer pauses after editing a file and switching back to a preview and resuming, or when projects modify the source directory during a build.

- 파일 수정이나 빌드 과정에서 소스 디렉토리의 변경이 발생해도 더 이상 Preview가 pause되지 않습니다.

7. Simulator

> Simulator now supports remote notifications in iOS 16 when running in macOS 13 on Mac computers with Apple silicon or T2 processors. Simulator supports the Apple Push Notification Service Sandbox environment. Your server can send a remote notification to your app running in that simulator by connecting to the APNS Sandbox (api.sandbox.push.apple.com). Each simulator generates registration tokens unique to the combination of that simulator and the Mac hardware it’s running on. See User Notifications for more information.

- iOS 16 시뮬레이터는 remote notification를 지원합니다.


# AppStore Xcode 변경점
- Xcode 14.1 릴리즈 후보로 앱을 빌드한 다음 테스트하고 심사를 위해 제출하십시오. 2023년 4월부터 App Store에 제출하는 모든 iOS 및 iPadOS 앱은 Xcode 14.1 및 iOS 16.1 SDK로 빌드해야 합니다.

## 참조
- https://developer.apple.com/documentation/xcode-release-notes/xcode-14-release-notes
- https://phillip5094.tistory.com/94