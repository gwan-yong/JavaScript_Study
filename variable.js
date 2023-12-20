'use strict';

//변수
let a 
//변수 a 선언
let b = 10;
//변수 b를 선언과 동시에 10을 할당
console.log(b);
//변수 b를 콘솔에 출력
b=30;
//변수 b에 30을 새로 할당
console.log(b);
//마지막에 할당한 30 출력됨 
/*var을 사용안함
이유는
1. var hoisting : 어디에 선언 했는가에 상관없이 제일 위로 선언을 끌어 올려주는 것
2. block scope : 안됨
*/
/*자바스크립트는 Dynamic typing으로
변수의 타입을 선언하지 않고 런타임에 할당된 값에 따라 자동으로 타입 결정됨
*/

//block scope
let c = 50; //괄호 밖에서 전언한 변수는 global scope
{
    let a 
    let b = 10;
    console.log(b);
    b=30;
    console.log(b);
}//중괄호로 감싸는게 block scope
console.log(b);//중괄호 밖에서는 중괄호 안에 있는 내용에 접근 불가
console.log(c);// grobal scope는 접근 가능

//상수
const c =7 ;
//싱수 c 선언

//문자열
const wolrd = 'world';
console.log(`hello${wolrd}`);//``백틱안에 달러표시 중괄호 하면 변수값을 문자열로 표현 가능

//symbol_고유한 식별자를 만드는것
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //ture
console.log(`id : ${symbol1.description}`); // 호출할 때 

//object_객체같은거
const i = { name : 'gwanyong', age : 24};
i.age = 25; 