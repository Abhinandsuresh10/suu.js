

// alert("enter");
//     const userInput = prompt("Enter something:");

// console.log("User input:", userInput);

// console.log(typeof userInput);

//     const number = prompt("enter a value");

// console.log("you have entered ",number);

// console.log(typeof number); 

// const name  = "funtasic";
// console.log(name[4]);

// const array =[1, 2, 3]


// function addElementToArray(element){
//     array.push(element);
// }


// console.log(a);
//  const prompt = require('prompt-sync')() const prompt = require('prompt-sync')()

// let arr = prompt("enter a name");

// let arr1 = arr.split(``).reverse().join(``)
// if (arr ===arr1){
//  console.log("this is palindrome");
// }else{
//     console.log("not a palindrome");
// }

//console.log(arr1);



// function handleClick(){
//     const a = prompt("Whats your name")
//     console.log(`Hi ${a}`);
// }

// const button = document.getElementById("test")
// button.addEventListener("click", handleClick);

// const name = prompt("enter a name");

//REDUCE

//with arrow function

// const arr = [1,2,3,4]

// const red = arr.reduce((a ,c) =>{
//     return a + c ;
// },0);

// console.log(red);

//reduce without arrow function...

// const arr1 = [1,2,3,4];

// function reducing(a , c){
//     return a + c;
// }

// const red1 = arr1.reduce(reducing, 0)

// console.log(red1);

// const prompt = require('prompt-sync')()

// document.querySelector('#gparent')
// .addEventListener("click", () =>{
//      console.log("gparent");
// },false);
// document.querySelector('#parent')
// .addEventListener("click", (a) =>{
//      console.log("parent");
//      a.stopPropagation();
// },false);
// document.querySelector('#child')
// .addEventListener("click", () =>{
//      console.log("child");
// },false);


// const arr = [1, 2, 3, 4]

// const area = function(){

//     const output = []

//     for(let i=0; i<arr.length; i++){

//          output.push(arr[i] * arr[i]);
//     }

//     return output;
// };

// console.log(area(arr));

// const number = [2, 4, 6, 8]

// const square = function(){
//     const result = []
//      for (i=0; i<number.length; i++){
//        result.push(number[i] * number[i])
//      }
//      return result;
// }
// console.log(square(number));

// const array = [2, 4, 6, 8]

// const square = array.map((num) => num.toString(2));

// console.log(square);

// const prompt = require('prompt-sync')()

// const name = prompt("enter name : ")

// if ( name === name.split(``).reverse().join(``)){
//    console.log("this is palindrome");
// }else{
//     console.log("not a palindrome");
// };

// const num = [1,3,2,4,6,5,7,9,8,10]

// const num1 = num.sort((a,b)=> a - b)
// .filter(num1 => num1 % 2 !==0);

// const num2 = num1.reduce( (a ,b) => a + b);

// console.log(num2);
//  const prompt = require('prompt-sync')()

//  function getdata(dataId,dataId1){
//     setTimeout(() =>{
//         console.log('data',dataId);
//         dataId1();
//     },2000);
//  }
// getdata(1, getdata(2));

// const prompt = require('prompt-sync')()
// console.log('begin');
// function a(b,c){
//     setTimeout(() =>{
//    console.log('hello',b);
//    if(c){
//     c();
//    }
//     },1000);
// }
// a(1,() =>{
//   a(2,() =>{
//     a(3,() =>{
//         a(4,() =>{
//             a(4.5,() =>{
//                 a(5,() =>{
//                     a(6,() =>{
//                         a(7,() =>{
//                             a(8,() =>{
//                                 console.log('end');
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
//   })
// })


// const prompt = require('prompt-sync')()

// function result(){
//     return new Promise((resolve,reject) =>{
//      setTimeout(() =>{
//       console.log("wait");
//       resolve('success');
//      },4000);
//     });
// }

// result().then((resolvedValue) => {
//     console.log(resolvedValue); 
//     console.log("resolved successfully");
// });

// function number(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("start");
//             resolve('middile');
         
