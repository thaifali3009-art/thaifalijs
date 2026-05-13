//1.while
//2. do-while
//3. swith
//4. Ternary Operators
//for 
// forEach

//syntax
/*
while(conditon){
    // code here
} */

var a = 30;
var b = 30;
while( a==b){ // 30 == 30 // 30 == 31
    console.log(a); // 30
    b++; // 31
}

/* do{
    //code here
}while(condition)
*/

do{
    console.log(a,b); // 30 , 31 // 31 31
    a++; // 32
}while(a == b) // 30 == 31


//switch
/*
switch(condtion){
    case a:
    code here 
    break;
    case b:
    code here;
    break
    default:
    code here;
}
*/


var a = 'a';
var b = 'b';
var c = 'c';
var vv = 'sss'
switch(a){
   case 'a':
       console.log(' this cases a');
       break;
  case 'b':
        console.log(' this is cases b');
       break;
   case 'c':
        console.log(' this is cases c');
       break;
 default:
   console.log('Hi');
}


//syntax // condition ? true statment : false statment 
// if(){}else{}

if(a === 20){
    console.log(' a is equal to b')
}else{
  console.log(' a is not equal to b')  
}

10 === 20 ? console.log(' a is equal to b') :  console.log(' a is not equal to b');

//for loop

/* for( assigment; conditon; increemnt){
    code here
}*/

// 1 to 10

for (var i = 1; i <= 10; i++){ // i = 1  1 <= 10 T // 2 - i = 2 2 <10 T
    console.log(i) // 1 // 2
}