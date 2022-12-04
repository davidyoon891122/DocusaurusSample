---
title: 커스텀 훅 만들기
tags: [React, Fastcampus, 강좌, 정리, event handler]
---

# 커스텀 훅 만들기

- useState, useEffect이 여러번 사용되면, 문맥에 따라 hook들을 묶어서 커스텀 훅으로 만들 수 있다.

```jsx
const [keyword, setKeyword] = React.useState(() => {
    return window.localStorage.getItem("keyword")
})

const [result, setResult] = React.useState("")
const [typing, setTyping] = React.useState(false)

React.useEffect(() => {
    window.localStorage.setItem("keyword", keyword)
}, [keyword])
```

- 위에 소스를 하나의 커스텀 Hook으로 만들 수 있다.

```jsx
function setLocalStorage(itemName, value = "" ) {
    const [state, setState] = React.useState(() => {
        return window.localStorage.getItem(itemName) || value
    })

    React.useEffect(() => {
        window.localStorage.setItem(itemName, state)
    }, [state])

    return [state, setState]
}
```

- 함수를 선언하고 itemName 과 value를 받는다.
- itemName은 state 상태 값의 이름이 되고 value는 초기값이 된다.
- return 값으로 state, setState 게터, 세터를 돌려준다.

# 커스텀 훅 사용하기

```JavaScript
const [keyword, setKeyword] = useLocalStorage("keyword")
const [result, setResult] = useLocalStorage("result")
const [typing, setTyping] = useLocalStorage("typing", false)
```

- 반복된 훅은 커스텀 훅으로 묶고, 반복되는 코드는 함수로 묶는다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
