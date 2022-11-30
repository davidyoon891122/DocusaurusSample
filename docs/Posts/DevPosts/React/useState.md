---
title: 컴포넌트 상태 다루기
tags: [React, Fastcampus, 강좌, 정리, useState]
---

# 컴포넌트

- DOM은 논리 트리, 컴포넌트는 엘리먼트의 집합, 엘리먼트는 요소이다.
- 엘리먼트는 컴포넌트의 “구성 요소”이다.

# useState 사용 방법

```JavaScript
let keyword = ""

function handleChage(event) {
    keyword = event.target.value
}
```

- 위와 같이 바닐나로 구현할 떄에는 render를 다시 해주어야 뷰에서 변경된 state 값으로 뷰를 그려주게 된다.

```JavaScript
const [keyword, setKeyword] = React.useState("")
const [result, setResult] = React.useState("")
const [typing, setTyping] = React.useState(false)

function handleChange(event) {
    setKeyword(event.target.value)
    setTyping(true)
}

function handleClick() {
    setTyping(false)
    seyResult(`We find results of ${keyword}`)
}
```

- React.useState() 함수를 사용하여 get[0], set[1]을 각가 할당하여 사용한다.
- useState() 파람값으로 초기 get 초기값을 설정한다, 어떤 타입도 올 수 있다.
- state의 값을 변경할 때에는 set 함수를 사용하여 state값을 변경한다.
- 이렇게 React.useState를 사용하면 따로 render를 해주지 않아도 변경된 state 값을 뷰에 보여지게 된다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/rendering-elements.html
