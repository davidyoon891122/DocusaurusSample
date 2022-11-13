---
authors: [davidyoon]
tags: [React, Reconciliation, Rerendering, Document]
---

## 동기

- state나 props가 갱신되면 render() 함수는 새로운 React Element Tree를 반환할 것이다
- 이때 React는 방금 만들어진 트리에 맞게 가장 효과적으로 UI를 갱신하는 방법을 알아낼 필요가 있다
- 하나의 트리를 가지고 다른 트리로 변환하기 위한 최소한의 연순 수를 구하는 알고리즘이 필요하다
- 최첨단의 알고리즘도 n개의 엘리먼트가 있는 트리에 대해 O(n^3)의 복잡도를 가진다(너무 비싼 연산)
- React는 두가지 가정을 기반하여 O(n) 복잡도의 휴리스틱 알고리즘을 구현했다

1. 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다
2. 개발자가 key prop을 통해, 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할지 표시해 줄 수 있다

## 비교 알고리즘(Diffing Algorithm)

- 두 개의 트리를 비교할 때, React는 두 엘리먼트의 루트(root) 엘리먼트부터 비교한다
- 이후의 동작은 루트 엘리먼트의 타입에 따라 달라진다

# 엘리먼트 타입이 다른 경우

- 두 엘리먼트의 타입이 다르면, 이전 트리를 버리고 완전히 새로운 트리를 구축한다(새로 그린다는 의미)
- 에를 들어 a태그에서 img로, Article에서 Comment로 Button에서 div로 바뀌는 케이스가 모두 트리 전체를 재구축 하는 경우이다
- 트리를 버릴 때 이전 DOM 노드들은 모두 파괴된다
  - compoenentWillUnmount()가 실행된다
- 새로운 트리가 만들어질 떄, 새로운 DOM 노드들이 DOM에 삽입된다
  - UNSAFE_componentWIllMount()가 실행된다(Depreciated)
  - compoenentDidMount()가 이어서 실행된다
  - 이전 트리와 연관된 모든 state는 사라진다

```javascript
<div>
    <Counter />
</div>

<span>
    <Counter />
</span>
```

- 엘리먼트 타입이 변경되었기 때문에 Counter는 사라지고, 새로 다시 마운트가 된다

# DOM 엘리먼트 타입이 같은 경우

- 같은 타입의 두 React DOM 엘리먼트를 비교할 때, React는 두 엘리먼트의 속성을 확인하여, 동일한 내역은 유지하고 변겨된 속성들만 갱신한다

```Javascript
<div className='before' title='stuff' />

<div className='after' title='struff' />
```

- React는 새로운 엘리먼트의 내용을 반영하기 위해 현재 컴포넌트 인스턴스의 props를 갱신한다

1. UNSAFE_componentWillReceiveProps
2. UNSAFE_componentWillUpdate(Depreciated)
3. componentDidUpdate

# 자식에 대한 재귀적 처리

- DOM 노드의 자식들을 재귀적으로 처리할 때, React는 기본적으로 동시에 두 리스트를 순회하고 차이점이 있으면 변경을 생성한다

```Javascript
<ul>
    <li>First</li>
    <li>Second</li>
</ul>

<ul>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```

- First, Second의 일치를 확인하고 Third를 생성한다
- 비효율이 발생하는 경우

```Javascript
<ul>
    <li>Duke</li>
    <li>Villanova</li>
</ul>

<ul>
    <li>Connecticut</li>
    <li>Duke</li>
    <li>Villanova</li>
</ul>
```

- React는 Duke 와 Villanova 종속 트리를 그대로 유지하는 대신 모든 자식을 변경한다(비효율)

# Keys

- 위와 같은 순차적 비교에서 발생하는 비효율을 제거하기 위해 key 속성을 지원한다
- React는 key를 통해 기존 트리와 이후 트리의 자식들이 일치하는지 확인한다

```Javascript
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

- 2014 key를 가진 엘리먼트를 추가하고, 2015, 2016 key를 가진 엘리먼트는 그저 이동만 한다
- key를 설정할떄는 일반적으로 식별자를 key로 설정한다

```Javascript
<li key={item.id}>{item.name}</li>
```

- key는 오로지 형제 사이(같은 속성 태그를 의미하는듯)에서만 유일하면 되고, 전역으로는 유일할 필요가 없다
- 배열의 인덱스를 key로 사용할 수도 있지만, 재배열 하는 경우 비효율적으로 동작할 것이다
- 인덱스를 key로 사용할 경우 state 관련 문제가 발생할 수 있다
  - 항목의 순서가 바뀔경우 key 또한 바뀌면, 그 결과로 state가 엉망이 되나가 의도치 않은 결과가 생길 수 있다
