import express from "express";
import { createUser } from "../controller/users.controller.js";
export const usersRoute = express.Router({ mergeParams: true });

usersRoute.route('/')
	.post(createUser);