//         },2000);
//     });
// }
// number ().then((thenworking) => {
//     console.log(thenworking);
//     console.log('success');
// });


// function arr(){
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('begining');
//         reject('error');
//     },2000);
//     });
// }   

// arr().catch ((end) => {
//     console.log(end);
//     console.log('.........');
// })




// function cache(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//            console.log('checking.....');
//            const person ={
//             name: '...ABHINAND',
//             res(){
//                 console.log(this.name);
//             }
//         }
//         person.res();
//            resolve('verified');
//         },2000)
//     })
// }

//    cache().then((answer) =>{
//     console.log(answer);
//     console.log('checking completed');
//    })

// const arr = [1,3,5,7,9]

// const arr1 = arr.reduce((acc,curr) => {
//     return acc * curr;
// } )

// const arr = [1,3,5,7,2,4,6]

// const arr1 = arr.reduce((acc,cur) => {
//     return acc > cur ? acc : cur;
// });

// console.log(arr1);

// function pizza(){
//     console.log('begining');
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         food = 'biriyani'
//         resolve(`${food},is ready`);
//     },2000);
// })
// }
// pizza().then((food1) => {
//     console.log(food1);
//     console.log('for you');
// })

// const added = {
//     name: 'abhinand',
//     age: 21 ,
//     place: 'wayand'
// }

// added.num = 2;
// console.log(added);

// const person = {
//     name: 'abbbbb',
//     place: 'jfffnf',
//     delete: 'dsfsds'
// }

// delete person.delete;

// console.log(person);

// console.log('is this working');
// function person(){
//    return new Promise(resolve => {
//     setInterval(() => {
//         resolve('happy');
//     },2000)
//    })
// }

// async function  person2 (){
//     const result = await person()

//     console.log(result);
// }
// person2()

// const first = [1,2,3,4,5]

// const second = first.sort((a,b) => a - b).filter((a,b) => a > 2).map((c,d) => {
//     return c + d ;
// },0)


// console.log(second);

//---palindrome----

// const name1 = 'malayalam';

// if ( name1 == name1.split(``).reverse().join(``) ){
//     console.log('this is palindrome');
// }else{
//     console.log('not a palindrome');
// }

//---concat----
// console.log('loading.....')
// function calling(callback){
//     return new Promise((resolve,reject) =>{
//     setTimeout(()=> {
//     console.log('WELCOME');
//     resolve('mission accomplished')
//    callback();
// },1000);
// })
// }
// function calling2(){
//     const one = 'ABHINAND'
//     const two = 'SURESH'
//        const three = one.concat(' ',two);
//        console.log(three);
// }
// calling(calling2).then((parameter) => {
//     console.log(parameter);
// })

// const arr = [1,2,3,4,5]

// const arr1 = arr;

// arr1[0]=10;

// console.log(arr);                                                                                                                                      1
// console.log(arr1);

// const bar = [8,7,6,...arr]

// console.log(bar);

// const bar2 = bar;

// bar[5] = 25;

// console.log(bar2);

// const person = 50;
// function result(naa){
// if(person > 50){
//     console.log(`${naa} won`);
// }else{
//     console.log(`${naa} lost`);
// }
// }
// result('abhinand');

// const person = {
//     name: 'abhinand',
//     place: 'wayand',
//     end: function(){
//         console.log(this.name);
//     }
// } 
// person.end();
// console.log(person.place);
// const prompt = require('prompt-sync')()

// const array = [1, 2, 2, 4, 3, 4, 4, 5];
// const Array2 = array.reduce((acc,cur) => {
//     if (!acc.includes(cur)) {
//         acc.push(cur);
//     }
//     return acc;
// }, []);
// console.log(Array2);

// class person{
//     constructor(name, place){
//   this.name = name;
//   this.place = place;
//     }

// method () {
//     return `i am ${this.name} from ${this.place}`;
// }
// }
// const person1 = new person('abhinand', 'india');

// console.log(person1.method());

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
//   };
  
//   const { firstName, lastName, age } = person;
  
//   console.log(firstName, lastName, age); 


// const array = [1,2,3,4,5]

// const [a,b,c,d,e] = array;

