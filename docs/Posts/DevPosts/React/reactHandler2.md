---
title: 여러가지 시도해보기
tags: [React, Fastcampus, 강좌, 정리, event handler]
---

# 스타일 그리기

- input 필드와 button을 구현한다.

```JavaScript
const App = () => {
    return (
        <>
            <input />
            <button>search</button>
        </>
    )
}
```

# 리스너 함수 구현하기.

- input 값이 변할 때 마다 값을 체크하는 onChange 이벤트 함수를 구현한다.
- button 을 클릭할 때 입력 값을 보여줄 onClick 이벤트 함수를 구현한다.
- 전역 필드에 state 객체를 선언하고 값을 변화 시켜줄 setState 함수를 구현한다.

```JavaScript
const state = {
    keyword: "",
    typing: false,
    result: ""
}

const App = () => {
    function handleChange(event) {
        setState(
            {
                keyword: event.target.value,
                typing: true
            }
        )
    }

    function handleClick() {
        setState(
            {
                typing: false,
                result: `We find results of ${state.keyword}`
            }
        )
    }

    return (
        <>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>search</button>
            <p>
                {state.typing ? `Looking for ${state.keyword}` : state.result}
            </p>
        </>
    )

    function setState(newValue) {
        Object.assign(state, newValue)
    }
}
```

- event.target.value를 하면 input 필드에 입력된 값들을 가져온다.
- Object.assign을 하면 state 객체에서 변화된 값들만 변경시킨다.
- p 태그에 state.typing이 true 이면 찾고 있는 메시지를 false이면 결과값을 보여준다.
