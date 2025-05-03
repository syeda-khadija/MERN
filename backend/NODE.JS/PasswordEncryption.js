// npm i bcryptjs
let bcr = require('bcryptjs');
let user_password="khadija khursheed 10";
let salt=16;
let new_password = bcr.hashSync(user_password, salt);
console.log(`original password ${ user_password} \n\n Encrtpt password${ new_password}`);
