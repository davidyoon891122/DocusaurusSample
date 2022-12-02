---
title: Hook Flow 이해하기 2
tags: [React, Fastcampus, 강좌, 정리, Hook Flow]
---

## Hook Flow 이해하기 더 깊이
- 더 깊은 hook flow 의 사이클을 보기 위해 자식 Child component를 생성하자
```JavaScript
const Chile = () => {
    console.log("   Child render start")
    const [text, setText] = React.useState(() => {
        console.log("   Child useState")
        return ""
    })

    function handleChange(event) {
        setText(event.target.value)
    }

    Rease.useEffect(() => {
        console.log("   Child useEffect")
    })

    Rease.useEffect(() => {
        console.log("   Child useEffect []")
    }, [])

    Rease.useEffect(() => {
        console.log("   Child useEffect [text]")
    }, [text])


    const element = (
        <>
            <input onChange={handleChange}/>
            <p>{text}</p>
        </>
    )

    console.log("   Child render end")
    return element 
}
```
- App의 input 부분과 p 태그 부분을 Child라는 컴포넌트로 빼서 구성한다
- hook flow를 관찰하기 위해 Child에도 동일하게 로그를 남겼다.
- Child의 호출 flow도 동일하다
    - Child render start -> Child useState -> Child render end -> Child useEffect -> Child useEffect [] -> Child useEffect \[text\]

## Clean up
- useEffect에서 새로 useEffect가 실행되기 전에 불변 객체를 정리하는 clean up을 사용한다
```JavaScript
    Rease.useEffect(() => {
        console.log("   Child useEffect")

        return () => {
            console.log("   Child useEffct, [cleanup]")
        }
    })

    Rease.useEffect(() => {
        console.log("   Child useEffect []")

        return () => {
            console.log("   Child useEffct [], [cleanup]")
        }
    }, [])

    Rease.useEffect(() => {
        console.log("   Child useEffect [text]")

        return () => {
            console.log("   Child useEffct [text], [cleanup]")
        }
    }, [text])
```
- Cleanup은 useEffect가 실행되기 전에 실행되고, 컴포넌트가 사라지게 전에 실행된다.

    <img src="/reactImages/hookFlow.png" title="hookFlow"/>
