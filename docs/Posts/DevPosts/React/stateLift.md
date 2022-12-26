---
title: 상태 올리기(주입하기))
tags: [React, Fastcampus, 강좌, 정리, event handler]
---

# State Lift

- 뷰모 뷰에서 하위 뷰의 상태 값을 사용해야 하는 경우 부모 뷰에서 상태를 선언하고 하위 뷰에 상태를 주입하여 사용할 수 있다.
- id, password input 모두에 값이 들어 갔을 때 login button을 활성화 하는 예를 보자

```jsx
const Id = (handleIdChange) => {
    return (
        <label>ID: </label>
        <input onChange={handleIdChange} />
    )
}

const Passsword = (handlePasswordChange) => {
    return (
        <label>ID: </label>
        <input onChange={handlePasswordChange} />
    )
}


const App = () => {
    const [id, setId] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleLoginClick = (event) => {
        event.preventDefault()
        alert(`id: ${id.length}, password: ${password.length}`)
    }

    const handleIdChange = (event) => {
        setId(event.target.value.length)
    }

    const handlePasswordChage = (event) => {
        setPassword(event.target.value.length)
    }

    return (
        <>
            <Id handleIdChange={handleIdChange} />
            <Password handlePasswordChange={handlePasswordChange} />
            <button onClick={handleLoginClick} disabled={ id === 0 || password === 0}>Login</button>
        </>
    )
}

ReactDOM.reander(<App />, rootElement)
```

- 위와 같이 Id, Password 컴포넌트를 만들어준다.
- id, password state와 handle 함수들은 App에서 구현하여 컴포넌트에 props로 주입시켜준다.
- 사실 위의 예는 lifting이 아닌 drilling이 맞다.
- 하지만 위와 같은 경우는 깊이가 깊은 케이와 복잡한 형태에 알맞지 않기 때문에, 상태를 관리하는 다른 라이브러리와 기능을 사용하여. 구현한다.


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://www.w3schools.com/js/js_events.asp