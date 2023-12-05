import express from "express"
import { SignupController, googleController, signinController, signoutController } from "../controllers/authControllers.js"

const router = express.Router()

router.post('/signup', SignupController)
router.post('/signin', signinController)
router.post('/google', googleController)
router.get('/signout', signoutController)


export default router