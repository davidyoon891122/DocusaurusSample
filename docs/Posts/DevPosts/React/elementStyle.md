---
title: 리액트 Element에 스타일 입히기
tags: [React, Fastcampus, 강좌, 정리, style, element]
---

# style
- 일반적인 css로 html에 element에 스타일을 넣어주는 방식과 크게 다르지 않다.
- 단, React style의 경우 기존 요소와 겹치는걸 피하기 위해 CamelCase를 사용한다.
```jsx
function Button({ className = "", color, style, ...rest}) {
    return <button
    className={`button ${className}`}
    style={{ backgroundColor: color, borderRadius: "8%", ...style}}
    {...rest}
    />
}
```

- 커스텀 버튼 컴포넌트에 className, color, style, ...rest 등의 prorps를 받아서 값을 주입한다.

```jsx
const element = (
    <>
        <Button style={{ borderRadius: "50%" }}>Green</Button>
        <Button color="blue">Blue</Button>
        <Button color="red">Red</Button>
        <Button color="gray">Gray</Button>
        <Button color="black">Black</Button>
    </>
)
```
- className에 주입된 css 스타일 보다 style로 주입된 스타일이 더 높은 우선순위를 가진다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
