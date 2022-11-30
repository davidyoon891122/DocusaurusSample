---
title: Architecture
tags: [Swift, SwiftUI, Architecture]
---

# Architecture

- 작은 앱의 경우 한 ContentView.swift 파일 안에서 모든 기능을 구현할 수 있다.
- 하지만, 앱이 커질수록 코드가 방대해지고 스파게티 코드가 될 수 있다.
- 현재 소프트웨어는 읽기 쉬운 코드와 변경이 자유롭고 편리한 것을 강조한다.
- 앱 아키텍쳐란 코드의 구성을에 대한 전략이다.

# Single Responsibility Principle

- SRP 이라고 한다.
- 여러 클래스와, 구조체가 존재할 때, 모든 클래스와 구조체는 오로지 하나의 일을 해야 한다는 것이다.
- 앱의 아키텍처는 여러 오브젝트들이 어떻게 연결되고 소통할 수 있는지를 생각하는 것이다.
- SRP의 장점
  - 이해하기 쉽다.
  - 수정하기 쉽다.
  - 테스트 하기 쉽다.
- View
  - 유저와 인터렉션하고 데이터를 유저에게 보여주는 역할
- Model
  - 데이터를 가지고 특정 로직을 수행하는 역할
- View -> Model을 봐라보는 구조로 구성하면 재사용성이 좋고 테스트하기 좋은 구조가 된다.