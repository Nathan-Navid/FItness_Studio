const ClassController = require('../controllers/class.controller');
const Auth = require('../config/jwt.config');


module.exports = app => {
    app.get('/api/class', Auth.authenticate, ClassController.getAllClasses)
    app.get('/api/class/:id', Auth.authenticate, ClassController.getOneClass)
    app.post('/api/class', Auth.authenticate, ClassController.createClass)
    app.patch('/api/class/:id', Auth.authenticate, ClassController.updateClass)
    app.delete('/api/class/:id', Auth.authenticate, ClassController.deleteClass)
}

