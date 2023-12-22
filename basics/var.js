const accountId = 144553
let accountEmail = "saurabh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountDetail;

// accountId = 2 // Not allowed

// accountEmail = "hello@gms.com"
// accountPassword = "212122"
// accountCity = "Delhi"

console.log(accountId);
/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountDetail])