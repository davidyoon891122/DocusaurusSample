---
title: Class Component
tags: [React, Fastcampus, 강좌, 정리]
---

# Class Component

- 리액트는 훅이 나오기 전까지 상태관리는 클래스 컴포넌트로 만들어 구성하였다.
- React Class는 클래스 생명 주기를 가지고 있다.
- rcc 타이핑 후 enter를 누르면 클래스 컴포넌트가 만들어진다.

```jsx
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hello, World! It's the Class</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
```

- constructor() 말 그대로 생성자를 의미한다.
    - 기본 적인 상태 초기화 등을 여기서 진행한다.
- componentDidMount() 컴포넌트가 생성되면 실행된다.
    - 뷰 생성후 호출되어야 하는 작업들을 여기서 처리한다.
- componentWillUnmount() 컴포넌트가 사라지기 전에 호출된다.
    - deinit 할때 리셋 해주어야 할 작업들을 처리한다.
- render() 클래스 컴포넌트의 뷰를 랜더하는 함수이다.
- class component에서는 this를 통에 상태에 접근한다.
- 상태를 변경할 때에는 set 함수를 사용한다.
- 클래스에서 State 사용시 주의 사항
    - 직접 State를 수정하면 안된다.
        - 렌더링이 비정상적으로 작동할 수 있다.
    - State는 비동적이다.
    - State 업데이트는 병합된다.


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/create-a-new-react-app.html#create-react-app