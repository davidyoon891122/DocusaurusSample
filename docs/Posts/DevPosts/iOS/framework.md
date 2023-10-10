---
title: iOS Framework 생성 방법 
tags: [framework, 생성, xcframework]
---

# Framework 생성

- device 용
    - xcodebuild archive -scheme ExSample -archivePath "./build/ios.xcarchive" -sdk iphoneos SKIP_INSTALL=NO BUILD_LIBRARY_FOR_DISTRIBUTION=YES
- simulator 용
    - xcodebuild archive -scheme ExSample -archivePath "./build/ios_sim.xcarchive" -sdk iphonesimulator SKIP_INSTALL=NO BUILD_LIBRARY_FOR_DISTRIBUTION=YES
- 두 프레임워크를 묶어서 xcframework로 만드는 방법
    - create-xcframework -framework ./ios.xcarchive/Products/Library/Frameworks/PrintManger.framework -framework ./ios_sim.xcarchive/Products/Library/Frameworks/PrintManger.framework -output ./PrintManager.xcframework