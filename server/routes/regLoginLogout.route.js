const RegLoginOut = require('../controllers/regLoginLogout.controller')

module.exports = app => {
    app.post('/api/register', RegLoginOut.register);
    app.post('/api/login', RegLoginOut.login);
    app.post('/api/logout', RegLoginOut.logout);
}






// todo Move login and logout to Auth router
// function get(a, b, c) {
//     return a + b + c
// }
// const o = {
//     a: 10,
//     get(path, func1, func2) {
//         console.log(path)
//         func1()
//         func2()
//     },
//     get2: () => {
//         console.log("I am get2")                
//     }
// }
// console.log(o.a)
// o.get2()
// o.get("/api/classes", Auth.authenticate, UserController.login)