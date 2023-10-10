---
title: Swift AppSetting
tags: [Swift, AppSetting]
---

# How to move app setting view

- 앱에서 알림 설정을 유도할 때 앱의 설정 화면으로 이동이 필요하다.

```Swift
    guard let settingURL = URL(string: UIApplication.openSettingsURLString) else { return }
    UIApplication.shared.open(settingURL)
```

- UIApplication에서 openSettingURLSetting으로 URL 값을 만들어 open하면 요청 앱에서 앱 세팅 으로 이동할 수 있다.

