---
title: Python ascii 관련 함수
tags: [Python, ASCII, 변환]
---

# 숫자를 ascii 코드로 변환

- Python에서 int값을 ASCII 코드로 변환하고 싶을 때에는 chr(int) 내장 함수를 사용 하면 된다. 

```Python
chr(65) # 'A'
```

# 문자를 Int형으로 변환

- 'A' 의 int형 값을 알고 싶을 때에는 내장함수 ord(char)를 사용하면 된다.

```Python
ord('A')
```

- Capital Array 만들기

```Python
[chr(x) for x in range(ord('A'), ord('Z') + 1)] # ['A', 'B', ... ,'Z']
```



