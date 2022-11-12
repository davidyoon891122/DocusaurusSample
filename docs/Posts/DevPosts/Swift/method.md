---
title: Method
tags: [Swift, Method, Static, Class, Instance]
---

# Method

# Instance Method

- 인스턴스를 생성해야만 호출이 가능한 함수
- let test: Test = .init()
  - test.printSomething(): 형태로 호출함

# Type Method

- 형식(Type)에 연관된 메서드로, 인스턴스 생성 없이 형식(Type) 이름만 알면 호출 가능
- 메서드 호출 시 func이란 키워드 앞에 static 혹은 class가 붙으면, 그 메서드는 타입 메서드이다

## Static VS Class

- 이 둘을 구분 짓는 것은 메서드 오버라이딩(override)의 여부
- static 오버라이딩을 금지
  - subclass에서 해당 타입 메서드를 오버라이딩 하는 것을 금지한다
- class 오버라이딩 허용
  - subclass에서 해당 타입 메서드를 오버라이딩 하는 것을 허용한다

# 타입 메서드와 인스턴스 메서드의 멤버 접근 범위

## 프로퍼티의 종류

- 일반 프로퍼티(저장 프로퍼티, 연산 프로퍼티)
  - let name = “Test” // 저장 프로퍼티
- 타입 프로퍼티(저장 타입 프로퍼티 & 연산 타입 프로퍼티)
  - static let name = “test”// 저장 타입 프로퍼티
- 타입 메서드에서는 타입 프로퍼티만 사용 가능 ( 일반 프로퍼티의 경우 인스턴스 생성이 안되어 사용 불가)
- 반대로, 일반 메서드에서는 일반 프로퍼티, 타입 프로퍼티 모두 사용 가능