// console.log(a,c,e);

// const arr = "abhinand";
// const arr1 = "suresh";

// const arr2 = arr.concat(' ',arr1);

// console.log(arr2);

// const arr = [1,2,3,4,5]
// setTimeout(()=> {
// arr.forEach((element,index) => {
//     console.log(`index ${index} element ${element}`);
// })
// },1000)

// (function (para,meter){
// console.log(meter,para);
// })('enthusiastic',12);




// (function (){
//     var c = 0;
//     function ingre(){
//         c++;
//         console.log('ingre',c);
//     }
//     function decree(){
//         c--;
//         console.log('degree',c);
//     }
//    ingre();
//    decree();
// })();

// const thenable= {
//     then(resolve,reject){
//         setTimeout(() => {
//             try{
//             resolve('success');
//             }
//         catch{
//             reject('error');
//         }
//         },2000);
//     }
// }
//     thenable.then(
//     resolve =>{
//         console.log(resolve);
//     },

//     reject => {
//         console.log(reject);
//     }
// );

// function exam (a){
//     return function (b){
//         return function (c){
//             return function(d){

           
//      return a + b + c + d;
//     }
//     }
//     }
// }

// console.log(exam(1)(3)(4)(5));

// function env(){
//     return new Promise((resolve,reject) =>{
//      setTimeout(() =>{
//    reject('completed');
//      },2000);
//     })
// }
// async function env2(){
//     try{
//         const last = await env()
//         console.log(last);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// env2();

// const one = {
//     name: ' abhinand',
//     place: 'ambalavayal'
// }
// const enter = function (){
//     console.log(this.name+' '+this.place+' '+this.age);
// }
// const two = {
//     name: 'anuvind',
//     place: 'wayand'
// }
// const three ={
//     name: 'melbin',
//     place: 'ootty',
//     age:840
// }
// enter.apply(one,['abhinand','ambalavayal']);

// const arr = [1,2,3,4]

// arr.splice(2,0,8);

// const arr1 = arr.filter((a,b) => a - b).map(sum => sum * sum).reduce((acc,cur) => {
//     return acc + cur;
// },0);

// console.log(arr1);


// const array = [{a:2,b:2},{a:2,b:2},{a:2,b:2}]

// let a = 0;
// let b = 0;

// array.forEach((c) => {
//     a = a - c.a;
// });

// console.log('sum of a',  a);

// const arr = ['arwefw','erwrtgrg','efwgfgwgwrg']

// const arr1 = arr.reduce ((a,b) => a.length < b.length? a: b);

// console.log(arr1);

// const arr = [{a:2},{a:2},{a:2}]
// let a = 0;
//  arr.forEach((x) => {
//     a = a + x.a;
// })

// console.log(a);

// const arr = ['9','2','3','4','5','6','7','8']

// const arr2 = ['array','method','alongingst']

// const arr3 = arr2.reduce ((a,b) => 
// a.length > b.length?a:b
// );

// console.log(arr3);


// const str = 'solomonm';
// const repeat = [];
// for (const char of str) {
//     if (str.indexOf(char) !== str.lastIndexOf(char)) {
//         repeat.push(char);
//     }
// }
// console.log(repeat);

// const a = 'malarvadi'

// const ar = []

// for (const cha of a ){
//     if (a.indexOf(cha) !== a.lastIndexOf(cha)){
//         ar.push(cha);
//     }
// }
// console.log(ar);


// const object = {
//     name: 'snfjsfj',
//     place: 'fwifjgf',
// }

// const object2 = {
//     name: 'dkjfnsfnkjf',
//     place: 'nfniufiuf',
// }
// function result(a,b){
//     console.log(this.name+' '+this.place)
// }
// const appy = result.bind(object);
// appy();


// const button = document.getElementById('toggleButton');
// const paragraph = document.getElementById('hiddenParagraph');
// button.addEventListener('click', () => {
//     if (paragraph.style.display === 'none') {
//         paragraph.style.display = 'block'; 
//     } else {
//         paragraph.style.display = 'none'; 
//     }
// });


