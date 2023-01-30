---
title: Hook 심화 1
tags: [React, Fastcampus, 강좌, 정리, Hook]
---

# Hook 소개

## 개요

- Hook React 16.8 부터 React 요소로 새로 추가되었다.
- Hook 선택적으로 사용이 가능하다.
- 100% 이전 버전과의 호환성을 유지한다.
- React에서 class는 제거될 계획이 없다.

## 동기

- 컴포넌트 사이에서 상태 로직을 재사용 하기 어렵다.
    - React는 컴포넌트간에 재사용 가능한 로직을 붙이는 방법을 제공하지 않았다.
    - 상태관련 로직을 공유하기 위해 더 좋은 기초 요소가 필요했다.
    - Hook을 사용하면 컴포넌트로부터 상태 관련 로직을 추상화할 수 있다.
    - 이는 독립적은 테스트와 재사용이 가능하게 한다.
    - Hook은 계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 돕는다.
- 복잡한 컴포넌트들은 이해하기 어렵다.
    - class는 여러 생명 주기가 있는데, 여러 생명 주기에서 데이터가 세팅되었다.
    - 서로 관련없는 내용들은 생명주기에 따라 묶여 처리 되었다.
    - 이 때문에 분리 및 테스트가 어려운 구조가 되었다.
    - 생명주기로 쪼개는 것 보다는 Hook을 통해 서로 비슷한 것을 하는 작은 함수의 묶음으로 컴포넌트를 나누는 방법을 사용하는 것이 바람직하다.
- Class는 사람과 기계를 혼동시킨다.
    - this 키워드는 다른 대부분의 언어와 다르게 동작하여 사용자에게 혼란을 주었다.
    - 코드의 재사용성과 구성을 어렵게 만들기도 했다.


# Hook 개요


## state Hook

```jsx
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

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

- useState가 바로 hook이다.
- useState를 저장된 값을 돌려주는 getter 와 값을 저장하는 setter로 구성된다.
- 위에서는 count가 getter, setCount가 setter의 역할을 한다.
- useState는 인자로 초기값을 전달 받는다.
- useState(0) 으로 선언하면 count에는 0이 초기값으로 할당된다.

## Hook이 무엇인가요?

- Hook은 함수 컴포넌트에서 React state와 생명주기 기능(Lifecycle features)을 "연동(hook into)"할 수 있게 해주는 함수이다.
- Hook은 클래스 안에서는 동작하지 않는다.
- 대신 class 없이 React를 사용할 수 있게 해준다.

## Effect Hook

- React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업을 하는데 이런 모든 동작을 "side effects"라고 한다.
- 이런 작업들은 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업이기 떄문이다.
- Effect Hook, 즉 useEffect 함수 컴포넌트 내에서 이런 side effects를 수행할 수 있게 해준다.
- React class의 componentDidMount 나 componentDidUpdate, componentWillUnmount와 같은 목적으로 제공되지만, 하나의 API로 통합된 것이다.

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
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

- useEffect를 사용하면, React는 DOM을 바꾼 뒤에 " effect" 함수를 실행한다.
- effect는 컴포넌트 안에 선언되어 있기 때문에 props와 state에 접근할 수 있다.
- 기본적으로 React는 매 렌더링 이후에 effects를 실행한다.

## Effect 해제

```jsx
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
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

- Effect의 해제가 필요하면 useEffect안에 return 을 사용하여 해제하는 함수를 반환해주면 되며, 이는 optional이다.
- 위 예에서는 컴포넌트가 unmount 될 때 React는 ChatAPI에서 구독을 해지할 것이다.

## Hook의 사용 규칙

- 최상위에서만 Hook을 호출해야 한다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행시키면 안된다.
- React 함수 컴포넌트 내에서만 Hook을 호출해야한다.
    - 일반 자바스크립트 함수내에서 Hook을 호출하면 안된다.
    - 직접 작성한 custom Hook에서는 호출할 수 있다.

# 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
