---
title: Modifier
tags: [SwiftUI, Modifier]
---

# SwiftUI Modifier
- Modifier은 SwiftUI 에서 views의 스타일을 변경할 때 사용한다.
- kerning, bold, font, line spacing, multiline text alignment 등이 있다.
    - kerning은 문자간의 간격이다.
    > Sets the spacing, or kerning, between characters.
```Swift
var body: some View {
        VStack{
            Text("🎯🎯🎯\nPUT THE BULLSEYE AS CLOSE AS YOU CAN TO")
                .bold()
                .kerning(2.0)
                .multilineTextAlignment(.center)
                .lineSpacing(4.0)
                .font(.footnote)
            Text(String(game.target))
                .kerning(-1.0)
                .font(.largeTitle)
                .fontWeight(.black)
            HStack {
                Text("1")
                    .bold()
                Slider(value: $sliderValue, in: 1.0...100.0)
                Text("100")
                    .bold()
            }
            Button(action: {
                alertIsVisible = true
            }) {
                Text("Hit me")
            }
            .alert(isPresented: $alertIsVisible,
                   content: {
                let roundedValue = Int(sliderValue.rounded())
                return Alert(
                    title: Text("Hello there!"),
                    message: Text("This slider's value is \(roundedValue).\n" + "You scored \(game.points(sliderValue: roundedValue)) points this round."),
                    dismissButton: .default(Text("Awesome!"))
                )
            })
        }
    }
```
- 위와 같이 지난 예제에서 다양한 modifier을 사용하였다.
- 이번에는 Padding, Forground Color, Background, Corner Radius에 대해 배울 것이다.