// function person(callback){

//     const message = 'blahh';

//     callback(message);
// }

// function person2(message){

//      console.log(message)
// }

// person(person2);



// function love (sent){
//     const email = 'surprise';
//     sent(email);
// }

// function lover(email){
//     console.log(email);
// }
// love(lover);

// const num1 = {
//     place: 'dddddd'
// }
// const num2 = {
//     place: 'ffffff'
// }
// function nnn(a){
//     console.log(this.place,a);
// }

// nnn.apply(num1,['end']);

// function orginal (){
//     const one = document.getElementById('div')
//     one.textContent = 'hey'
// }

// const second = document.getElementById('button')
// second.addEventListener('mouseout',orginal);

//----hoisting test------

//  let a = 10;
 
//  console.log(a);

//  console.log(b);

//  var b = a * a;

// const arr = [1,2,3,4,5,6,7,8,9]

// const arr1 = arr.filter((a) => {
//    return a % 2 !== 0 ;
// }).reduce((a,b) =>{
//     return a + b;
// },0)
// console.log(arr1);

// function one (){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//         result = null
//         if(result){
//             resolve(result);
//         }else{
//             reject('data not found')
//         }
//         },2000);
//     })
// }
// one().then((answer) => {
//      console.log(answer);
// }).catch((end) => {
//     console.log(end)
// }).finally(
//     console.log('loading....')
// )


// function one (n,r){
//     return new Promise((resolve,reject) => {
//         const data = 1
//         if(data){
//         const sum = n + r 
//         resolve(sum);
//         }else{
//         const sum1 = n - r;
//         reject(sum1)
//         }
//     })
// }
// one(5,5).then((x) => {
//     console.log(x)
// }).catch((y) => {
//     console.log(y)
// });


// const a = 30;
// const b = 40;

//   const se = new Promise((res,rej) => {
//        const sum = a + b;
//        res(sum);
//     })

// se.then((end) =>{
//     console.log(end);
// })

// async function fetchData() {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     return data;
// }

// const a = 10;
// const b = 20;



// const a = [1,2,3,4,5,[6,7,8]]

// const b = [...a]

// b[0] = 8;
// b[5][0] = 0;
// console.log(a);
// console.log(b);

// const a = [1,2,3,4,5]

// a.forEach(a => console.log(a))



// const a = {
//     name: 'abhinand',
//     place: 'india',
//     inside : {
//          name: 'nithin',
//          place: 'america',
//          inside: {
//             name: 'melbin',
//             place: 'UK',
//          }
//     }
// }
// const c = ' suresh'
// const d = ' ravi'
// const e = ' mathew'
// const b = a.inside?.name.concat(d)

// console.log(b);

//  const prompt = require('prompt-sync')()


// const arr = []
// const arr1 = []

// const size = prompt(`enter the first size `)
// const size1 = prompt(`enter the second size `)

// for (let i=0; i<size; i++){
//     arr.push(i+1);
// }
// for (let i=0; i<size1; i++){
//     arr1.push(i+1);
// }

// const arr3 = arr.map((a,b) => {
//     return a + b;
// })
// const arr4 = arr1.map((a,b) => {
//     return a + b;
//  })

// console.log([...arr3,...arr4]);



// immediately invoked function expression it helpes to avoid global pollution
// (function(){
//     const sum = 10 + 20;
//     console.log(sum);
// })();



// for (let i=10; i>1; i--){
//    let line = ' '
//    for (let j=1; j<i; j++){
//     line += j+' '
//    }
//    console.log(line.trim());
// }

// const a = []
// const b = 10;

// for (let i=0; i<b; i++){
//     a.push(i+1);
// }

//     if(a.length % 2 !== 0){
//         console.log(a);
//     }



// const a = [];
// const c = [];
// const b = 10;

// for (let i = 0; i < b; i++) {
//     if ((i + 1) % 2 !== 0) {
//         a.push(i + 1);
//     }else {
//         c.push(i + 1);
//     }
// }

// if (a.length % 2 !== 0) {
//     console.log(a);
// }


// console.log(c);

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };

