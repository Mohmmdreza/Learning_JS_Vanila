'use strict'
// var numbers = [1,2,3,4,5];

// // Without Default Value = Previous
//  var sum = numbers.reduce(function(previous, current){
//      console.log(previous)
//      console.log(current)
//      console.log(previous + ',' + current)
//     return previous + current ;
//  })

//  console.log(sum); // Return: 15

//  // With Default Value = Previous 
//  // Note: دقت شود که اگر دیفالت والیو داشته باشیم مقدار پریویوس برابر آن می باشد و مقدار کارنت اولین مقدار آرایه می باشد
//  var sum = numbers.reduce(function(previous, current){
//     console.log(previous)
//     console.log(current)
//     console.log(previous + ',' + current)
//    return previous + current ;
// }, 100)

// console.log(sum); // Return: 16

// var array = [1, 2, 22, 4, 5, 11];
// var firstName = ["Ali", "Mohammad", "Reza", "Vahid", 6, 7, 12]
// Push
// console.log(array.push(6,7))
// console.log(array.push("Mohammad Reza"))

// console.log(firstName.push("Aidin"))
// نکته
// در خصوص متد فوق خروجی تابع طول آرایه می باشد

// نکته
// در خصوص متد فوق امکان اضافه کردن یک آرایه و یا یک آبجکت و ... به آرایه مربوطه می باشد
// console.log(array.push({name: "Reza", family: "Rahimi"}))

// Pop
// دقت شود که متد ذیل هیج مقداری را دریافت نمی کند و آخرین آیتم را حذف می کند
// console.log(firstName.pop())

// نکته
// در خصوص متد فوق خروجی تابع آخرین آیتم از آرایه می باشد

// Shift
// console.log(array.shift())

// UnShift
// console.log(array.unshift({name: "Vahid", family: "Moghadasian"}))

// Splice
// Note: Change Main Array and Return Deleted Item(s)
// Note: Start Number is Zero_Based
// console.log(array.splice(4))
// console.log(firstName.splice(4))

// Slice
// Note: Do Not Change Main Array and Return a Copy of a Section of an Array.
// Note: Start Number is not Zero_Based
// Note: End Number Can => Number Element || Own Element
// console.log(firstName.slice(4, 12))

// Join
// Note: This Method Return String (Not Array of String)
// console.log(firstName.join('_'))

// Concat
// Note: This Method Return One New Array
// var concatArraies = array.concat(firstName);
// console.log(concatArraies);

// Sort
// Note: متد فوق آیتم ها را به صورت رشته ای با یک دیگر مقایسه می کند
// Note: 25 => "2"+"5" < 3
// var concatArraies = array.concat(firstName);
// var newArray = concatArraies.sort();
// console.log(newArray); // Return: [1, 11, 12, 13, 2, 4, 5, 5, 6, 7, 'Ali', 'Mohammad', 'Reza', 'Vahid']
// var sortAscending = concatArraies.sort((a, b) => {
//     return a-b
// })
// console.log(sortAscending); // Return: [1, 2, 4, 5, 6, 7, 11, 12, 22, 'Ali', 'Mohammad', 'Reza', 'Vahid']

// var sortDescending = concatArraies.sort((a, b) => {
//     return b-a
// })
// console.log(sortDescending); // Return: [22, 12, 11, 7, 6, 5, 4, 2, 1, 'Ali', 'Mohammad', 'Reza', 'Vahid']

// Reverse
// var concatArraies = array.concat(firstName);
// console.log(concatArraies); // Return: [1, 2, 22, 4, 5, 11, 'Ali', 'Mohammad', 'Reza', 'Vahid', 6, 7, 12]
// var newReverseArray = concatArraies.reverse();
// console.log(newReverseArray); // Return: [12, 7, 6, 'Vahid', 'Reza', 'Mohammad', 'Ali', 11, 5, 4, 22, 2, 1]

