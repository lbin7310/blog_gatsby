---
title: "babel로 server에서 es6문법사용하기"
date:  "2019-07-30T21:03:01+09:00"
template: "post"
draft: false
slug: "/posts/babel로-server에서-es6문법사용하기/"
category: "server"
tags:
  - "nodejs"
  - "server"
  - "babel"
  - "es6"
description: ""
---
```javascript
const express = require("express");
const app = express();
const PORT = 3000;

function handleListening() {
  console.log(`Listening http://localhost:${PORT}`)
}

app.listen(PORT, handleListening);
```  
require를 이용해서 모듈을 불러오고 있다. export로 모듈을 불러오게 하겠다.
 -------
```
npm install @babel/node
```
```
npm install @babel/preset-env
```
@babel/node, @babel/preset-env를 설치하고  
루트디렉토리에 .babelrc 파일을 생성한다.
 ------

![server-folder.png](/media/server-folder.png)

---
.babel에 설정 내용을 적어준다.
```javascript
{
  "presets":["@babel/preset-env"]
}
```
---
require된 부분을 export로 바꾼다.
```javascript
const express = require("express"); // require를 사용했던 코드를
import express from "express"; // import를 사용해서 express모듈을 불러온다.
```
---
서버를 켠다.
```
node index.js
```
---
에러가 발생했다.
![babel-error.png](/media/babel-error.png)

---
위에 에러 내용은 @babel/core가 없다고 한다. @babel/core도 설치하자.
```
npm install @babel/core
```
package.json에서 script에 start에 babel-node index.js를 추가해주고 서버를 켜면 작동한다.

```javascript
{
    (...)
    "scripts": {
    "start": "babel-node index.js"
  }
}
```
```
npm start
```