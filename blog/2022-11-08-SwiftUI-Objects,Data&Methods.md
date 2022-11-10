---
title: SwiftUI Objects, Data & Methods
authors: [davidyoon]
tags: [iOS, SwiftUI, Objects, Data, Methods, 강좌]
---

## Instances

- Dog라는 class를 구현

```Swift
class Dog {
    private var name: String
    private var breed: String

    init(name: String, breed: String) {
        self.name = name
        self.breed = breed
    }

    func toString() {
        print("name: \(name), breed: \(breed)")
    }
}
```

- 스위프트에서 template를 구현하는 방법은 class, struct 2가지가 있다
- class, struct 은 함수와 data를 가지고 있다

## Data

- 데이터는 position, width, height 와 같은 값들의 집합이다
- Properties
  - Stored Property
    - var subtotal: Double
  - Stored Propery
    - var tax: Double
  - Computed Property
    - var total: Dobule {
      return subtotal + tax
      }

## Methods

- 함수는 User tap, highlight self, trigger action과 같이 특정 이벤트를 정의한다
- functionality == Methods

```Swift Syntax
Instance
    .methodName(parameters)
```

```Swfit Examples
Text("This is an apple")
    .bold()
    .kerning(2.0)
```

## 정리

- 앱은 class와 struct의 instance들로 구성된다
- class 와 struct 은 data와 Methods를 포함하고 있다
