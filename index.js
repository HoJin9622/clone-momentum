const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#000000";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    console.log("change1");
  } else {
    title.style.color = BASE_COLOR;
    console.log("change2");
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick); // 자바스크립트 이벤트 찾기 : javscript dom event mdn
}
init();

/* function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize); */

/* const title = document.querySelector("#title"); // document.getElementById("title");

title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title);
document.title = "I own you now"; */

/* function sayHello(name, age) {
  return `Hello ${name} you are ${age} years`;
}

const greet = sayHello("Hojin", 23);
console.log(greet);

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  },
  route: function(a, b) {
    return a ** b;
  }
};
console.log(calculator.plus(5, 2));
console.log(calculator.minus(5, 2));
console.log(calculator.mul(5, 2));
console.log(calculator.div(5, 5));
console.log(calculator.route(5, 2)); */

//camel case란 변수명을 언제나 소문자로 시작해서 중간에 스페이스가 필요하면 스페이스 대신에 대문자를 써준다.
//const what = "nico"; String type
//const wat = true; Boolean type
// const wat = 666; Number type
// const wat = 55.1; Float type
// const a : 바꿀 수 없는 변수, 바뀌어도 되는 변수 let
// 변수 첫 선언은 const 정말 필요할때만 let
// array 는 [] 로 해줌
// Object 는 {} 로 해줌
/* const myInfo = {
  name: "HoJin",
  age: 23,
  gender: "Male",
  isHandsome: true
  favMovies: ["Along the gods", "LOTR", "Oldbooy"],
  favFood: [
      {
          name:"Kimchi",
          fatty:false
        },
      {
          name:"CheeseBurger",
          fatty:true
        }
    ]
};

console.log(myInfo.gender); */
// console << object, log << key,
