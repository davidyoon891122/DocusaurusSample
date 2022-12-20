---
title: 리액트 Element에 스타일 입히기
tags: [React, Fastcampus, 강좌, 정리, ErrorBoundary, Error Handling]
---

# React에서 element에 키가 필요한 이유
- 투두 리스트를 삭제하고 되돌리는 프로그램을 구현해보자.
```jsx
const todos = [
    [
        { id: 1, value: "Wish dishes" },
        { id: 2, value: "Clean the face"},
        { id: 3, value: "Running"},
        { id: 4, value: "Studying"}
    ],
    [
        { id: 1, value: "Wish dishes" },
        { id: 3, value: "Running"},
        { id: 4, value: "Studying"},
        { id: 2, value: "Clean the face"},
    ],
    [
        { id: 4, value: "Studying"},
        { id: 1, value: "Wish dishes" },
        { id: 2, value: "Clean the face"},
        { id: 3, value: "Running"},
    ]
]

const App = () => {
    const [items, setItems] = React.setState(todos)

    React.useEffect(() => {
        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * 3)
            setItems(todos[random])
        }, 1000)
    }, [])

    const handleDoneClick = (todo) => {
        setItems(items => items.filter((item) => item !== todo))
    }

    const handleRestoreClick = () => {
        setItems((items) => {
            ...items,
            todos.find((todo) => !items.include(todo))
        })
    }

    return (
        <>
            {items.map((todo, index) =>
                <div key={todo.id}>
                    <button onClick={() => handleDoneClick(todo)}>{todo.value}</button>
                </div>
            )}
            <br />
            <button onClick={handleRestoreClick}>Restore</button>
        </>
    )
}
```
- button으로 구성된 todo를 만든다.
- button Click 이벤트는 items에서 선택된 todo와 같지 않은 값들만 다시 setItems 하는 방식으로 state를 변경하여 삭제 로직을 구현한다.
- handleRestoreClick 이벤트는 items 에 포함되지 않은 요소를 todos 에서 찾아 붙여 넣어주는 복구 로직은 구현한다.
- 이 프로그램의 핵심이 순서가 다른 todos를 1 초마다 변경 될때 key값의 유무에 따라 tab 된 버튼의 render방에 있다.
- key 값을 넣지 않은 버튼들은 tab을 해놓으면 탭은 유지되지만 버튼의 값들이 계속 바뀌게 된다.
- element를 특정지을 수 있는 키를 넣에주게 되면 tab의 값이 key값에 따라 달려저서 유의미한 결과를 얻게 된다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
