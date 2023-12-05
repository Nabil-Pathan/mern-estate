import express from "express"
import { createListingController, deleteListingController, getListingController, getListings, updateListingController } from "../controllers/listingController.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.post('/create',verifyToken, createListingController)
router.delete('/delete/:id',verifyToken,deleteListingController)
router.post('/update/:id',verifyToken,updateListingController)
router.get('/get/:id',getListingController)
router.get('/get', getListings)
export default router
