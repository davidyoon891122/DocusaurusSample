---
title: Composition
tags: [React, Fastcampus, 강좌, 정리]
---

# React Composition

- create-react-app 으로 만든앱에서 components 디렉토리를 만든다.
- 해당 디렉토리안에 Composition.jsx 파일을 생성한다.
- VSCode Extension을 설치한다.
- VS Code ES7 React/Redux/React-Native/JS snippets을 다운받는다.
- rfc 라고 타입핑하고 enter를 치면 functional components가 자동으로 생성된다.
- Welcome Component를 만든다.

```jsx
function Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>
}

export default function Composition() {
    retunr (
        <div>
            <Welcome name="David" />
            <Welcome name="Yoon" />
            <Welcome name="Kim" />
        </div>
    )
}
```

- 만들어 놓은 Wincome 컴포넌트를 여러개 사용하여 컴포넌트를 구성할 수 있다.
- 이러한 것을 composition(구성)이라고 한다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/create-a-new-react-app.html#create-react-app