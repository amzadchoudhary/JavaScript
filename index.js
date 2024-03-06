// let myLengthSting = "Amzad";
// console.log(myLengthSting.length);
// document.getElementsByTagName('h1')[0].style.background = "red";
// document.getElementsByTagName('h1')[0].style.visibility = "hidden";

// document.write("This document write.");
// console api
// console.warn("This is a warning.");
// console.error("This is an error.");
// console.assert(3 == 2);
// // console.assert(3 == 3);
// console.log("Hello World", 4 + 6, "Another log");
// console.clear();


// Array methods in js.
// let myArr = ["Amzad", 10, "Array", true, null,];
// console.log(myArr.length);
// console.log(myArr);
// myArr.push("Hello");
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.toString();

// myArr.sort();
// console.log(myArr);
// console.clear();


// Sting Methods in Js

// let myLovelySting = "Harry is good boy good";
// console.log(myLovelySting.length);
// console.log(myLovelySting.indexOf("good"));
// console.log(myLovelySting.lastIndexOf("good"));
// console.log(myLovelySting.slice(1, 5));
// d = myLovelySting.replace("Harry", "Rohan");

// console.log(d, myLovelySting);


// Dte methods
// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getSeconds());



// DOM manipulation

// let elem=document.getElementById('click');
// console.log(elem);


// tn = document.getElementsByName('div'); //tn is a object of div 
// console.log(tn);

// createdElement=document.createElement('p');
// createdElement.innerText= "this is a created paragraph tag above inside div."
// tn[0].appendChild(createdElement); //added paragraph(element) in object of div
// //create object createdElement2 here like createdElement .
// tn[0].replaceChild(createdElement2, createdElement);// to replace the object of paragraph i.e createdElement to another object i.e createdElement2 (which needs to be created in first .)


// Events in Js

// window.onload = function () {
//     console.log('The document was loaded');
// }

// /*id i.e. firstontainer of the container from html block #which is not there yet but should be created*/firstContainer.addEventListener('click'/*<-This is a event name*/, function () {
//     console.log("Clicked on container");
// })
// firstContainer.addEventListener('mouseover'/*<-This is a event name*/, function () {
//     console.log("Mouse on container");
// })
// firstContainer.addEventListener('mouseout'/* mouseup, mousedown<-This is a event name*/, function () {
//     console.log("Mouse out of container");
// })


// Selecting using Query

// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);



// Arrow Function

// function summ(a, b) { //simple function
//     return a+b;
// }
// summ=(a,b)=>{ //this is a arrow function i.e. '=>'
//     return a+b;
// }



// SetTimeout and setinterval
// logKaro = () => {
//     console.log("I am your log")
// }
// setTimeout(logKaro, 2000);
// clr = setTimeout(logKaro, 2000);

// setInterval(logKaro, 2000);
// clr = setInterval(logKaro, 2000);
// Note: use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// Local Storage in js




//   ...............................................
//  OOPs



// objects

// const circle = {
//     raius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     drew: function () {
//         console.log('drew');
//     }
// };
// circle.drew();

// factory function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('drew');
//         }
//     };

// }

// const circle = createCircle(1);
// // circle.draw();



//Constructor function
// function Circle(radius) {
//     // console.log('this', this);
//     this.radius = radius;
//     this.draw = function () {
//         console.log('drew');
//     }
// }
// const another = new Circle(1);

// Constructors vs littlers
// new String();  "",'',``
// new Boolean(); true,false
// new Number(); 1,2,3.....