//   const entries = Object.entries(person);
//   console.log(entries);
//   const keys = Object.keys(person);
//   console.log(keys);
//   const values = Object.values(person);
//   console.log(values);
//   const result = person.hasOwnProperty('name');
//   console.log(result); 


// const a = [2,2,3,4]
// const b = [1,4,3,4]
// const c = [1,2,6,4]
// const d = [1,2,3,8]

// // const sum = [[...a],[...b],[...c],[...d]]
// // const result= sum.reduce((acc, ele) => {
// // return acc = acc + ele[sum.indexOf(ele)];
// // },0)
// // console.log(result);

// const sum = [[...a],[...b],[...c],[...d]]

// const result= sum.reduce((mysum, ele) => {
//     let myele = ele[sum.indexOf(ele)];
//     mysum = mysum + myele;
//     return mysum;
//      },0)

// console.log(result) 


// Decorator function

// const person = {
//     name: 'abhinand',
//     place: 'ambalavayal'
// }
// const person2 = { 
//     name: 'enuooo',
//     place: 'wayanad',
// }
// const person3 = { 
//     name: 'enuooo',
//     place: 'wayanad',
// }
// person.name = 'blahh';
// const b = Object.freeze(person2);
// person2.name = 'blahh';
// const a = Object.entries(person);

// console.log(a);
// console.log(b);


// class result {
//     constructor(a,b){
//         this.sum = a + b;
//     }
//     ans(){
//         console.log(this.sum);
//     }
// }
// const OGresult = new result (10,67)
// OGresult.ans() 

// function one (){
//     console.log('repeat');
// }
// const interval = setInterval(one,1000)

// setTimeout(() =>{
// clearInterval(interval);
// },10000)

// class animal {
//     constructor(name){
//         this.name = name
//     }
//     work(){
//         console.log('first one',this.name)
//     }
// }
// class kid extends animal {
//     constructor(name){
//         super(name);
//     }
//     work2(){
//         console.log('second one',this.name)
//     }
// }
// const result = new kid ('robot')
// result.work()

// function singleNumber(nums) {
//     let result = 0;
//     for (let num of nums) {
//         result ^= num;
//     }
//     return result;
// }
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2])); 
// console.log(singleNumber([1]));


// const arr = [1,2,3,4,55,66,77,888]

// const arr2 = []

// for (let first of arr){
//     if (first % 2 !== 0)
//     arr2.push(first);
// }

// const arr3 = []

// for (let second of arr2){
//     const arr4 = String(second).split('').reduce((a,b) => a + Number(b) ,0);
//     arr3.push(arr4);
// }

// arr3.reverse();
// console.log(arr3)

// const arr = [1, 2, 3, 7, 1, 2, 3, 4, 3 ,7];
// const result = [];

// const second = [];

// for (const first of arr) {
//     second[first] = (second[first] || 0) + 1;
// }

// for (const first in second) {
//     if (second[first] > 1) {
//         result.push(parseInt(first));
//     }
// }

// console.log(result); 


// async function fetchData() {
//     const data = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000); 
//     });
//         return data;
// }
// async function processData() {
//     const result = await fetchData();
//         console.log(result);
// }
// processData();


// const arr = [12,34,567,8765,453,212]

// const arr1 = []

// for (let a of arr){
//     if (a % 2 == 0)
//     arr1.push(a);
// }
//  const arr2 = []

//  for (let b of arr1){
//     const ans = String(b).split('').reduce((a,b) => a + Number(b) ,0)
//     arr2.push(ans)
//  }
//  console.log(arr2)



// let arr = [1,'a',2,'b',3,'c',4,'d',5]

// let newarr=arr.filter((x)=>{

// return typeof x==='number'

// })
// let avrg=newarr.reduce((a,c)=>{

//     return a+c

// },0)/newarr.length

// console.log(avrg);

// let arr=[{name:"abhi",age:23},{name:"suni",age:43},{name:"biju",age:43},{name:"dora",age:23},{name:"buji",age:23}]

// let ans = arr.reduce((x,y) => {
//     return x += y.age === 23?1:0
// },0)
// console.log(ans)

