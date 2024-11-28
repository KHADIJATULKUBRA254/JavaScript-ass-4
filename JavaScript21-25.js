//-----Chapter#21-25-----//
//---Question#1
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = `${firstName} ${lastName}`;
alert(`Hello, ${fullName}!`);

//---Question#2
let mobileModel = prompt("Enter your favorite mobile phone model:");
alert(`The length of your input is: ${mobileModel.length}`);

//---Question#3
let word = "Pakistani";
alert(`The index of 'n' is: ${word.indexOf('n')}`);

//---Question#4
let phrase = "Hello World";
alert(`The last index of 'l' is: ${phrase.lastIndexOf('l')}`);

//---Question#5
alert(`The character at index 3 is: ${word.charAt(3)}`);

//---Question#6
fullName = firstName.concat(" ", lastName);
alert(`Hello, ${fullName}!`);

//---Question#7
let city = "Hyderabad";
alert(city.replace("Hyder", "Islam"));

//---Question#8
let message = "Ali and Sami are best friends. They play cricket and football together.";
alert(message.replace(/and/g, "&"));

//---Question#9
let str = "472";
let num = Number(str);
alert(`String: ${str}, Type: ${typeof str}\nNumber: ${num}, Type: ${typeof num}`);

//---Question#10
let input = prompt("Enter some text:");
alert(input.toUpperCase());

//---Question#11
input = prompt("Enter some text:");
alert(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());

//---Question#12
let numm = 35.36;
alert(String(numm).replace(".", ""));

//---Question#13
let username = prompt("Enter your username:");
if (/[!@.,]/.test(username)) {
    alert("Please enter a valid username without special characters [@, ., , , !].");
} else {
    alert("Username is valid.");
}

//---Question#14
let itemss = ["cake", "apple pie", "cookie", "chips", "patties"];
let search = prompt("Enter an item to search:").toLowerCase();
if (itemss.includes(search)) {
    alert(`${search} is available in the list.`);
} else {
    alert(`${search} is not available in the list.`);
}

//---Question#15
let password = prompt("Enter your password:");
if (!/^[a-zA-Z]\w{5,}$/.test(password)) {
    alert("Password must be at least 6 characters, contain letters and numbers, and cannot start with a number.");
} else {
    alert("Password is valid.");
}

//---Question#16
let university = "University of Karachi";
let array = university.split("");
alert(array.join("\n"));

//---Question#17
input = prompt("Enter some text:");
alert(`The last character is: ${input.charAt(input.length - 1)}`);

//---Question#18
let text = "The quick brown fox jumps over the lazy dog";
let count = (text.match(/the/gi) || []).length;
alert(`The word 'the' occurs ${count} times.`);

