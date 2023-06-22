const UserController = require('../controllers/user.controller');
const Auth = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/user', Auth.authenticate, UserController.getAllUsers)
    app.get('/api/user/:id', Auth.authenticate, UserController.getOneUser)
    // app.post('/api/user', Auth.authenticate, UserController.createUser)
    app.patch('/api/user/:id', Auth.authenticate, UserController.updateUser)
    app.delete('/api/user/:id', Auth.authenticate, UserController.deleteUser)
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