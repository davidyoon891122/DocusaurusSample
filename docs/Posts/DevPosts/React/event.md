---
title: Event(SyntheticEvent)
tags: [React, Fastcampus, 강좌, 정리]
---

# React Event

- React Event 핸들러는 모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼 SynthenticEvent 객체를 전달받는다.
- stopPropagation(), preventDefault()를 포함해서 인터페이스는 브라우저의 고유 이벤트 같지만 모든 브라우저에서 동일하게 작동한다.

# 이벤트 처리하기

- React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용한다.
- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.

```jsx
<button onClick={handleButtonClick}>Button</button>
```

- React에서는 false를 반환해도 기본동작을 방지할 수 없다.
- preventDefault() 를 사용해야만 한다.

# onClickCapture

- Capture은 부모에서 하위 컴포넌트로 내려가면서 이벤트를 발생시키기 때문에 부모의 이벤트가 먼저 발생한다.
- Bubble은 반대로 부모로 올라오면서 이벤트가 발생하여 마지막에 발생하게 된다.

```jsx
export default function Event() {
    const handleButtonClick = (e) => {
        console.dir(e)
        console.log("handleButtonClick")
    }

    const handleClickCapture = () => {
        console.log("handleClickCapture")
    }

    const handleClickCapture2 = () => {
        console.log("handleClickCapture2")
    }

    const handleClickBubble = () => {
        console.log("handleClickBubble")
    }

    const handleMouseLeave = (e) => {
        console.dir(e)
        console.log("handleButtonClick")
    }

    

  return (
    <div onClickCapture={handleClickCapture}>
        <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
        </div>
    </div>
  )
}
```

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/events.html#gatsby-focus-wrapper