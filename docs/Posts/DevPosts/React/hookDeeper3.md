---
title: Hook 심화 3
tags: [React, Fastcampus, 강좌, 정리, Hook]
---

# 자신만의 Hook 만들기

- 커스텀 훅은 여러 Hook들을 모아 놓은 함수이다.

```jsx
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

# 훅의 종류
- 기본 Hook
    - useState
        - 상태 유지 값과 그 값을 갱신하는 함수를 반환한다.
        - 최초로 렌더링을 하는 동안, 반환된 state는 첫 번째 전달된 인자(initialState)의 값과 같다.
        - setState함수는 state를 갱신할 떄 사용한다.
        - 함수의 갱신
            - 이전 state를 사용해서 새로운 state를 계산하는 경우 setState로 전달할 수 있다.
            ```jsx
            function Counter({initialCount}) {
                const [count, setCount] = useState(initialCount);
                return (
                    <>
                    Count: {count}
                    <button onClick={() => setCount(initialCount)}>Reset</button>
                    <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
                    </>
                );
            }
            ```
        - 갱신의 취소
            - State Hook을 현재의 동일한 state 값으로 갱신하는 경우 React 자식을 렌더링 한다거나 무엇을 실행하는 것을 회피하고 그 처리를 종료한다.
    - useEffect
        - 화면에 렌더링이 완료된 후에 수행되게 된다.
        - 기본적인 동작은 모든 렌더링이 완료된 후 수행된다.
        - 어떤 값이 변경되었을 때만 실행되게 할 수도 있다.(Dependency Array)
        - 정리(Clean up)
            - effect는 종종 컴포넌트가 화면에서 제거될 떄 정리해야 하는 리소스를 만든다.
            - 가령 구독이나, 타이머 ID 와 같은 것을 말한다.
            - 이것을 수행하기 위해 useEffect로 전달된 함수는 clean-up 함수를 반환할 수 있다.
            ```jsx
            useEffect(() => {
                const subscription = props.source.subscribe();
                return () => {
                    // Clean up the subscription
                    subscription.unsubscribe();
                };
            });
            ```
            - clean-up 함수는 메모리 누수 방지를 위해 UI에서 컴포넌트를 제거하기 전에 수행된다.
            - Effect 타이밍
                - didMoundt 와 didUpdate와는 다르게, useEffect로 전달된 함수는 지연 이벤트 동안에 레이아웃 배치와 그리기를 완료한 후 발생한다.
    - useContext
    - useReducer
        - useState의 대체 함수이다.
        - (state, action) => newState의 형태로 reducer를 받고 dispatch 메서드와 짝의 형태로 현재 state를 반환한다.
        ```jsx
            const initialState = {count: 0};

            function reducer(state, action) {
            switch (action.type) {
                case 'increment':
                return {count: state.count + 1};
                case 'decrement':
                return {count: state.count - 1};
                default:
                throw new Error();
            }
            }

            function Counter() {
            const [state, dispatch] = useReducer(reducer, initialState);
            return (
                <>
                Count: {state.count}
                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>
                </>
            );
            }
        ```

- 추가 Hooks
    - useReducer
    - useCallback
    - useMemo
    - useRef
    - useImperativeHandle
    - useLayoutEffect
    - useDebugValue
    - useDeferredValue
    - useTransition
    - useId


# Reducer 예제

```jsx
import React, { useReducer }from 'react'


export default function Reducer() {
    const initialState = {count: 0, name: 'david'}

    function reducer(state, action) {
        switch(action.type) {
            case 'reset':
                return initialState
            case 'increment':
                return { count: state.count + 1 , name: 'timmy'}
            case 'decrement':
                return { count: state.count - 1 , name: 'amy'}
            default:
                throw new Error()
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}
            <br />
            Name: {state.name}
            <br />
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() =>  dispatch({type: 'decrement'})}>-</button>
            <button onClick={() =>  dispatch({type: 'increment'})}>+</button>
        </div>
    )
}

```

- 한가지의 변화가 있을 떄는 useState의 prev 값을 변경하여 처리할 수 있다.
- 단 여러가지 액션이 필요하고 다양한 state변화가 필요할 경우에는 useReducer를 사용하면 간단하게 상태를 변화 시킬 수 있다.


# 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/hooks-effect.html
