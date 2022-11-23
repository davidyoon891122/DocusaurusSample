---
title: WKWebView UIWebView 차이점
tags: [Swift, WKWebView, UIWebView, 차이점, WebView]
---

## WebView란
- Native 앱에서 웹 컨텐츠를 보여주기 위해서 필요한 객체

## iOS WebView
1. UIWebView
2. WKWebView
3. SFSafariView


## UIWebView Vs WKWebView

# UIWebView
- A view that embeds web content in your app
- iOS 2.0 - 12.0 Deprecated (중단).
- UIKit의 부분 이며, Interface Builder에서도 사용 가능하기 때문에 따로 import가 필요하지 않다.
- 랜더링 가능 수 약 3,500 개의 개체.
- Scale pages to fit 가능(유저가 scale을 변경할 수 있는지의 대한 boolean value)
- Load local files 가능
- 페이지 로드 후 데이터를 쿠키에 저장해 놓기 때문에 다음 번 로딩에는 시간이 줄어든다.

# WKWebView
- An object that displays interactive web content, such as for an in-app browser
- iOS 8.0+
- 가장 많이 사용되는 웹뷰
- WKWebView를 사용하기 위해서는 import WebKit을 해주어야 한다.
- 랜더링 가능 수 약 8,500 개의 개체
- UIWebView보다 성능이 약 2배이다.
- Scale pages to fit 불가능(유저가 scale을 변경할 수 있는지의 대한 boolean value)
- IndexedDB 와 ObjectStore ArrayBuffer 기능을 제공한다.
    - IndexedDB
        - 인덱스를 사용하여 데이터를 관리하는 데 사용되는 데이터베이스, 인덱싱은 인덱스 및 저장된 데이터의 특정 도움말을 사용하여 데이터를 쉽게 식별하는 데 도움이 된다. SQL 데이터베이스 및 객체 지향 데이터베이스와 같다. 객체는 키를 사용하여 저장하고 검색할 수 있다. 
    - ArrayBuffer
        - 고정길이 바이너리 데이터를 표현하는데 사용하는 Collection이다. ArrayBuffer의 content는 직접 조작이 불가능한다. 객체들 안에 데이터는 오로지 특정한 포멧을 표현하는 버퍼로부터 쓰기와 읽기가 가능하다.
- Load local files 불가능
- 쿠키가 저장되지 않으므로 항상 로딩 시간이 동일하다
- WKWebView는 앱과 별도의 스레드에서 실행된다.
    - 할당량을 초과하면 앱을 중단하지 않고 충돌한다(이로 인해 앱이 알림을 받고 페이지를 다시 로드하려고 시도한다)




## 참조
- https://zeddios.tistory.com/332
- https://developer.apple.com/documentation/webkit/wkwebview
- https://medium.com/@kevin.baldha/difference-between-uiwebview-and-wkwebviewapple-6f8b75819a18

