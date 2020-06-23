// chapter 21 to 25

// task no 1 


// task no. 2

var mobile = prompt("Enter Your Favourite Phone"," Samsung Galaxy S6 Edge Plue ");
var lenght = mobile.length;
document.write("My favourite phone is : "+mobile+" Lenght Of String : "+lenght);

// task no. 3

var nationality = prompt("Enter Your Nationality","Pakistani");
var index = nationality.length; 
document.write("string : "+ nationality +"<br>"+ "Index Of 'n' : " + index );



// task no. 4


var world = "Hello World";
var last = world.length -1;
document.write(world+last);


// task no. 5

let string = "Pakistani";

document.write("String:"+""+string+"<br>"+"Character at index 3: "+''+string.slice(3,4));


// task no. 6






// task no. 9

var value = 472;
console.log(value,(typeof value));
let value1 = String(472);
console.log(value1,(typeof value1));



// task no. 12

num = 35.36;
num = num.toString();
newNum = num.split('.').join("");
document.write("Number: "+num);
document.write("<br>");
document.write("Result: "+newNum);


// task no. 13






// task no. 14

var a = ["cake","apple pie","cookie","chips","patties"];
var b = prompt("Enter:",a);





// task no. 15





// task no. 16

var university = "University of Karachi " ;
var arrayConvert = university.split('');
console.log(arrayConvert);







// chapter 26 - 30


// task no. 1 

let interger = prompt("Enter Positive Integer","3.1425");

document.write("number : "+interger+"<br>");

let y = parseFloat(prompt("Enter","3.1425")); 
document.write("Round Off Value : "+(y.toFixed(0)));
document.write("<br>"+"Floor Value : "+(y.toFixed(0)));
document.write("<br>"+"Ceil Value : "+(y.toFixed(0)));






// task no. 6


var a = Math.floor(Math.random() * 100);     
alert = (a);


// task no. 7

var kg = prompt("Enter Your Weight in Kilogram","50Kgs");
document.write("The Weight of your is"+ kg);





// chapter 31-34



// task no. 1

var date = new Date();
document.write(date);



// task no. 4


var ds = prompt("Which Date  is Today?","Saturaday");
if (ds === "Saturaday") {
    document.write("It is fun today");
}
else if(ds === "Sunday"){
    alert("It is fun today");
}
else{
    alert("It's a busy day");
}



// task no. 7

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  console.log('It is AM');
}
 else if (curHr > 12) {
  console.log('It is PM');
} else {
  console.log('Error');
}



// task no. 8












// task no. 11

var datetime = new Date("Sat Dec 05 2015 23:08:16 GMT+0500 (PKT)");
document.write("Before: "+ datetime);

datetime.setHours(datetime.getHours()+1); 
document.write("1 Hour age, it was "+ datetime);



// task no. 12

var date = new Date();
document.write("Current Date : "+ date);

var Date = new Date(new Date().setFullYear(new Date().getFullYear() - 105 ))
document.write("100 years back, it was "+Date);







// Assignment # 35-38

// task no. 3

var counting = prompt("Enter 1st Number","2");
var counting1 = prompt("Enter 2nd Number","2");

function count(counting) {
    document.write(counting+counting1);
}
count(counting);



// task no. 4

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}


// task no. 5

var a5;

function name5(a5) {
    var a = prompt("Enter", "2");
    var b = a * a;
    console.log(b);
}
name5(a5);


// task no. 6


function factorialize(num) {
    if (num > 0 && num <= 1 ) 
          return 1;

    else {
        return (num * factorialize(num - 1));
    }
  }
factorialize(4);

// task no. 7

var i = prompt("a","0");
// var i1 = prompt("a","10");
for ( var i ; i >=100  ; i++ ){
    console.log(i);
}


