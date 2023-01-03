---
title: Class Component(State and LifeCycle)
tags: [React, Fastcampus, 강좌, 정리]
---

# Functional Component
- 리액트 훅이 나오고 난 이후 최근 대부분의 리액트 앱은 함수형으로 구성된다.
- 함수형으로도 클래스의 모든 라이프 사이클을 처리와 상태 처리가 가능하다.
- 함수형 컴포넌트를 상펴보자

```jsx
import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        const interval = setInterval(() => {
            tick()
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    }, [])

    const tick = () => {
        setDate(new Date())
    }

    return (
        <div>
            <h1>Hello, World!, It's the functional</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    )
}
```
- 함수형 컴포넌트는 return으로 뷰를 돌려준다.
- useState를 사용하여 상태를 선언하고 초기화한다.
- useEffect를 사용하여 초기 1회 호출을 시작하여 기본 세팅을 진행한다.
- useEffect 클린업(return 구문)을 사용하여, 뷰가 사라질때 액션을 구현할 수 있다.


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/state-and-lifecycle.html#gatsby-focus-wrapper