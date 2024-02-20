const express = require("express")

const router = express.Router()
const{ createUser, GetAllUsers, LoginUser, GetSingleUser, DeleteUser, UpdateUser } = require("../controllers/UserController")

router.post('/registreUser', createUser)
router.get('/GetAllUsers', GetAllUsers) 
router.post('/LoginUser', LoginUser) 
router.get('/GetSingleUser/:id', GetSingleUser)
router.delete('/DeleteUser/:id', DeleteUser)

router.put('/UpdateUser/:id', UpdateUser)



module.exports = router