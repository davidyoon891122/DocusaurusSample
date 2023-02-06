---
title: Composition 심화 1
tags: [React, Fastcampus, 강좌, 정리, Composition]
---

# 합성 (Composition) vs 상속(Inheritance)

- React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋다.

# 컴포넌트에서 다른 컴포넌트를 담기

- 어떤 컴포넌트들은 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있다.
- 범용적인 박스 역할을 하는 sidebar 혹은 dialog와 같은 컴포넌트에서 자주 볼 수 있다.
- 이러한 컴포넌트에서는 특수한 children prop를 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.

```jsx
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

- 이러한 방식으로 다른 컴포넌트에서 JSX를 중첩하여 임의의 자식을 전달할 수 있다.
- 컴포넌트에 여러 개의 "구멍"이 필요할 수도 있다.

```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```
- Concat, Chat같은 React 엘리먼트는 단지 객체이기 때문에 다른 데이터처럼 prop으로 전달 가능하다.
- React에서 prop으로 전달할 수 있는 것에는 제한이 없다.

# Specialization

- "특수한 경우"인 컴포넌트를 고려해야할 때가 있다.
- WelcomeDialog 는 Dialog의 특수한 경우라고 할 수 있다.

```jsx
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```


# 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/composition-vs-inheritance.html#gatsby-focus-wrapper
