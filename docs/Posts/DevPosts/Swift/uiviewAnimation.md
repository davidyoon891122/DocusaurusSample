---
title: UIView animation
tags: [UIKit, animation]
---

# iOS animation 메소드

- iOS 2
    - beginAnimations, commitAnimations
    - 현재는 deprecated 되었다.
- iOS 4
    - closure 형태인 animate 메소드
    - 현재 주로 사용되고 있는 메소드
- iOS 10
    - UIViewPropertyAnimation
    - 애플에서 권장하는 방법

# UIView Animate

## 특징

- Closure 기반
- Animation이 동작하는 동안 User Interaction은 일시적으로 disabled 된다.
- Animation이 가능한 속성
    - frame, bounds, transform, alpha, backgroundColor

## UIView의 animation 함수
1. UIView.animate(withDuration:animations:)

```Swift
class func animate(
    withDuration duration: TimeInterval,
    animations: @escaping() -> Void
)
```

- 한 가지 이상의 뷰들을 특정 시간동안 변화시킬 수 있다.
- duration
    - 애니메이션이 지속되는 시간이다.
    - TimeInterval 타입이다.
    - 만약 음수나 0을 지속 시간에 넣어주면 애니메이션이 없이 뷰가 변화할 것이다.
- animations
    - 뷰들에게 어떤 변화를 줄 것인지에 대한 정의를 하는 곳이다.
    - 이 곳은 어떤 파라미터도 받지않고 리턴값 조차 존재하지 않는다.

2. animate(withDuration:animations:completion:)

```Swift
class func animate(
    withDuration duration: Timeinterval,
    animations: @escpaing () -> Void,
    completion: ((Bool) -> Void)? = nil
)
```

- 기존 값들이 completion만 추가된 형태이다.
- completion에는 애니메이션이 완료된 후 동작할 내용을 담아주면 된다.


## 간단한 배경 화면 바꾸는 코드

```Swift
func activateAnimation() {
    backgroundColor = .systemBackground

    UIView.animate(
        withDuration: 0.5,
        animations: {
            backgroundColor = .systemPurple
        }
    )
}
```

## 애니메이션 해제 방법

- layer에 접근하여 animation을 remove 시켜주면 애니메이션을 해제할 수 있다.

```Swift
object.layer.removeAllAnimations()
```

## 애니메이션 체인

- 애니메이션 complete 안에 다음 애니메이션을 호출하여 애니메이션을 체인 방식으로 실행 시킬 수 있다.

## 애니메이션 options

- 옵션은 하나를 줄 수도 있고, [] 를 사용하여 여러개를 줄 수 있다.
- 종류
    - curveEaseInOut: 천천히 시작했다가 점점 빨라지다가 다시 천천히 종료되는 curve(기본)

## 제약 조건 애니메이션

- 애니메이션 효과에 constant값을 변경하는 효과를 넣을때는 layoutIfNeeded가 필요하다.

```Swift
UIView.animate(withDuration: 0.3) {
    self.bugView.constant = 100.0 
}
```
- 위와 같이 애니메이션을 주면 뷰의 크기만 변경이 된다.

```Swift
UIView.animate(withDuration: 0.3) {
    self.bugView.constant = 100.0 
}
```

```Swift
self.bugView.constant = 100.0 

UIView.animate(withDuration: 0.3) {
    self.view.layoutIfNeeded()
}
```

# 참고 
- https://developer.apple.com/documentation/uikit/uiview/1622418-animate
- https://jinnify.tistory.com/66
- https://onelife2live.tistory.com/23
- https://www.kodeco.com/5255-basic-uiview-animation-tutorial-getting-started