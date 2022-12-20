---
title: 리액트 Element에 스타일 입히기
tags: [React, Fastcampus, 강좌, 정리, ErrorBoundary, Error Handling]
---

# React Error Handling
- JS에러 발생 시 React 뷰를 보여주지 못하고 에러가 발생할 수 있다.
- 이러한 에러를 핸들링 하기 위해 React에서는 ErrorBoundary라는 클래스를 제공한다.

```jsx

class ErrorBoundary extends React.Component {
    state = { error: null }

    static getDerivedStateFromError(error) {
        return { error }
    }

    render() {
        const { error } = this.state
        if (error) {
            return <this.props.fallback error={error} />
        }
        return this.props.children
    }
}


const Child = () => {
    throw new Error("Something Wrong...")
    return <p>Child...</p>
}

const Fallback = ({error}) = {
    return <p>{error.message}</p>
}


const App = () => {
    return (
        <>
            <p>App</p>
            <ErrorBoundary fallback={Fallback}>
            <Child />
            </ErrorBoundary>
        </>
    )
}
```
- Child 컴포넌트에서 new Error로 강제로 Error를 만들어 낸다.
- 에러가 발생하면 ErrorBoundary props로 에러가 Fallback 함수가 전달 되고 error를 p 태그에 안에 넣어서 보여준다.



## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
