---
title: String
tags: [Swift, SwiftUI, Model]
---

# Model
- Model은 Data와 Logic만이 들어있는 형태이다.

# Game 모델 정의후 데이터 바인딩
```Swift
struct Game {
    var target: Int = 42
    var score: Int = 0
    var round: Int = 1

    func points(sliderValue: Int) -> Int {
        return 999
    }
}
```
- View에서 사용될 target, score, round 데이터를 담는 변수를 정의한다.
- slider값에 따라 포인트를 돌려주는 함수를 정의한다. 임시로 999로 선언하였다.

# ContnetView에서 바인딩

- SwiftUI는 state 변수와 뷰를 바인딩하여 sync를 맞춘다는 것을 기억하자
```Swift
@State private var game: Game = Game()

var body: some View {
    VStack {
        Text(String(game.target))
    }

    Button(action: {
        //... 생략
    })
    .alert(isPresented: $alertIsVisible,
        content: {
            let roundedValue: Int = Int(sliderValue.rounded())
            return Alert(
                title: Text("Hello There!"),
                message: Text("This slider's value is \(rounndedValue).\n)" + "You scored \(game.points(sliderValue: rountedValue)) points this rountd.",
                dismissButton: .default(Text("Awesome!"))
            )
        }
    )
}

```