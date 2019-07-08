---
title: "Javascript - closure"
date: "2019-07-08T16:14:33+09:00"
template: "post"
draft: false
slug: "/posts/javascript-closure/"
category: "Javascript"
tags:
  - "Javascript"
  - "closure"
description: ""
---

#### javascript에서 closure는 외부함수의 내부에서 정의된 함수를 closure함수라고 한다.
```javascript
function outerFunc () {
  let number = 12345;
  function innerFunc () {
    return number;
  }
  return innerFunc;
}

let closure = outerFunc();
console.log(closure()); // 12345;
```
위의 코드에서 closure 함수는 innerFunc 이다.

#### javascript에서 closure는 자기가 만들어진 환경을 기억한다.
```javascript
function makeBrandCar (brand) {
  let finishedCar = brand + ' ' + 'Car';
  return function () {
    console.log(finishedCar);
  }
}

let hyundaiCar = makeBrandCar('hyundai');
let kiaCar = makeBrandCar('kia');
hyundaiCar();
kiaCar();
```

hyundaiCar()와 kiaCar()의 각각 실행될 때 환경을 기억하고 있다.<br>
hyundaiCar는 hyundaiCar를 변수 선언할 때 makeBrandCar 함수의 매개변수로 'hyundai'를 입력하고 makeBrandCar 함수에서 finishedCar 를 선언하면서 hyundai Car가 할당 된다. 그리고 익명함수를 반환을 하는데 익명함수에서 만들어질 때의 환경을 기억한다. hyundaiCar를 함수실행하면 익명함수가 변수 finishedCar를 기억하고 있으므로 'hyundai Car'를 콘솔로 보여준다.