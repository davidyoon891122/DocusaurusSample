---
title: State
tags: [Swift, SwiftUI, State]
---

## State

- 말 그대로 특정 객체의 상태를 상타낸다
- Car Dashboard를 예로 들어보자
  - Numeric values
    - Speed
    - Fuel level
    - Distance traveled
  - Boolean values
    - Low oil
    - Needs maintenance
  - All together
    - Visualization of car's state

# Changing Car State

- By driver action
  - Driver presses accelerator
  - Car moves faster
  - Dashboard updates
- By internal circumstance
  - Car burns gas
  - Dashboard updates
- 드라이버의 행동이나 내부적 요인들에 의해서 Car's state는 변화한다.
- 데이터의 변화에 대한 싱크가 맞지 않으면 여러가지 문제가 생길 수 있다.
- Swift UI에서는 User Interface 와 state 는 항상 일관성이 유지되게 강제된다.

# Bullseye 앱에서의 state

- Hit me 버튼이 탭 되면 alert를 띄운다.
- Alert는 뜨거나 뜨지않거나 두가지 상태를 가진다 Boolean

```Swift
@State private var alertIsVisible: Bool = false
```

- var body 위에 상태값을 정의한다.
- Initial State -> Get body -> show "dashboard" based on state
- 위와 같은 과정으로 SwiftUI는 UserInterface와 state의 일관성을 강제한다.
- State는 초기값을 가지고 앱이 시작 되면 초기값으로 UserInterface를 구성한다.

```Swift
Button(action: {
    self.alertIsVisible = true
}) {
    Text("Hit me")
}
```

- 버튼을 클릭하면 State가 true로 변경된다.
- 앱의 State가 변경되고, User Interface가 업데이트 된다.
- iOS가 자동적으로 body를 refresh 한다.

# State 변경 후 Alert 정의

```Swift
Button(action: {
    self.alertIsVisible = true
}) {
    Text("Hit me")
}
.alert(isPresented: $alertIsVisible,
    content: {
        return Alert(
            title: Text("Hello there!"),
             message: Text("This is my first popup"),
              dismissButton: .default(Text("Awesome!")
            ))
    }
)
```

- 위 코드를 작성 후 버튼을 클릭하면, Alert가 나오게 된다
- isPresented 값에 $표시를 붙이는 이유는 뷰에 State를 바인딩 하기 위함이다.

# 상태값을 UI에 바인딩

- Swift UI는 뷰와 특정 상태값이 바인드 되어 데이터의 싱크를 유지시킨다.
- Slider의 값을 반인드해보자.

```Swift
@State private var sliderValue: Double = 50.0

var bdoy: some View {
  Slider(value: self.$sliderValue, in: 1.0...100.0)
}
```

# 참조

- Kodeco(your-first-ios-swiftUI)
