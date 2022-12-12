---
title: Form 다루기 1
tags: [React, Fastcampus, 강좌, 정리, Form]
---

# controlled VS uncontrolled 
- phoneNumber input 태그에 값이 0부터 시작되면 valid, 1부터 시작되면 invalid 하게 처리하는 로직을 구현한다.
```jsx
const App = () => {
    const [message, setMessage] = React.useState("")
    const [phoneNumber, setPhoneNumber] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(phoneNumber)
    }

    const handleChange = (event) => {
        if (event.target.value.startsWith(0)) {
            setMessage("Phone Number is valid")
            setPhoneNumber(event.target.value)
        } else if (event.target.value === 0) {
            setPhoneNumber("")
            setMessage("")
        } else {
            setPhoneNumber("")
            setMessage("Phone number should start with zero")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="phone">PhoneNumber: </label>
            <br />
            <input onChange={handleChange} id="phone" name="phone" value={phoneNumber}>
            <p>{message}</p>
            <br />
            <br />
            <button type="submit" disabled={!phoneNumber.length === 0 || message !== "Phone number is valid"}>Submit</button>
            <p>{phoneNumber}</p>
        </form>
    )
}
```

# form 태그 onSubmit 컨트롤
- form 태그에 onSubmit 이벤트를 handleSubmit에 연결하여 이벤트를 처리한다.
- evnet.preventDefault()를 통해 기본 동작을 방지한다(화면 리프래쉬).
- alert를 통해 phoneNumber에 저장된 값을 출력한다.

# input 태그 onChange 컨트롤
- handleChange event값으로 들어오는 value로 0으로 시작하는지 혹은 길이가 0인지를 판단한다
- 0으로 시작하면 setMessage에 Valid 하다는 메시지를 넣어주고 setPhoneNumber에 값을 세팅해준다.
- 이벤트 값의 길이가 0 이면 메시지와 넘버 값을 초기화 해준다.
- 0이 아닌 다른 값이 입력되면 setPhoneNumber는 초기화 해주고 setMessage에는 0으로 시작해야 한다는 메시지를 넣어준다.

# controlled란?
- input에 발리드한 값이 입력되면 입력조차 하지 않도록 하기 위해서는 input 태그에 value={phoneNumber}를 입력하여 valid 할때 set이 된 텍스트만 보여지도록 한다.
- value를 state로 관리하는 값으로 넣어주는 것이 controlled 된다는 개념이다.

# 정리
- validation은 onSubmit 보다는 onChange에서 처리해 주어야 UX가 좋다.
- useState값을 바로 꺼내서 쓸때는 sync를 생각해야한다. set한 값을 바로 뒤에서 사용하면 set한 값을 불러오지 못한다.
- 이벤트 값으로 로직 체크를 하고 값을 세팅해준다.
- Valid한 값만 input에 넣고 싶을 때는 controlled를 사용하여 value에 state로 관리되는 값을 넣어 처리한다.
    - input의 value를 직접 관리 하는 것


## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
