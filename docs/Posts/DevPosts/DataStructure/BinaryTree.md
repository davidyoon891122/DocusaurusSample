---
title: Binary Tree
authors: [davidyoon]
tags: [DataStructure, 자료구조, Thee, Binary, 이진트리]
---

## Tree
- Tree 는 Node와 edge로 구성되어 있다
'''Python
class NodeTree:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
'''
- 노드에는 데이터가 담기게 된다
- 노드와 노드 사이를 연결해 주는 선을 edge라고 한다
    - code에서는 edge를 포인터로 생각하면 된다
    - A.next = B 라고 한다면, A 의 next(edge) 가 B를 가리키고 있다는 것이다
- 경로(Path)란 edge로 연결된, 인접한 노드들로 이루어진 시퀀스(sequence)를 가르킨다
    - 경로의 길이는 경로에 속한 edge들의 수를 의미한다
- 트리의 높이(Height)는 루트노드에서 말단노드에 이르는 가장 긴 경로의 엣지 수를 가르킨다
    - 트리의 특정 깊이를 가지는 노드의 집합을 레벨(Level)이라고 한다
- 잎새노드(leaf node)란 자식노드가 없는 노드이다
- internal node란 잎새노드를 제외한 노드를 의미한다
- 루트노드(root node)란 부모 노드가 없는 노드를 가르킨다
- 트리의 속성중 가장 중요한 것은 "루트노드를 제외한 모든 노드는 단 하나의 부모노드만을 가진다"는 것이다
- 트리는 다음의 성질을 만족한다
    - 임의의 노드에서 다른 노드로 가는 경로(path)는 유일하다
    - 회로(cycle)가 존재하지 않는다
    - 모든 노드는 서로 연결되어 있다
    - 엣지를 하나 자르면 트리가 두 개로 분리 된다
    - 엣지의 수는 노드의 수에서 1을 뺀 것과 같다

## Binary Tree
- 이진트리란 자식노드가 최대 두 개인 노드들로 구성된 트리이다
- 이진트리 종류
    - 정이진트리(full binary tree)
        - 모든 레벨에서 노드들이 2개(꽉 채워진)의 자식 노드를 가지고 있는 이진 트리
        - 정 이진트리에서 레벨에 따른 노드의 숫자 표
            - 레벨 0 -> 2^0 -> 1
            - 레벨 1 -> 2^1 -> 2
            - 레벨 2 -> 2^2 -> 4
            - 레벨 n -> 2^n
    - 완전이진트리(complete binary tree)
        - 마지막 레벨을 제외한 모든 레벨에서 노드들이 꽉 채워진 이진트리
        - 정이진트리와 완전이진트리를 1차원 배열로 표현 가능하다
            - 어떤 노드의 인덱스를 index, 왼쪽 자신 노드는 left_index, 오른쪽 자신 노드는 right_index을 선언하면 다음과 같은 관계이다
            ```python
            left_index = 2 * index + 1
            right_index = 2 * index + 2
            ```
    - 균현이진트리(balanced binary tree)

## 참조
- https://ratsgo.github.io/data%20structure&algorithm/2017/10/21/tree/