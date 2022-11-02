---
slug: React
title: React의 모든것
authors: [davidyoon]
tags: [React, 강좌, DOM]
---

## JSX와 Babel, JSX 다루기

# JXS

```
const element = <h1>Hello, World!</h1>
```

문자도 HTML도 아닌 Javascript 확장 문법

- JSX를 사용하기 위해서는 Babel이 필요하다

# Babel

JavaScript Complier
컴파일러: 언어 해석기, 특정 언어를 다른 프로그래밍 언어로 옮기는 프로그램
정확히 Babel은 Javascript 로 결과물을 만들어주는 컴파일러이다
소스 대 소스 컴파일러(Transpiler)라고 불린다
새로운 ESNext 문법을 기존의 브라우저에서 사용하기 위해서는 babel이 필수이다

- JSX 문법을 기존 html에 작성하여 브라우저로 읽어도 원하는 동작을 하지 않는데, 이유는 바벨이 없어서 문법을 브라우저가 이해하지 못하기 때문이다

# UNPKG

fast, global content delivery network for everthing on npm

# React 코드를 JSX로 대체하기

```
<script type="text/babel">
    const rootElement = document.getElementById('root')
    const element = <h1 className="title">Hello World!</h1>
    ReactDOM.render(element, rootElement)
</script>
```

- 바벨을 적용하여 브라우저에서 JSX를 사용 가능하도록 적용

# Spread 연산자

```
const props = {className: titleClassName, children: text}
const element = <h1 {...props} />
```

props로 생성된 객체를 h1 태그 안에 각각의 요로소 key value 형태로 넣어주는 연산자

```
const element = <h1 className={props.className} children={props.children} />
```

위와 같이 표현할 수도 있다

# 정리

JXS 는 React.createElement 표현식
Babel은 Javascript compiler
JSX다루기 spread 연산자