//[[1,2],[3,4],[5,6]',[7,8],[9,0]]

// let arr=[3,2,1,4,5,6,9,8,7,0]

// let arr1  = []
// for (let i=0; i<arr.length; i+=2){
//     arr.sort((a,b) => a - b)
//     arr1.push(arr.slice(i,i+2))
// }
// console.log(arr1)


// let arr=[1,4,7,5,9]

// const ans = []
// for (let i=0; i<9; i++){
//     if(! arr.includes(i)){
//         ans.push(i)
//     }
// }
// console.log(ans)


// let a = [1,1.2,3,3.7]

// let b = []

// for (let c of a){
//     if(c == 1.2 || c == 3.7){
//         c = Math.ceil(c);
//         b.push(c)
//     }else{
//         b.push(c)
//     }
// }
// console.log(b);


// const first = new Date();

// const hours = first.getHours()
// const minutes = first.getMinutes()
// const seconds = first.getSeconds()

// const year = first.getFullYear()
// const month = first.getMonth()
// const date = first.getDate()



// console.log(`${hours}:${minutes}:${seconds}  ${year}-${month}-${date}`)

// const arr = [1.4,3,5,2,4,7,9,8]

// const arr2 = Math.min(...arr)

// console.log(arr2);


// const arr = [1, 2, [3, 4]]

// const arr1 = arr.flatMap((num) =>  {
//     if (typeof num === 'number'){
//         return num * num;
//     }else{
//         return num.map(an => an * an)
//     }
// })
// console.log(arr1);



// let a = 'i am a good man'
// let k = 4;

// let ar = a.split(' ').slice(0,k).join(' ')

// console.log(ar);


// const arr = [1,2,3,4]
// let result = 0;
// for(let i=0; i<arr.length; i++){
//     result = arr[i] * arr[i] + arr[i] + 1 ;
// }

// console.log(result)

// function one (){
//     return new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             const res = {name: 'abhinand', email: 'john@example.com' }
//         resolve(res)
//         },2000)
//     })
// }    
// one().then((answer) => {
//     console.log(answer);
// })
// async function two(){
//     try{ 
//         const res2 = await one();
//         console.log(res2);
//     }catch(error){
//         console.error('warning');
//     }
// }

// two()

// const promises = [Promise.reject('first'),Promise.reject('second'),Promise.resolve('third')]

// Promise.any(promises)

// .then(result => {
//     console.log('resolved',result);
// }).catch(result => {
// console.log('not fulfilled',result);
// })

// let arr = [1,2,3,4,4,5,3,2,7,9,7]

// let a = 0;
// for (let i=0; i<arr.length; i++){
//     if(arr.indexOf(arr[i],0,i) === i){
//         arr[a] = arr[i]
//         a++;
//     }
// }
// arr.length = a;
// console.log(arr)


// let arr = [1,2,3,4,5,6,7,2,3,4,0,8,6]

// const arr1 = arr.filter((a,b,c) => {
//     return c.indexOf(a) === b;
// })

// console.log(arr1)

// let arr = [1, 2, 3, 4, 1, 2, 4, 5, 6, 6, 6];

// for (let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             arr.splice(j,1)
//             j--;
//         }
//     }
// }
// console.log(arr)



// function second(){
//     return new Promise((resolve) => {
//         let clear
//        setTimeout(() => {
//        clearInterval(clear)
//        resolve('resolved')
//        },5000)
//    clear = setInterval(() => {
//         resolve('resolved')
//        },1000)
//     })
// }

// async function first(){
//     try{
//     const result = await second()
//     console.log(result)
// }catch(error){
//     console.log(error)
// }
// }

// first()

// let a = 1;

// const b = setInterval(() => {
//     console.log(a, '*', a, '=', a*a)
//     a++;
//     if(a>10){
//         clearInterval(b);
//     }
// },600)

// let a = 1;

// function one (){
//     console.log(a, '*', 5, '=', a*5)
//     a++;
//     if(a<=10){
//         setTimeout(one,1000)
//     }
// }

// one()

