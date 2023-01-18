---
title: 리액트 List와 Key
tags: [React, Fastcampus, 강좌, 정리, List, Key]
---

# 리스트와 key

## 리스트 변환

- Javascript에서 배열에서 map() 함수를 사용하여 값이 변경된 배열을 돌려받는 방식와 매우 유사하다.

```jsx
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) => <li>{number}</li>)
```

# 투두 리스트 List 컴포넌트 만들기

- 투두 리스트를 반환하는 List 컴포넌트를 만들어보자
```jsx
export default function List() {
    const todos = [
        {
            id: 1,
            text: "Walk"
        },
        {
            id: 2,
            text: "Run"
        },
        {
            id: 3,
            text: "Study"
        },
        {
            id: 4,
            text: "Play"
        }
    ]

    const Item = (props) => {
        return <li>{props.text}</li>
    }

    const todoItems = todos.map((todo) => <Item key={todo.id} {...todo} />)

    return (
        <>
            {todoItems}
        </>
    )
}
```

- todos 배열에 객체를 생성하여 간단한 투두 오브젝트를 생성한다.
- Item 객체는 props를 받아서 li 태그로 리스트를 보여주는 컴포넌트이다.
- todoItems라는 벼수에 Item 배열을 만들어서 돌려준다.
- key는 컴포넌트에서 설정해주어야 하며, 설정하지 않으면 기본 인덱스를 키로 설정하지만 워닝을은 뜨게된다.
- key는 오로지 리액트가 리스트 컴포넌트의 유일성을 알기위해 설정하는 값이라서 props로 전달되어 children에서 사용할 수 없다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components