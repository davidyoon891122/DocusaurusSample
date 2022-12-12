---
title: Form 다루기 1
tags: [React, Fastcampus, 강좌, 정리, Form]
---

# Form
- React 에서 기존 html 소스를 그대로 가져와 사용할 수 있다
```jsx
const App = () => {
     const handleSubmit = (event) => {
        event.preventDefault();
        console.dir(event.target.elements)
        alert(`FirstName: ${event.target.elements.fname.value}, LastName: ${event.target.elements.lname.value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" defaultValue="Jone" /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    )
}
```
- 단 기존 html for 대신 htmlFor 를 사용해하고 value 대신 defaultValue를 사용해야 한다는 warning이 뜬다.
- onSubmit 이벤트에 handleSubmit 함수를 주입하여 refresh 되는 행위를 event.preventDefault() 함수로 차단한다.
- console.dir를 통해 event.target.elements의 객체 정보를 확인하여 특정 정보들을 가져올 수 있다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
