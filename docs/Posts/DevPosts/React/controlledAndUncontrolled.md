---
title: 리액트 Controlled and Uncontrolled
tags: [React, Fastcampus, 강좌, 정리, Form, Controlled, Uncontrolled]
---

# Controlled and Uncontrolled

## 제어 컴포넌트

- HTML에서 input, textarea, select와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트 한다.
- React 함수와 이벤트를 활용하여 폼을 컨트롤 하는 방식을 Controlled Component라고 한다.

```jsx
export default function ControlledComponent() {

    const [name, setName] = React.useState("")
    const [essay, setEssay] = React.useState("Please write an essay about your favorite DOM element.")
    const [flavor, setFlavor] = React.useState("coconut")

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleEssayChange(event) {
        setEssay(event.target.value);
    }
    
    function handleSubmit(event) {
        alert(`name : ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }

    function handleFlavorChange(event) {
        setFlavor(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />

            <label>
                Essay:
                <textarea value={essay} onChange={handleEssayChange} />
            </label>
            <br />
            <label>
                Pick your favorite flavor:
                <select value={flavor} onChange={handleFlavorChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" name="Submit" />
        </form>
    )
}
```

- 폼에 이벤트를 연결하고 연결된 값을 useState 로 관리한다.


## 비제어 컴포넌트

- 대부분을 경우 폼을 구현하는데 제어 컴포넌트를 사용하는 것이 좋다.
- 대안인 비제어 컴포넌트는 DOM자체에서 폼 데이터가 다루어 진다.
- 모든 state 업데이트에 대한 이벤트 핸들러를 작성하는 대신 컴포넌트를 만들려면 ref를 사용하여 DOM에서 폼 값을 가져올 수 있다.

```jsx
export default function UncontrolledComponent() {

    const fileInputRef = React.createRef(null)

    function handleSubmit(event) {
        event.preventDefault();
        alert(
        `Selected file - ${fileInputRef.current.files[0].name}`
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                Upload file:
                <input type="file" ref={fileInputRef} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
```

- createRef 함수를 통해 fileInputRef를 만들고 input 함수에 ref로 연결한다.
- submit 이벤트가 발생하면 fileInputRef를 사용하여 값을 가져온다.


## 다중 입력 제어하기

- 여러 input 엘리먼트를 제어해야 할 때, 각 엘리먼트에 name 어트리뷰트를 추가하고 event.target.name 값을 통해 어떤 작업을 할지 선택할 수 있다.

```jsx
export default function ControlMultiInputs() {
    const [name, setName] = React.useState("")
    const [essay, setEssay] = React.useState("Please write an essay about your favorite DOM element.")
    const [flavor, setFlavor] = React.useState("coconut")

    function handleChange(event) {
        const name = event.target.name

        if (name === 'name') {
            setName(event.target.value);
        } else if (name === 'essay') {
            setEssay(event.target.value);
        } else if (name === 'flavor') {
            setFlavor(event.target.value)
        }

    }

    function handleSubmit(event) {
        alert(`name : ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />

            <label>
                Essay:
                <textarea name="essay" value={essay} onChange={handleChange} />
            </label>
            <br />
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" name="Submit" />
        </form>
    )
}
```

- 여러 폼들은 handleChange 한 개의 이벤트 핸들러를 통해 값을 세팅하게 된다.
- 각 폼들에 입력된 name 어트리뷰트 값에 따라 if 분기를 태우고 원하는 값을 세팅할 수 있다.

## 참조

- 패스트 캠퍼스 온라인 강좌(한 번에 끝내는 React의 모든 것 초격자 패키지 Online)
- https://ko.reactjs.org/docs/forms.html#controlled-components