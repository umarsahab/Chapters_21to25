// Question 1
var firstName = prompt("plz inter your first name")
var lastName = prompt("plz inter your last name")
var fullName = firstName + lastName;
alert('Assalamalikum ' + fullName + " sir")
// Question 2
document.write("<br>")
document.write("<br>")

var favoritePhone = prompt("tell me your favorite mobile name")
var phoneLength = favoritePhone.length
document.write("My favorite phone is: " + favoritePhone)
document.write("<br>")
document.write("<br>")
document.write("Length of string: " + phoneLength)

// Question 3
document.write("<br>")
document.write("<br>")

var country = "Pakistani";
var indexNumber = country.indexOf("n")
document.write("String : " + country)
document.write("<br>")
document.write("<br>")
document.write("Index of `n`: "+ indexNumber)

document.write("<br>")
document.write("<br>")

// Question 4

 var helloWorld = "Hello World";
 var indexNumber1 = helloWorld.lastIndexOf("l")
 document.write("String : " + helloWorld)
 document.write("<br>")
 document.write("<br>")
 document.write("Index of `l`: "+ indexNumber1)

 document.write("<br>")
document.write("<br>")

 // Question 5

 var country = "Pakistani";
 var copy0 = country.slice(3 , 4);
 document.write("String : " + country)
 document.write("<br>")
 document.write("<br>")
 document.write('Character at index 3 : ' +  copy0)

document.write("<br>")
document.write("<br>")
//Question 6


var greeting = ' Good Morning! ';
var FName = prompt(`Enter first name: `);
var LName = prompt(`Enter last name: `);
document.write(greeting.concat(FName, " ", LName));

document.write("<br>")
document.write("<br>")

// Question 7
 var city = "Hyderabad";
var replace = city.indexOf("Hyder");

city1 = "Islam"+ city.slice(replace + 5)
document.write("City : " + city)
document.write("<br>")
document.write("<br>")
document.write("After replacement : " + city1)

document.write("<br>")
document.write("<br>")
// Question 8

var message = "Ali and Sami are best friends. They play cricket and Football together.";
var replacing = message.replace(/and/g , "&");
document.write(replacing);
document.write("<br>")
document.write("<br>")
// Question 9

var numberInNum = 472;
var typenumInNumber = typeof(numberInNum)
var changeInString = toString(numberInNum)
var change2 = typeof(changeInString)

document.write("Value : " + numberInNum)
document.write("<br>")
document.write("Type : " + change2)
document.write("<br>")
document.write("Value : " + numberInNum)
document.write("<br>")
document.write("Type : " + typenumInNumber)

document.write("<br>")
document.write("<br>")
// Question 10
var userInput1 = prompt('inter any things your favorite in Small letters :');
var userInputInUpperCase = userInput1.toUpperCase();

document.write("User input : " + userInput1)
document.write("<br>")
document.write("Upper case : " + userInputInUpperCase)

document.write("<br>")
document.write("<br>")

// Question 11 

var userInput1 = prompt('inter any things your favorite in Capitals Letters:');
var userInputInUpperCase = userInput1.toLowerCase();

document.write("User input : " + userInput1)
document.write("<br>")
document.write("Upper case : " + userInputInUpperCase)

document.write("<br>")
document.write("<br>")
// Question 12

var num = 35.36;
var len = num.lenght;
var inString = num.toString();
if(len == "." ){
var delete1 = num.splice(2 , 2)
console.log(delete1)
}
console.log(delete1)

// QUESTION 13
var flag = false;

var useerName = prompt("inter your name ");
for(i=0; i<useerName.length; i++){
if(useerName[i]=== "!"){
    alert("User name is not valid")
    flag=false
    break;
}else if (useerName[i] === ","){
   alert("User name is not valid")

}else if (useerName[i] === "."){
    alert("User name is not valid")
 }else if (useerName[i] === "@"){
    alert("User name is not valid")
 }
}
if(flag == true){
    alert('user name is valid')
}

// Question 14
var arrayBakery = ["cake","apple pie","cookie","chips","patties"]
var userInputBakeryItem = prompt("The bakery item is here what do yo want to order ?; cake ,apple pie , cookie , chips , patties,")
var cseupper = userInputBakeryItem.toLocaleUpperCase();
var sceLower = userInputBakeryItem.toLocaleLowerCase();
var index5 = arrayBakery.indexOf(arrayBakery);
document.write(userInputBakeryItem + " is available at  index " + index5 + " in our bakery")

// Question 15



// Question 16.
 document.write("<br>")
var university = 'University of Karachi';
var arr = university.split();
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)
        document.write(arr[i][j] + "<br /> ");
}

//  Question 17.
var userAddSomething = prompt(`Enter something`);
var lastIndex = userAddSomething.length - 1;
document.write("User Input:" +userAddSomething+ "<br />");
document.write("Last character of input:" + userAddSomething[lastIndex] + "<br/>");
 document.write("<br>")


// Question 18. 
var userMessage = 'The quick brown fox jumps over the lazy dog '.toLowerCase();
var counter = 0;
for (var i = 0; i < userMessage.length; i++) {
    if (userMessage[i] == 't' && userMessage[++i] == 'h' && userMessage[++i] == 'e') {
        counter += 1;
    }
   
}
  document.write(`Text: The quick brown fox jumps over the lazy dog <br />`);
document.write('There are ' + counter + ' occurence(s) of the word the');
