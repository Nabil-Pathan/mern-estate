import express from "express"
import { deleteUserController, getUserListingController,getUser, updateUserController } from "../controllers/userController.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.post('/update/:id' ,verifyToken,  updateUserController)
router.delete('/delete/:id' ,verifyToken,  deleteUserController)
router.get('/listings/:id',verifyToken , getUserListingController)
router.get('/listings/:id',verifyToken , getUserListingController)
router.get('/:id',verifyToken , getUser)




export default router
