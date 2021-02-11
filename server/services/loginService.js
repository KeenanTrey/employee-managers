/* 
    Login service authenticates email and password for
    returns true/false 
    false keep user on login
    true redirects to dashboard
*/

const fileService = require('./fileService')

//route; pass authenticate fn
//read user.json; loop over data and check for match 
const authenticate = (credential)=>{
    const {email, password} = {...credential}
    console.log(email, password)
    const users = fileService('../data/users.json')
}

authenticate({email:"user@gmail.com", password:"1234"})