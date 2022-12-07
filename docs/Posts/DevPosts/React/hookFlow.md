---
title: Hook Flow 이해하기
tags: [React, Fastcampus, 강좌, 정리, Hook Flow]
---

# 훅의 호출 타이밍 이해하기
- hook이 호출되는 타이밍을 확인하기 위해 간단한 예제를 구현한다.
```jsx

const App = () => {
    console.log("App render start")
    const [show, setShow] = React.useState(() => {
        console.log("App useState")
    })

    function handleClick() {
        setShow((prev) => !prev)
    }

    React.useEffect(() => {
        console.log("useEffect null")
    })

    React.useEffect(() => {
        console.log("useEffect null")
    }, [])

    React.useEffect(() => {
        console.log("useEffect null")
    }, [show])

    return (
        <>
            <button onClick={handleClick}>Search</button>
            { show ?
                <>
                    <input />
                    <p></p>
                </>
                : null
            }
        </>
    )
}
```
- setState 에는 기본적으로 전에 set된 값이 prev로 들어가게 된다.
- setShow에서 이전 값을 이용하여 !prev 역의 값을 넣어 줄 수 있다.
- useEffect의 경우 아무것도 넣지 않은 케이스는 모든 변화에 작동한다.
- [] 빈 리스트를 넣은 effect는 최초 한 번만 동작한다.
- \[show\] 리스트에 show를 넣은 경우 show의 변화에 동작하게 된다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
