---
title: WKWebView Web contents 와 Native 통신
tags: [Swift, WKWebView, 통신, Message, Handler]
---


## WKWebView 앱, 웹 메시지 처리
- WkWebView에서 보여지는 web contente와 iOS App간 데이터 처리를 위해서는 WKUserContentController에 JavaScript에서 호출할 MessageHandler를 등록해야 한다.

# WKUserContentController
- An object for managing interactions between JavaScript code and your web view, and for filtering content in your web view.
- 자바 스크립트 코드와 웹뷰간에 인터렉션을 관리하는 객체
- 이 WKUserContentController는 앱과 웹뷰에서 실행되는 자바스크립트 코드간에 다리 역할을 제공한다
- WKUserContentController가 제공하는 주요 기능
    - 자바스크립트 코드를 웹뷰에서 실행되는 웹 페이지에 주입 시킬 수 있다.
    - 앱 코드로 작성된 커스텀 자바스크립트 함수를 설치할 수 있다.
    - 제한된 컨텐츠를 로딩하는 웹페이지를 막는 커스텀 필터를 정의할 수 있다.

# WKWebViewConfiguration
- A collection of properties that you use to initialize a web view
- WKWebViewConfiguration는 WKWebView 객체의 구성에 관련됭 정보를 제공하는 객체이다
- 제공하는 주요 기능
    - 커스텀 URL schemes를 위한 핸들러
    - Media content 핸들하기 위한 세팅값
    - WebView안에 selections를 어떻게 관리 할 것인지에 대한 정보
    - 주입될 커스텀 스크립트
    - 컨텐츠를 어떻게 렌더 할지에 대한 커스텀 룰

# WKScriptMessageHandler
- An interface for receiving messages from JavaScript code running in a webpage
- 웹 뷰의 자바스크립트 메세지에 응답하기 위해서는 WKScriptMessageHandler protocol을 구현해야 한다.
```Swift
func userContentController(
    _ userContentController: WKUserContentController,
    didReceive message: WKScriptMessage
) {
    
}
```
- 위 함수를 구현하여 웹브로 부터 메시지를 전달 받을 수 있다 


- Swift에서 WKUserContentControll를 생성해서 Message 핸들러를 등록하고 WKWebView에 전달하는 방법은 아래와 같다. 

```Swift
private lazy var webView: WKWebView = {
    let userContentController = WKUserContentController()
    userContentController.add(self, name: "receiver")

    let configuration = WKWebViewConfiguration()
    configuration.userContentController = userContentController

    let webView = WKWebView(frame: .zero, configuration: configuration)
    return webView
}()
```
- WKUserContentController 객체를 만들어 add 함수를 통해 메시지를 전달받을 핸들러의 이름을 지정한다.
- WKWebViewConfiguration 객체를 만들어 WKUserContentController를 구성에 추가한다.
- WKWebView를 생성할 때 configuration을 생성자에 넣어서 WebView 객체를 생성한다.

# Load HTML to WKWebView
- App 내에 html 파일을 생성하여 호출하는 방법
```Swift
func configureWebView() {
    guard let htmlURL = Bundle.main.url(
    forReasource: "fileName",
     withExtension: "html") else { return }
    
    webView.loadFileURL(htmlURL, allowingReadAccessTo: htmlURL)
}
```
- html file의 타겟 membership에 iOS project를 연결 시켜 주어야 bundle에서 파일을 읽을 수 있다.

# Send messages to Native APP
```JavaScript
<button onclick="sendMessageToNative()">SendMessage</button>
<script>
    function sendMessageToNative() {
        window.webkit.messageHandlers.system.postMessage("message")
    }
</script>

```

- messageHandler 다음 system 이 bridge에서 연결한 메시지 핸들러 이름이다.
- system.postMessage("Message")로 Native 앱으로 메시지를 전달할 수 있다.

# Receive message from the JavaScript 
```Swift
extension ViewController: WKScriptMessageHandler {
    func userContentController(
        _ userContentController: WKUserContentController,
        didReceive message: WKScriptMessage
    ) {
        if message.name == "system" {
            guard let body = message.body as? [String: String] else { return }
            print(body)
        }
    }
}
```

- 등록된 메시지 핸들러에서 메시지가 전달되면 didReceive 함수가 호출된다.
- message.name(String) 값이 메시지 핸들러 이름과 동일하면 message.body(Any)를 해당하는 type으로 형변환 시켜 데이터를 파싱한다.

## Github
- https://github.com/davidyoon891122/WebViewCommunicationSample