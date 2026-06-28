const accountId = 123;  // never change
let accountEmail = "mahreen@gmail.com"; //can be change
var accountPassword = "12345"; // can be 
accountCity = "Lahore"

let name; // undefined

// accountId = 344 => error
accountEmail = "mah@gmail.com"; // not error

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/