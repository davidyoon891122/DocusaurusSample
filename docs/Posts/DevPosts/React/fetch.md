---
title: Fetch API 사용하기
tags: [React, Fastcampus, 강좌, API, Fetch, Error Handling]
---

# Fetch API

- Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있는 내장 라이브러리이다.
- 기본적으로 promise 형태로 작동한다.
```jsx
const App () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        fetch("https://request.json.api")
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            setData(myJson.data)
        })
        .catch((error) => {
            setError(error.message)
        }) 
    }, [])

    if (error != null) {
        return <p>There is some error</p>
    }

    if (data == null) {
        return <p style={{ color: "red" }}>Loading...</p>
    }

    return (
        <div>
        <p>People</p>
        {data.people.map((person) => (
            <div>
                <span>name: {person.name}</span>
                <span>age: {person.age}</span>
            </div>
        ))}
    )
}
```

- fetch는 호출 파라미터에 주소를 담아서 호출하고 .then으로 리스폰스를 받아 처리한다.
- 위 예에서는 useEffect를 사용하여 페이지가 그려질때 한 번만 데이터를 요청하도록 처리하였다.
- 데이터 호출후 json으로 변환하여 setData를 사용하여 데이터를 넣어주었다.
- error 처리를 위해 catch에서 error를 받아 set해주고 error가 있으면 에러 컴포넌트를 띄우도록 작성하였다.
- 데이터가 없으면 Loading... 페이지를 띄우다가 데이터가 들어오면 map을 통해 span태그 안에 이름, 나이를 출력해주었다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- 
