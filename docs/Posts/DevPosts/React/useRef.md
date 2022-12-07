---
title: Ref로 Dom 다루기
tags: [React, Fastcampus, 강좌, 정리, ref, dom]
---

# Input element에 focus 주기
- 바닐라 JS에서는 getElementById('').focus()로 포커스를 준다.
- Document 인터페이스는 브라우저가 불러온 웹 페이지를 나타내며, 페이지 콘텐츠(DOM 트리)의 진입점 역할을 수행합니다.
```jsx
const rootElement = document.getElementById('root')

const App = () => {
    const inputRef = React.useRef()

    React.useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <input ref={inputRef} />
        </>
    )
}
```
- React.useRef() 를 사용하여 inputRef를 만들고 사용할 element(input)에 ref에 할당한다.
- React.useEffect()를 사용하여 element가 render 되고, inputRef.current.focus()를 호출한다.

- 시간이 되면 div의 style을 변경시키는 예제
```jsx
const App = () => {
    const divRef = React.useRef()

    React.useEffect(() => {
        setTimeout(() => {
            divRef.current.style.backgroundColor = "pink"
        }, 1000) 
    }, [])

    return (
        <>
            <div ref={divRef} style={{ height: 100, width: 300, backgroundColor: "brown" }}>
        </>
    )
}
```
- render가 되고 1000ms(1초) 뒤 div의 배경색은 핑크색으로 변경된다.

# Why React offer useRef
- document.getElementById 등을 사용하지 않고 useRef라는 별도의 방법을 제공하는 이유?
    - React가 제공하는 틀 안에서 서비스를 제공하기 위해서
- 특정 값을 가지는 포인터 역할

# 정리
- 바닐라 JS에서는 document.get ~ / document.query ~ 등 으로 값을 가져와 사용
- React JS에서는 useRef / ref를 사용해서 값을 가져와서 사용한다.
## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://developer.mozilla.org/ko/docs/Web/API/Document