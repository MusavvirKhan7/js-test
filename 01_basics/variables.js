const accountId = 144553
let accountEmail = "musavvir@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi" 

// accountId = 2 not allowed

accountEmail = "wwe.com"
accountPassword = "3957"
accountCity = "Lahore"

/*

dont use VAR due to issue in functional scope and block scope

*/

console.log(accountId);

console.table([accountEmail, accountId, accountCity, accountPassword])