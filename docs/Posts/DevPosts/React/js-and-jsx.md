---
title: JS와 JSX 섞어 쓰기
tags: [React, 강좌, JS, JSX, map]
---

## JS와 JSX 함께 사용하기

- Text 라는 Custom Element 구현

```
const Text = ({text}) => {
    if (text.charAt(0) === text.charAt(0).toUpperCase()) {
        return <h1>{text}</h1>
    } else {
        return <h3>{text}</h3>
    }
}

const element = (
    <>
        <Text text="Text" />
        <Text text="text" />
    </>
)
```

- Text의 text 값이 대문자로 시작하면 h1 태그(JSX)를 감싸는 코드를 돌려준다
- Text의 text 값이 소문자로 시작하면 h3 태그(JSX)를 감싸는 코드를 돌려준다

## Selected 값에 따라 다른 태그를 리턴해주는 Custom Element 구현

```
const Number = ({number, selected}) => {
    return selected ? <h1>{number}</h1> : <h3>{number}</h3>
}

const element = (
    <>
        {[1,2,3,4,5,6,7,8,9,10].map((number) => (<Number number={number} selected={number % 3 === 0}) />))}
    </>
)
```

- selected 값에 따라 다른 태그를 리턴하는 함수 구현
- 1부터 10까지 수의 배열에 map을 사용하여 Number Custom Element 생성 selected 값은 3으로 나누어 떨어지는 값만 true로 처리 하여 3 6 9 값만 h1 태그로 반환

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
