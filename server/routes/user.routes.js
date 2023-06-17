const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);
    app.get('/api/classes', UserController.getAllClasses)
    app.get('/api/student/:id', UserController.getOneStudent)
    app.get('/api/student/:id/classes', UserController.getAllStudentClasses)
}