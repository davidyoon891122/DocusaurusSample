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
    - React.Component의 하위 클래스에서 반드시 정의해야하는 메서드이다.
- class component에서는 this를 통에 상태에 접근한다.
- 상태를 변경할 때에는 set 함수를 사용한다.
- 클래스에서 State 사용시 주의 사항
    - 직접 State를 수정하면 안된다.
        - 렌더링이 비정상적으로 작동할 수 있다.
    - State는 비동적이다.
    - State 업데이트는 병합된다.


# 컴포넌트 생명주기

- 모든 컴포넌트는 여러 종류의 "생명주기 메서드"를 가지며, 이 메서드를 오버라이딩하여 특정 시점에 코드가 실행되도록 설정할 수 있다.

## 마운트

- 인스턴스가 생성되어 DOM 상에 삽입될 떄에 순서대로 호출된다.
    - constructor()
    - static getDeriviedStateFromProps()
    - render()
    - componentDidMount()

## 업데이트

- props 또는 state가 변경되면 갱신이 발생한다.
- 컴포넌트가 다시 렌더링 될 때 순서대로 호출된다.
    - static getDeriviedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()

## 마운트 해제

- 컴포넌트가 DOM 상에서 제거될 때에 호출된다.
    - componentDidUpdate()

## 오류처리

- 자식 컴포넌트를 렌더링 하거나, 생명주기 메서드를 호출하거나, 생성자 메서드를 호출하는 과정에서 오류가 발생했을 때 호출된다.
    - static getDerivedStateFromError()
    - componentDidCatch()


# render()

- render() 메서드는 클래스 컴포넌트에서 반드시 구현돼야하는 유일한 메서드이다.
- render 함수는 순수해야 한다. 즉, 컴포넌트의 state를 변경하지 않고, 호출될 떄마다 동일한 결과를 반환해야하며, 브라우저와 직접적으로 상호작용하지 않는다.

# Constructor()

- 메서드를 바인딩하거나 state를 초기화 하는 작업이 없다면, 해당 React 컴포넌트에는 생성자를 구현하지 않아도 된다.
- 컴포넌트 생성자를 구현할 때에는 super(props)를 호출해야만 한다.
- 생성자의 목적
    - this.state에 객체를 할당하여 지역 state를 초기화
    - 인스턴스에 이벤트 처리 메서드를 바인딩
- 내부에서 setState()를 호출하면 안된다.
- 지역 state가 필요하면 생성자 내에서 아래와 같이 처리한다.

```jsx
constructor(props){
    super(props)
    this.state = { counter : 0}
}
```

- this.state를 직접 할당할 수 있는 유일한 곳이다.
- state에 props를 복사하면 안된다.

# compoenetDidMount()

- 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출된다.
- DOM 노드가 있어야 하는 초기화 작업은 여기서 이루어 진다.
- 외부에서 데이터를 불러와야 한다면 이곳에서 네트워크 요청을 하면 된다.
- 데이터 구독을 위한 최적의 장소이다.
- 데이터 구독이 이루어졌다면 componentWillUnmound()에서 구독 해제 작업이 필요하다.

# componentDidUpdate()

- 갱신이 일어난 직후에 호출된다.
- 최초 렌더링에는 호출되지 않는다.
- 컴포넌트가 갱신되었을 때, DOM을 조정하기 위하여 이 메서드를 활용하면 좋다.

```jsx
componentDidUpdate(prevProps) {
  // 전형적인 사용 사례 (props 비교를 잊지 마세요)
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

# componentWillUnmound()

- 컴포넌트가 마운트 해제되어 제거되기 직전에 호출된다.
- 타이머 제거, 네트워크 요청 취소, componentDidMount() 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행한다.

# 생명주기 이해하기
```jsx
import React, { Component } from "react";

export default class ClassLCComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor")
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.timerID = setInterval(() => {
        this.tick()
    }, 10000)
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()})
  }

  handleClick() {
    alert(this.state.date)
  }

  render() {
    console.log("render")
    return <div>
      <h1 onClick={this.handleClick}>Hello, LifeCycle!</h1>
      <h2>{this.state.date.toLocaleDateString()}</h2>

    </div>;
  }
}
```

- 사용자 함수가 this.state에 접근해야만 할 떄에는 생성자에서 바인딩을 해주어야만 한다.

```jsx
  constructor(props) {
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick() {
    alert(this.state.date)
  }
```

- 단, arrow function일 경우에는 바인딩이 필요없다.


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/react-component.html#gatsby-focus-wrapper