---
title: ConditionalRendering
tags: [React, Fastcampus, 강좌, 정리]
---

# ConditionalRendering

- 조건부 렌더링은 말 그대로 조건에 맞는 경우에 해당하는 컴포넌트를 보여주는 것이다.
- Javascript의 if 문을 사용하는 것과 동일하다

```jsx

function UserGreeting(props) {
    return <h1>{props.name && props.name + ','} Welcome {Boolean(props.count) && `It's ${props.count} times`} </h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up</h1>
}

function Greeting(props) {
    return props.isLoggedIn
    ? <UserGreeting name="David" count={0} />
    : <GuestGreeting />
}

export default function Condition() {
    const isLoggedIn = true;
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn}>
        </div>
    )
}
```

- isLoggedIn에 값에 따라 UserGreeting, GuestGreeting 컴포넌트를 각각 보여준다.
- 단 falsy한 값에 유의해야 한다.
- UserGreeting에서 props로 받은 props.count의 값을 && 연산자로 표현하면 의도하지 않은 결과를 발생 시키기 떄문에 falsy의 여지가 있는 변수는 Boolean으로 처리해야한다.
- `` 백키로 삼항 연산자로 표현해도 명확해진다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/create-a-new-react-app.html#create-react-app