// Filter
// var concatArraies = array.concat(firstName);
// console.log(concatArraies); // Return: [1, 2, 22, 4, 5, 11, 'Ali', 'Mohammad', 'Reza', 'Vahid', 6, 7, 12]

// var filterArray = concatArraies.filter((item) => {
//     return item % 2 == 0
// })
// console.log(filterArray); // Return: [2, 22, 4, 6, 12]

// // Example:
// let students = [{
//         name: "ali",
//         GPA: 3.3
//     },
//     {
//         name: "shila",
//         GPA: 3.1
//     },
//     {
//         name: "arezoo",
//         GPA: 3.65
//     },
//     {
//         name: "mohammad",
//         GPA: 3.8
//     }
// ]

// var newStudent = students.filter((item) => {
//     return item.GPA > 3.2
// })

// console.log(newStudent); // Return: 

// // Example: 
// let admitted = [];

// for (let i = 0; i < students.length; i++) 
// {
//     if (students[i].GPA > 3.2)
//         admitted.push(students[i]);
// }

// console.log(admitted);

// // Exmaple: Conditional
// // Note: دقت شود که متد فیلتر یک مقدار بولینی برای هر آیتم بر می گرداند و بر اساس آن آرایه جدید را فیلتر می کند
// let students = [
//     {
//       name: "ali",
//       GPA: 3.3,
//       SAT: 2000
//     },
//     {
//       name: "shila",
//       GPA: 3.1,
//       SAT: 1600
//     },
//     {
//       name: "arezoo",
//       GPA: 3.65,
//       SAT: 1700
//     },
//     {
//       name: "mohammad",
//       GPA: 3.8,
//       SAT: 2100
//     }
//   ]

//   var goodStudents = students.filter((item) => {
//       var result = item.GPA > 3.2 && item.SAT < 2050
//       console.log(result); // Return : boolean
//       return result
//   })

//   console.log(goodStudents);

// Map
// // Note: myArray.map((value , index , array) => // ... )
// // Note: این تابع هیچ اثر جانبی بر روی آرایه‌ای که بر روی آن اجرا شده نمیذاره و فقط یک آرایه جدید میسازه و برمیگردونه
// // Note: اگر با استفاده از آرگومان سوم تغییراتی روی آرایه اصلی اعمال شود مانند حذف عنصر، به جای عنصر حذف شده مقدار تعریف نشده به جای آن عنصر قرار می گیرد
// var concatArraies = array.concat(firstName);
// console.log(concatArraies); // Return: [1, 2, 22, 4, 5, 11, 'Ali', 'Mohammad', 'Reza', 'Vahid', 6, 7, 12]

// // Deference Between Map and Filter and For
// // Map Example:
// var mapArray = concatArraies.map((item) => {
//     return item*2
// })

// console.log(mapArray); // Return: [2, 4, 44, 8, 10, 22, NaN, NaN, NaN, NaN, 12, 14, 24]

// // Filter Example
// // Note: فیلتر نیاز به شرط دارد و در صورت انجام یک عملیات به شکل ذیل تنها خود آرایه در صورت صحیح شدن خروجی بر می گرداند
// var filterArray = concatArraies.filter(item => {
//     return item * 2;
// })

// console.log(filterArray); // Return: [1, 2, 22, 4, 5, 11, 6, 7, 12]

// // For Example
// var newArray = [];

// for (let index = 0; index < concatArraies.length; index++) 
// {
//     var result = concatArraies[index] * 2;
//     console.log(result);
//     newArray.push(result)
// }

// console.log(newArray); // Return:  [2, 4, 44, 8, 10, 22, NaN, NaN, NaN, NaN, 12, 14, 24]

// Object
// // One Way
// var car = {
//     maker: "Ford",
//     model: "Mustang",
//     'year-old': "2020",
//     details: {
//         color: ["Black", "Red", "Green"]
//     },
//     summery: function () {
//         return this.maker + ", " + this["year-old"] ;
//     },
// }

