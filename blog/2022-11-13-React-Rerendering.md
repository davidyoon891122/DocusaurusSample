---
authors: [davidyoon]
tags: [React, Rendering, Rerendering, 강좌]
---

## 리액트와 리랜더링 알아보기

# 바닐라 JS 변경으로 인해 Element를 다시 그린다

```Javascript
const rootElement = document.getElementById('root')

function random() {
    const number = Math.floor(Math.random() * (10 - 1) + 1)

    const element = `
        <button>${number}</button>
    `

    rootElement.innerHTML = element
}

random()
```

- 바닐라 JS에서 요소에 변경이 발생하면 모든 element들이 다시 그려지게 된다

# React는 변경된 부분만 다시 그린다

```Javascript
const rootElement = document.getElementById('root')

function random() {
    const number = Math.floor(Math.random() * (10 - 1) + 1)

    const element = <button>{number}</button>

    ReactDOM.render(element, rootElement)
}

random()
```

- React에서는 변경된 요소들의 값만 변경이 이루어 진다

# 모든 요소가 변경되는 것과 특정 요소만 변경되는 것 둘은 장단점이 존재한다

## 리액트와 리랜더링 알아보기 2

- React Element는 불변객체(Immutable)이다
- ReactDOM.render(element, rootElement) 로 값을 전달하면, 변경 판단 및 반영은 React가 한다
- https://ko.reactjs.org/docs/reconciliation.html

# 비교 알고리즘

- 앨리먼트 타입이 바뀌는 경우
  - 이전 앨리먼트는 버리고 새로 그린다
- 앨리먼트 타입은 같고 props 만 변경된 경우
  - key를 먼저 비교하고, props를 비교해서 변경사항을 반영한다

## 정리

- 리액트의 앨리먼트는 불변 객체이다
- 리액트의 변경 사항 반영은 리액트에게 일임한다
- 리액트의 비교는 Reconciliation(재조정)이다 비교 연산(알고리즘)을 통해 진행한다
  - 타입이 바뀌면 이전 내용을 버리고 다시 그림
  - 타입이 같으면 key값 비교후 변경된 props에 대한 변경사항만 반영한다
- Virtual Dom은 리액트가 가상 돔을 가지고 있다가 비교할떄 사용한다

### 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
