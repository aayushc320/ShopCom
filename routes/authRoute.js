import express from "express";
import {forgotPasswordController, loginController, registerController, testConttroller, updateProfileController} from '../controllers/authController.js'
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router()
//register
router.post('/register', registerController)
//login
router.post('/login', loginController)

router.post('/forgot-password', forgotPasswordController)
//test
router.get('/test', requireSignin, isAdmin, testConttroller)
//protected route
router.get('/user-auth', requireSignin, (req,res)=>{
    res.status(200).send({ok:true})
})
//protected admin route
router.get('/admin-auth', requireSignin, isAdmin, (req,res)=>{
    res.status(200).send({ok:true})
})

//update profile
router.put('/profile', requireSignin, updateProfileController)

export default router;