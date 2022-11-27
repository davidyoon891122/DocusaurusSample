---
title: 이벤트 핸들러 써보기
tags: [React, Fastcampus, 강좌, 정리, event handler]
---

## 이벤트

- Vanila JS 에서는 addEventListener를 사용한다.
- on{event}, onclick, onmouseout, onfocus, onblur 등이 있다.

# JavaScript Events

- HTML events are "things" that happen to HTML elements
- When JavaScript is used in HTML pages, JavaScript can "react" on these events
- HTML 이벤트란 HTML 요소들에 발생하는 것이다.
- 자바스크립트가 HTML에서 사용될 때, 자바스크립트는 이러한 이벤트에 react 할 수 있다.

# Button Event

```JavaScript
<p id='demo'></p>
<button id="button" onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<script>
    const button = document.getElementById("button")
    button.addEventListener("mouseout", () => alert("Bye"))
</script>
```

- 이벤트를 호출하는 방법

1. button 태그 안에서 onclick에 자바스크립트를 넣어주어서(일반적으로 함수) 이벤트를 호출하는 방법(inline 방식)
2. addEventListener를 통해 이벤트를 넣어주는 방법

- 한 요소에 여러 이벤트를 동작을 넣으면, 이벤트가 발생하면 넣어준 동작들이 모두 실행된다.

# React Event

- on{Event}, onClick, onMouseOut, onFocus, onBlur
- 카멜케이스로 이벤트를 표현한다.

# React Handler 써보기

## 참조

- https://www.w3schools.com/js/js_events.asp
