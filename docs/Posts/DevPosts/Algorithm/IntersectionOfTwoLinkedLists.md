---
title: LeetCode IntersectionOfTwoLinkedLists
authors: [davidyoon]
tags: [Algorithm, 알고리즘, IntersectionOfTwoLinkedLists, LinkedList]
---

# 문제 정의
- LeetCode 160번 문제
- 별개의 두 링크드 리스트가 존재하고, 두 개의 리스트의 마지막 노드가 공통의 리스트로 연결되는지 확인 하는 알고리즘
- 공통의 리스트가 존재하면 공통의 리스트의 첫번째 노드를 리턴하고, 공통 리스트가 존재하지 않으면 False를 리턴 한다.

# 문제 풀이
1. Brute Force
- A 리스트와 B 리스트 의 object 값을 비교하여 같으면 해당 값을 리턴하는 방식으로 풀수 있다.
- 풀이 방법은 명료하지만, 시간복잡도가 O(M * N) 되어 시간이 초과 된다.

2. A, B 포인터가 같은지 확인하는 방식
- A 리스트의 포인터, B 리스트의 포인터를 각각 새로 만들고 두 포인터를 비교한다.
- A == None 인경우 A = pointB 를 넣어주고, A != None인 경우 A = pointA.next 를 넣어준다.
- B도 위와 같은 로직으로 포인터를 이동 시킨다.
- A != B인 조건으로 while문을 진행한다.
- A, B가 공통된 리스트가 없는 경우 A, B 포인터가 모두 마지막 포인터 None이 되는 경우 종료 된다.
- A, B가 공통된 리스트가 있는 경우 공통된 리스트의 Node를 가르킬때 해당 Node를 리턴한다.

# Python Code

```Python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode):
        pointA = headA
        pointB = headB

        while pointA != pointB:
            pointA = headB if pointA is None else pointA.next
            pointB = headA if pointB is None else pointB.next
        
        return pointA
```

<img src="/algorithm/intersectionPython.png" width="400px" height="300px" title="IntersectionPython"/>

# Swift Code

```Swift
class Solution {
    private var root: TreeNode?

    init(node: TreeNode) {
        self.root = node
    }

    func getIntersectionNode(nodeA: TreeNode, nodeB: TreeNode) -> TreeNode? {
        var pointA: TreeNode? = nodeA
        var pointB: TreeNode? = nodeB

        while pointA != pointB {
            pointA = (pointA == nil) ? nodeB : pointA?.next
            pointB = (pointB == nil) ? nodeA : pointB?.next
        }
        return pointA
    }
}
```

<img src="/algorithm/intersectionSwift.png" width="400px" height="300px" title="IntersectionSwift"/>

# IntersectionOfTwoLinkedLists 문제 해결

