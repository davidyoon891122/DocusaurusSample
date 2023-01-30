---
title: Hook 심화 1
tags: [React, Fastcampus, 강좌, 정리, Hook]
---

# Effect Hook 사용하기

## Clean-up을 이용하지 않는 Effects

- React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있다.
- 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 Clean-up이 필요 없다.
- 위에 것들은 실행 이후에 신경쓸 것들이 없기 때문이다.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

- 위 코드는 상태가 바뀌 때마다 document의 title을 바꾸는 방법이다.
- 클래스의 경우 초기 값이 세팅 될때에는 상태를 바꾸기 위해 componentDidMount에서 도큐먼트 타이틀을 변경해준다.
- 초기 이후 상태가 업데이트 될 때에는 componentDidUpdate에서 도큐먼트 타이틀을 변경해준다.
- 이러면 두 함수에서 동일한 코드의 중복이 발생한다.

## Hook을 사용한 예시

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

- useEffect를 사용하여 렌더가 될 때마다 값이 변경되도록 한다.

## 결론

- 클래스에서 생명주기별로 관리되던 중복 코드들을 useEffect 사용하면, 한 곳에서 코드 중복 없이 사용할 수 있다.
- clean-up 또한 다른 생명주기에서 사용되던 코드를 useEffect내에서 리턴함수로 처리할 수 있다.

## effect가 업데이트 시마다 실행되는 이유

- 특정 id를 구독하는데 useEffect가 갱신되지 않으면, unmount 후 다시 렌더링 하며 구독을 해야하기 때문이다.
- 그래서 구독 갱신에 대한 변화는 didUpdate에서 처리하게 되는데 useEffect를 사용하면 특별한 코드 없이 갱신을 할 수 있다.

## useEffect 최적화 

- 다만, useEffect가 모든 경우 실행이 되면 반복해서 갱신 해제를 하게 된다.
- useEffect의 두번째 인수에 배열을 넘기면, 해당 배열에 포함된 값이 렌더링 될때마다 useEffect가 실행되게 된다.(dependency array)
- 컴포넌트 범위 내에서 바뀌는 값들과 effect에 의해 사용되는 값들을 모두 포함하는 것이 좋다.


# 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/hooks-effect.html
