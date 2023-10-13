const name = "Akshat";
const last = "Jangid";

// console.log(name + last + " is Here");
// Not recommended to use

//Modern way
console.log(`hello there! my name is ${name}. and my last name is  ${last}`); // Recommended way of using template literals

const gameName = new String("Akshat-Jangid");
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   Akshat";
console.log(newStringOne); //output --> "   Aksaht"
console.log(newStringOne.trim()); //output--> "Akshat"

const url = "https://akshatjanid.com/akshat%20jangid";

console.log(url.replace("%20", "-")); //output --> "https://akshatjanid.com/akshat-jangid"

console.log(url.includes("sundar")); //->false

console.log(gameName.split("-")); //output --> ['Akshat','jangid']
