import express from "express";
import { login, register } from "../controller/auth.controller.js";


export const authRoute = express.Router({ mergeParams: true });

authRoute.route("/login").post(login)
authRoute.route("/register").post(register)
