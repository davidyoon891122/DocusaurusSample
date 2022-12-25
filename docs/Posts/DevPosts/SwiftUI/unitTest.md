---
title: String
tags: [Swift, SwiftUI, Model]
---

# Unit Test를 해야 하는 이유

- 어떤 개발자도 자신이 작성한 코드를 100% 확신할 수 없다.
- 그렇기 때문에 코드를 작성하고 유저에게 제품이 전달되기 전에 테스트 및 수정 과정이 필요하다.
- 테스트를 수동적으로 진행하는 것은 사람에 대한 의존이 크고, 번거로운 일이다.
- 테스트를 코드로 작성하여 검증하면 한 번 작성해 놓은 코드로 변경사항이 있을 때마다 테스트를 자동으로 진행할 수 있다.

# 기존 프로젝트에 테스트 추가하기

- Show the Test Navigation 메뉴에서 하단에 + 버튼을 통해 테스트를 추가할 수 있다.

<img src="/swiftUI/addTestTarget.png" width="300px" height="700px" title="addTestTarget"/>

- 테스트 프로젝트를 추가하면 하단에 타겟이 추가된다.

# Test 구성

```Swift
import XCTest

final class BulleyesTests: XCTestCase {
    var game: Game!

    override func setUpWithError() throws {
        game = Game()
    }

    override func tearDownWithError() throws {
        game = nil
    }

     func testScorePositive() {
        var guess = game.target + 5
        var score = game.points(sliderValue: guess)
        XCTAssertEqual(score, 95)
    }

    func testScoreNegative() {
        var guess = game.target - 5
        var score = game.points(sliderValue: guess)
        XCTAssertEqual(score, 95)
    }
}
```
- setup 함수에서는 테스트가 진행되기 전 준비되어야 할 내용들을 작성한다.
    - 위 에서는 테스트를 진행할 함수가 들어 있는 struct game을 생성한다.
- tearDown 함수에서는 테스트가 종료되고 불필요한 내용들을 제거한다.
    - setup에서 생성했던 값들을 초기화 해주는 형태로 진행한다
    - setup의 순서와는 반대로 진행하면 된다.
- 작성할 코드에 들어갈 값을 검증하는 코드를 작성한다.
    - 위와 같이 XCTAssertEqual() 함수를 통해 결과값이 생각한 값과 맞는지 검증하는 코드를 작성한다
    - command + U 를 누르면 함수가 작성되어 있지 않아 Fail이 뜰 것이다.
    - Game 모델로 돌아가 함수를 작성하고 테스트를 돌려 정상적으로 작동하는지 확인한다.
- 이 같이 테스트 코드를 기반으로 프로젝트를 진행하는 것으로 TDD라고 한다.
