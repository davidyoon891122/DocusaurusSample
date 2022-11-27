---
title: Variables
tags: [Swift, SwiftUI, Variables]
---

# Variables

- Swift에서 변수 선언은 var를 사용한다.
- 변수는 데이터를 저장하기 위해 사용 된다.
- 변수는 프로그램 컨텍스트에서 계속적으로 변화가 발생하고 값이 변경될 때 사용한다.
- 변수는 초기에 선언된 타입에 맞추어 해당하는 타입으로만 변경이 가능하다.
- Swift에서는 변수 이름은 CamelCase를 사용한다.
  - CamelCase는 소문자로 시작하며 대문자를 단어 구분으로 사용하는 형태이다.
  - valueName, numberTest, myName 등과 같다.

```Swift
@State private var variableName: Type = InitialValue
```

- 위와 같이 변수를 선언할 수 있다.
- 선언된 변수에 다른 타입이 들어가야 한다면, 다른 타입을 선언된 변수 타입에 맞게 casting 해주어야 한다.

```Swift
var roundedValue: Int = Int(self.sliderValue) // sliderValue is double value
```

- option 키를 누른 상태에서 double값이 들어가 있는 변수 이름을 선택하여 Double 변수를 보면 다양한 기능을 제공한다는 것을 알 수 있다.
- double.rounded() 함수로 값을 반올림 처리 할 수 있다.
