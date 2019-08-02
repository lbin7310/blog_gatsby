---
title: "TIL"
template: "page"
---
#### 2019.08.02 금
- dotenv: 외부로 노출 시키면 안되는 부분을 숨겨놓을 때 사용한다. localhost에 설치된 MongoDB나 Mysql은 나만 사용하게 설정해놓거나 하면 괜찮다. 그렇지만 다른 곳에 설치 된다면 어떻게 될까? 예를 들어 opensource 프로젝트를 한다고 상상해보자. database를 숨겨 놓고 싶고, github 올려놓고 싶지 않다면, 이 때 dotenv를 사용한다.

- 루트폴더에 .env 파일을 만들다. 서버에서 사용한다고 한다면 PORT를 .env에 생성해 놓고 사용한다면
```javascript
// .env 파일
PORT = 4000;
// app.js
//.......
import dotenv from "dotenv";
dotenv.config
//......... 여러 코드가 있다고 하자.
const PORT = process.env.PORT || 4000;
app.listen(PORT);
```
위와 같이 사용한다.

#### 2019.08.01 목
- mixin: 웹사이트에서 계속 반복되는 코드를 복사-붙여넣기 하지 않고 재활용하는 방법

#### 2019.07.31 수
- cookie-parser: cookie를 전달받아서 사용할 수 있도록 만들어 주는 미들웨어다. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용한다.
- body-parser: 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어다. request 정보에서 form이나 json 형태로 된 body를 검사한다. ex) 아바타의 사진이나 비디오를 업로드 할 때, 제목이나 댓글 같은 정보를 전달 할 때 form에 담아서 업로드 해야한다. 그때 body-parser를 거쳐서 처리된다.
- helmet: application이 더 안전하도록 만들어 주는 미들웨어다.
- morgan: application에서 발생하는 모든 일들을 logging하는 미들웨어다.
- One single source of truth
  - 한 곳에서만 정보를 교환한다.
  - 더 나은 코드를 만들어 주는 원칙이다.
  - 버그를 최소화할 수 있다.
  - 많은 곳에 영향을 주는 코드를 한 곳에서 관리하고 저장된 곳에서만 바꾼다.

#### 2019.07.30 화
- package.json에 있는 dependencies와 devDependencies
  dependencies는 프로젝트가 실행될려면 필요한 것들 ex) express etc...
  devDependencies는 개발자에게 도움이 될만한 모듈, 내가 필요한 것, 프로젝트에선 필요없는 것들 ex) nodemon etc...

#### 2019.07.29 월
- form tag
  사용자 의견이나 정보를 알기 위해 입력할 큰 틀을 만드는데 사용된다. 폼은 입력된 데이터를 한 번에 서버에 전송한다. 전송한 데이터는 웹 서버가 처리한다. 결과에 따라 다른 웹 페이지를 보여준다.

#### 2019.07.27 토
- 클로저(closure)  
  함수내에서 함수를 선언하면 클로저함수를 만든 거다. 선언한다고 해서 클로저가 되는 것도 아니다. 외부함수의 매개 변수를 내부함수에서 값으로 받아서 결과를 반환하고 반환된 값을 외부함수에서 반환해야한다. 또 내부함수에서 외부함수에서 선언한 변수를 활용해서 내부함수의 결과를 반환하고 외부함수에서 반환해야한다.

#### 2019.07.26 금
- 스코프(scope)  
  스코프는 어떤 변수들에 접근할 수 있는지를 정의한다. 두가지 종류가 있다. 전역 스코프와 지역스코프가 있다. 
- 전역 스코프는 가장 밖에 선언된 변수들에 접근할 수 있는 있다. 지역 스코프에 접근을 하지 못한다. 지역 스코프가 정의 되어있으면 마치 울타리를 쳐 놓은 것과 같다. 밖에서 안 쪽으로 접근을 하지 못한다.
- 지역 스코프는 지역에 선언된 변수들과 전역에 션언된 변수들에 접근할 수 있다.


#### 2019.07.25 목
- list의 제목을 변경하는 로직을 만들려고 했다. 문제가 발생했다. 클릭하면 선택된 것만 바뀌어야 되는데 다른 list의 제목까지 같이 바뀌었다. 뭔가 잘못된 것이 분명했다. 
고심 끝에 해결방안은 component를 만들어 주고 독립된 state를 주면 된다.

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