// let arr = ['1',2,'3',4,'5',6]
// let arr1 = []
// for (let i=0; i<arr.length; i++){
//     if(typeof arr[i] === 'number')
//     arr1.push(arr[i])
// }
// console.log(arr1)

// class one {
//     constructor(name){
//         this.name = name
//     }
//     fun(){
//         console.log(`${this.name}...first one`)
//     }
// }
// class two extends one{
//     fun(){
//         console.log(`${this.name}...second one`)
//     } 
// }
// const apple = new two('abhinad')
// apple.fun()

// class one {
//     constructor(a,b){
//         this.a = a
//         this.b = b
//     }
//     fun(){
//         console.log(`${this.a} , ${this.b}`)
//     }
// }

// class two extends one {
//     fun(){
//         console.log(`${this.a} error, ${this.b} error`)
//     }
// }

// const res = new two('hello','silencio')

// res.fun()

// const arr = [1,2,3,4,5,6,9,11,12,13,15]
// const arr1 = []
// for(let i=0; i<arr.length; i++){
//    if(arr[i] % 2 !== 0 && arr[i + 1]  % 2 !== 0){
//       arr.splice(i,1)
//      continue;
//    }else if(arr[i] % 2 !== 0){
//     arr1.push(arr[i])
//    }
// }

// console.log(arr1);

// const checkboxes = document.querySelectorAll('.body input[type="checkbox"]')
// const button1 = document.getElementById('submitBtn')
// const message = document.getElementById('message')

// button1.addEventListener('click',function(){
//    let count = 0;

//   checkboxes.forEach(function(elements){
//       if(elements.checked){
//          count++;
//       }
//    });
//    if(count === checkboxes.length && count > 0){
//       message.textContent= 'congratulations';
//       alert('you are selected')
//    }else{
//       message.textContent='not eligible';
//       alert('maybe next time..')
//    }
// });



// const arr = [1, 3, 5, 7, 0, 4, 1];
// const arr1 = [1, 3, 5, 7, 3, 9, 1];

// const arr3 = []

// for (let i=0; i<arr.length; i++){
//   if (arr[i]!==arr1[i]){
//    arr3.push(arr[i],arr1[i])
//   }
// }
// console.log(arr3)

// const arr = [1,2,3,4,5]
// const arr1 = [6,7,8,9,10]
// const arr2 = []
// for(let i=0; i<arr.length; i++){
//  let  count=0;
//   if(count==0){
//    (arr[i])
//    count=1;
//   }else if(count=1){
//    (arr1[i])
//   }
//   arr2.push(arr[i],arr1[i])
// }

// console.log(arr2)

// const person = {
//    first: 12,
//    second: 34,
//    third: 56,
//    fourth: 78
// }

// const res = Object.values(person)

// let res2 = 0;

//     res.forEach(num => {
//     const d = String(num).split('').map(Number); 
//     const sum = d.reduce((a, c) => a + c, 0); 
//     res2 += sum; 
// });

// console.log(res2);


// let arr = [1,2,3,7,6,5,9,83,9,83,98]


// let arr2 = arr.reduce((a,c) => {
//     return Math.min(a,c)
// })

// console.log(arr2);



// ....arguments object....

// let arr = [1,2,3]

// function one (){
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
//     console.log(arr.length);
// }

// one()

// document.getElementById('first').addEventListener('submit',function(a){
//  a.preventDefault();
// })

// document.getElementById('first').addEventListener('click', function(){
//     console.log('first div clicked');
// })

// document.getElementById('second').addEventListener('click', function(){
//     console.log('second div clicked');
// },true)

// document.getElementById('third').addEventListener('click', function (){
//     console.log('third div clicked')
// })


// const first = document.getElementsByTagName('button')
// const second = document.getElementById('check1')

// first.addEventListener('click', function(){
//     second.checked = !second.checked;
// });

// let one = document.getElementById('button1')
// let two = document.getElementById('check1')

// one.addEventListener('click', function (){
//     two.checked = !two.checked;
// })

// let sum = 0;
// let val = 5;
// function one(val){
//   sum +=val;
//  console.log(sum); 
  