// console.log(car.maker) // Return: Ford
// console.log(car.details.color[0]) // Return: Black
// console.log(car.summery) // Return: [Function: summery]
// console.log(car.summery()) // Return: Ford, 2020
// console.log(car["year-old"]) // Return: 2020
// console.log(car["model"]) // Return: Mustang

// // Way Two
// var car2 = new Object();

// car2.maker = "Ferari";
// console.log(car2.maker); // Return: Ferari
// car2.maker = "Ferary";
// console.log(car2.maker); // Return: Ferary

// // Way Three
// var car3 = Object.create;
// // Note: var car3 = Object.create() => return error

// car3.maker = "Saipa";
// console.log(car3.maker);

// Constructor Function
// function Car(maker, model, year) {

//     this.maker = maker;
//     this.model = model;
//     this.year = year;
//     this.summery = function(){
//         return "This is new " + this.maker;
//     }

// }

// var car4 = new Car("Bmw", "528i", 2019);

// console.log(car4.maker); // Return: Bmw
// console.log(car4.model); // Return: 528i
// console.log(car4.year); // Return: 2019
// console.log(car4.summery()); // Return: This is new Bmw


// const Func = (str)=>{
//     return str[0].toUpperCase()+ str.substr(1);
// }


// console.log(Func("mamzi"));

// Object.prototype.sum = function(a,b){
//     return a+b;
// }

// function Person(name){
//     this.name = name;
// }

// Person.prototype.sum = function(a,b){
//     return a*b
// }

// function Car (make,model,year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }

// Car.prototype.sum= function(a,b){
//     return a-b;
// }

// var car1 = new Car ("Lamorghini","Shift",2020);
// car1.makeSmile = function (){
//     return ":)";
// }

// var car2 = Object.create(car1);
// car2.makeSmile =  function (){
//     return ":(";
// }

// var car = {
//     make : "Ford",
//     model : "Mustang",
//     fun : function (){
//         return this.make;
//     }
// }

// var car2 = {
//     make : "Ferari",
// }

// var result = car.fun.call(car2);

// function displayDetails(year){
//     console.log(year);
//     console.log("Maker : is " + this.make ) ;
    
// }
// console.log(result);

// apply

// displayDetails.apply(car, [2020]);

// call

// displayDetails.call(car , 2020);

// bind

// displayDetails.bind(car , 2020);


// var string = "mohammad-reza"; 

// console.log(string.substring(2,5)); 

// console.log(Math.round(5.487))

// var ajax = new XMLHttpRequest();

// ajax.open('GET' ,'https://jsonplaceholder.typicode.com/users');
// ajax.onreadystatechange = function(){
//     if(this.readyState == XMLHttpRequest.DONE){
//         if(this.status == 200){
//             var result = JSON.parse(this.responseText) ;
//             for (let index = 0; index < result.length; index++) {
//                 console.log(result[index].name);

//             }
//         }else if(ajax.status == 404){
//                 console.log("userNotFound")
//         }
//     }
// }    

// ajax.send()

// 

/// ES6 ///

// function sum(a , b) {

// }


// let sum = function( a , b) {
//     return a + b;
// }

// let sum = (a , b) => ({ a  , b })

// console.log(sum(2, 2))


// let arr = [1,2,3,4]


// console.log(arr.map(item => item * 2))

// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//         console.log(this)
//     }, 1000);
// }

// let person = new Person()

// let arguments = [1,2,3];

// function sum(a , b) {
//     console.log(arguments)
// }

// let sum = (a,b) => console.log(arguments)


// let obj = {
//     a : 10,
//     b : function() {
//         console.log(this.a , this)
//     },
//     c : () => {
//         console.log(this.a , this)
//     }
// }

// obj.b()
// obj.c()


// var list = [45,22,18,121,35,100,98,120];

// let result = list[0];

// let array = [];

// for(var i = 0 ; i < list.length ; i++)
// {   
//     if(list[i] < result)
//     {
//         result = list[i];
//         array.push(list[i])
//     }
// }

// console.log(result);
// console.log(array)