---
authors: [davidyoon]
tags: [React, Rendering, Rerendering, 강좌]
---

## 엘리먼트 렌더링 React Document 정리

# 엘리먼트 렌더링

- 엘리먼트는 React 앱의 가장 작은 단위이다

```Javascript
const element = <h1>Hello, World</h1>
```

- 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있다
- ReactDOM은 React 엘리먼트와 일차하도록 DOM을 업데이트 한다

## DOM에 엘리먼트 렌더링하기

- HTML에 root div가 있다고 가정한다

```html
<div id="root"></div>
```

- 이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 "루트(root)" DOM노드라고 부른다
- React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있다
- React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있다(이해 못함)
- React 엘리먼트를 렌더링 하기 위해서는 우선 DOM 엘리먼트를 ReactDOM.createRoot()에 전달한다음 React 엘리먼트를 root.render()에 전달해야 한다

```Javascript
const rootElement = document.getElementById('root')
const element = <h1>Hello, World</h1>
ReactDOM.render(element, rootElement)
```

## 렌더링 된 엘리먼트 업데이트하기

- React 엘리먼트를 불변객체이다
- 엘리먼트를 생상한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다
- 엘리먼트 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여준다
- 위 설명을 바탕으로 하면 UI를 업데이트 하는 유일한 방법은 새로운 엘리먼틑 생성하여 이를 React로 전달하는 것이다
- Tick Clock Example

```Javascript
const rootElement = document.getElementById('root')

function tick() {
    const element = (
        <div>
            <h1>Hello, World</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )

    ReactDOM.render(element, rootElement)
}

setInterval(tick, 1000)
```

- 1초 마다 tick 함수를 호출하여 엘리먼트의 변화를 화면에 보여준다

## 변경된 부부만 업데이트하기

- ReactDOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다
- 코드 상에서는 초당 element를 모두 다시 render하지만, 실제 React는 변경된 텍스트 노드만 업데이트 한다
