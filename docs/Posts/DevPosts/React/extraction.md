---
title: Extraction(Components and Props)
tags: [React, Fastcampus, 강좌, 정리]
---

# React Extraction

- 컴포넌트를 통해 UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조직을 개별적으로 관리할 수 있다.

```jsx
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- 위 함수는 여러 뷰로 구성되어 있다.
- 위 예를 리액트 컴포넌트로 추출하여 관리해보자

```jsx
function Avatar(props) {
    return (
        <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    )
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avartar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- UserInfo 컴포넌트로 추출한다.
```jsx

function UserInfo(props) {
    return (
        <div className="UserInfo">
        <Avartar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

- 위 예처럼 복합적인 뷰로 구성된 뷰를 여러 컴포넌트로 추출하여 관리할 수 있다.
- 주의 props는 읽기 전용이기 때문에 값을 직접 변경하거나 덮어쓰기를 하지 말아야 한다.


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/components-and-props.html#gatsby-focus-wrapper