// }
// const ans = setInterval(() => one(val), 1000);
// setTimeout(() => {
//     clearInterval(ans)
// },10000)


// function one(a,c){
//     setTimeout(() => {
//         console.log('pending...',a)
//         if(c){
//             c()
//         }
//     },1000)
// }
// one('wait a lit long',() =>{
//     one('4 sec', () =>{
//           one('3 sec',() =>{
//              one ('2 sec',() => {
//                 one ('1 sec',() => {
//                     one ('done',() => {
//                         one ('turn back on',() => {

//                        console.log('thanks for waiting. ');
//                        function generateOTP() {
//                         const otpLength = 6; 
//                         let otp = '';
//                         for (let i = 0; i < otpLength; i++) {
//                             otp += Math.floor(Math.random() * 10); 
//                         }
//                         return otp;
//                     }
//                     const otp = generateOTP();
//                     console.log("user ID :", Number(otp));
//                     })
//                     })
//                 })
//              })
//           })
//     })
// })

// console.log(Math.floor(Math.random()*10000));


// function first(age){
//     if(age > 18 && age < 100){
//         throw new Error('Success')
//     }
//     console.log('Not allowded !')
// }

// try {
//     first(12)
// }catch(error){
//     console.error(error.message)
// }


//  let a = 10;
//  let b=20 ;
//  let c = b ?? a;

//  console.log(c);

//----using generator function to generate multile of 5 inifinitly-----//

// function* one(){
//     let i = 1;
//     while(true){
//         yield i * 5;
//         i++;
//     }
// }

// const arr = one()

// const arr1 = setInterval(() => {
//     console.log(arr.next().value)
// },1000) 


// function* one(){
//     let sum = 0;
//     while(true){
//         yield sum + 1;
//         sum ++;
//     }
// }
// const ans = one()
// const res = setInterval(() =>{
//         console.log(ans.next().value);
//   },1000)
//   setTimeout(() =>{  
//     clearInterval(res)
//   },11000)
 
// const btn = document.getElementById('one2')
// const check = document.getElementById('one')

// btn.addEventListener('click', function (event){
//     check.checked = !check.checked;
//     if(check.checked){
//         event.target.style.backgroundColor='red'
//     }else if(!check.checked){
//         event.target.style.backgroundColor='blue'
//     }
  
// })


// const arr = [1,2,3,4,1,2,3,4,5,6,]
// const arr2 = new Set()

// for(let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if(arr[i]===arr[j]){
//             arr2.add(arr[i])
//         }
//     }
// }
// for(let i=0; i<arr.length; i++){
//     if(arr2.has(arr[i])){
//         arr.splice(i,1)
//         i--;
//     }
// }

// console.log(arr);    


//----shallowcopy---deepcopy---//

// const arr = [1,2,3,[4]]

// const arr2 = [...arr]

// arr2[0] = 34
// arr2[3][0] = 123
// console.log(arr);
// console.log(arr2);

// const arr3 = [1,2,3,[4]]

// const arr4 = JSON.parse(JSON.stringify(arr3))

// arr4[0] = 34
// arr4[3][0] = 123
// console.log(arr3);
// console.log(arr4);


    // console.log(2 && 1);


// class Person {
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     answer(){
//         console.log(`${this.name}....${this.age}`);
//     }
// }
// const res0 = new Person('abhinand',21)
// res0.answer()

// class Person1 extends Person{
//     constructor(name,age,occupation){
//         super(name,age)
//         this.occupation = occupation;
//     }
//     answer2(){
//         console.log(`${this.name}....${this.age}...${this.occupation}`);
//     }

// }

// const res = new Person1('abhiand',21,'developer')
// setTimeout(() =>{
//     res.answer2()
// },1000)


// class Person2 extends Person1{
//     constructor(name,age,occupation,place){
//         super(name,age,occupation)
//         this.place = place
//     }
//     answer3(){
//         console.log(`${this.occupation}.....${this.place}`);
//     }
// }

// const res2 = new Person2('abhinand',21,'developer','inda')

// res2.answer3()


