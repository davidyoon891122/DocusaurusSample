---
title: 컴포넌트 사이드 이펙트 다루기
tags: [React, Fastcampus, 강좌, 정리, useEffect]
---

# side effect

- 부작용, 의도하지 않은 효과
- 부수 효과

# keyword 값 불러오기

```JavaScript
const [keyword, setKeyword] = React.useState(() => {
    console.log("Initialize")
    return window.localStorage.getItem("keyword")
})
```

- useState 초기 값으로 함수를 넣을 수 있는데, localStorage.getItem으로 값을 가져와 함수로 전달한다.
- useState 초기 값으로 직접 getItem을 가져오지 않는 이유는 lazy 하게 처리해서 I/O delay 문제를 해결하기 위함이다.

# keyword 값 로컬에 저장하기

```JavaScript
function handleChange(event) {
    window.localStorage.setItem("keyword", event.target.value)
    setKeyword(event.target.value)
    setTyping(true)
}
```

- keyword 라는 이름으로 로컬 브라우저 저장소에 키워드가 변경 함수가 호출될 때마다 값을 저장한다.
- side effect를 확인하기 위해 handleChange에서 값을 세팅하지 않고 App 단에서 keyword로 값을 setItem 해주게 변경

```JavaScript
window.localStorage.setItem("keyword", keyword)

function handleChange(event) {
    setKeyword(event.target.value)
    setTyping(true)
}
```

- 위와 같이 구현하면 keyword가 set될 때마다 render가 되며 값이 저장되게 된다.
- 문제는 버튼 클릭시에도 다른 state의 값이 변경되며 keyword를 Set 하게 된다.
- keyword가 바뀔 떄만 값을 저장하고 싶으면 useEffect를 사용한다

```JavaScript
React.useEffect(() => {
    console.log("Effect")
    window.localStorage.setItem("keyword", keyword)
}, [keyword])
```

- 다음과 같이 useEffect안에 호출되는 함수에 값을 세팅하고, 두 번쨰 파람에 [keyword] 디펜던시 값을 넣어주면 해당 값에 변화에만 해당 함수를 호출한다.
- 두 번째 파람에 [] 빈 배열을 넣으면 초기 1 회만 호출된다.
- 디팬던시 array를 주지 않으면, 모든 변화에 반응한다.


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
