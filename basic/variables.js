const account_id = 144553  //cannot change this value for account_id variable
let account_email = "Eeshansh@google.com"
var account_password = "12345"
let account_state
let account_city = "Jaipur"


account_email = "hc18@hc.com"
account_password = "54321"
account_city = "Bangalore"

/* Avoid using 'var' in the javascript because it gave block scope and functional scope issues.
Always use 'let' and 'const'*/

// console.log(account_email);
console.table([account_id, account_password, account_state, account_city, account_email])
