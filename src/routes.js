const { Router } = require('express')
const authMiddleware = require('./middlewares/auth')

const UserController = require('./controller/UserController')
const SessionController = require('./controller/SessionController')

const router = Router()

router.post('/user-create', UserController.craeteUser)
router.post('/session', SessionController.login)




router.use(authMiddleware)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list', UserController.listUsers)
router.delete('/user-delete/:id', UserController.deleteUser)

module.exports = router