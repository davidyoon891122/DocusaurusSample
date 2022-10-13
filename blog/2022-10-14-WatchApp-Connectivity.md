---
slug: test-blog-post
title: Apple Watch Connectivity
authors:
  name: Davidyoon
  title: Blog Owner
tags: [iOS, Swift, WatchApp]
---
## Apple Watch App, iOS App Connectivity
3 ways for communication between iOS Apps and WatchApps
1. updateApplicationContext(_:)
2. transferUserInfo(_:)
3. sendMessage(_:replyHandler:errorHandler:)

## 프로젝트 구성
1. iOS bundle name을 WatchApp Info.plist WKCompanionAppBundleIdentifier key로 등록한다
2. WatchApp Extension Info.plist에 NSExtension > NSExtensionAttributes > WKAppBundleIdentifier에 key 값에 WatchApp Bundle ID를 등록한다
