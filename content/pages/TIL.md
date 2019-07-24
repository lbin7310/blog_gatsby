---
title: "TIL"
template: "page"
---
#### 2019.07.24 수
- fetch 요청 보낼 때 생긴 오류  
Uncaught (in promise) TypeError: Failed to execute 'fetch' on 'Window': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)'
      
원인: headers 잘못된 형식으로 담아 보내서 발생함.
```
headers: "Content-Type/application/json"
``` 
해결
```
headers: {
          "Content-Type": "application/json"
        }
```

#### 2019.07.23 화
- fetch 요청과 응답 때 발생 했던 오류
```
Uncaught (in promise) SyntaxError: Unexpected end of JSON input
```
발생 했던 이유는 요청에 대한 응답으로 data를 보낼 때 맞는 형식(객체)으로 보내질 않아서 오류가 났다.  
해결 방법은 객체 형태로 보냈는데 오류가 발생하지 않았다.

#### 2019.07.22 월
- Back을 구현하면서 생겼던 문제  
Access to fetch at 'http://localhost:4000' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.  
- 해결방법
  - Backend에서 cors 설치  
  `npm install cors`
  ```javascript
  const express = require('express');
  const app = exprss();
  (...) // 여러 설정
  const cors = require('cors');
  // url이 다르면 접근을 할 수 없게 하는 걸 접근할 수 있게 해준다.
  app.use(cors()); 
  ```

#### 2019.07.19 금
- Nodejs는 아무것도 없는 상태에서 시작하고 필요한 것만 추가하면서 개발을 진행할 때 사용한다. 
- 데이터를 저장하고 보여주고 삭제하고 수정하는데 유용하다 (CRUD). ex) 실시간을 다루는 경우

#### 2019.07.18 목
- react-router는 SPA에서 page를 전환할 때 사용한다.
- react-router는 url에 page를 넘어갈 때 받을 값을 넣을 수 있다.

#### 2019.07.17.수
- JSON server를 사용해서 미리 data 형식을 만들 수 있다.
- JSON server는 기본 port를 3000번이다. 다른 port로 변경할 수 있다.

#### 2019.07.15.월 
- Typescript의 interface는 객체에 있는 key의 value type을 정해준다.
- interface로 정한 type은 다른 interface에서 type으로 쓰일 수 있다.

#### 2019.07.13.토
- redux의 action, reducer, store
- aciton는 '이벤트가 발생한다.' 라고 알려준다.
- reducer는 action에서 알려준 이벤트에 대한 함수만 실행 시킨다.
- store는 하나의 앱의 하나만 있다. store 안에는 앱의 상태와 reducer가 저장되어 있다. 몇몇 내장함수도 있다.

#### 2019.07.10.수
- typescript를 왜 쓰는지 알았다. javascript는 타입을 자유롭게 사용할 수 있어서 좋다. 단, 팀 단위와 큰 규모의 프로젝트를 할 경우 타입의 사용을 정해 놓지 않으면 오류가 발생 했을 시 왜 발생했는지 파악하는데 어려움이 있다. typescript는 경우, 예를 들어서 함수에서 사용하는 타입이 정해져 있고 그 함수에 맞는 타입을 사용하지 않는 경우 에러 메세지가 나타나기에 바로바로 확인할 수 있다.


#### 2019.07.08.월
- closure가 외부함수에서 정의된 내부함수이다. 내부함수는 자기가 만들어질 때의 환경을 기억한다.
- closure 함수는 외부함수의 변수의 접근, 전역 변수의 접근이 가능하다.
- 2주 프로젝트 시작 - 한 마음 봉사
