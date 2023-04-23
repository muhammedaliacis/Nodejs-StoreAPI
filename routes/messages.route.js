import express from "express";
import { getMessages, postMessages } from "../controller/messages.controller.js";
import { authToken } from "../middleware/auth.middleware.js";

export const messagesRoute = express.Router({ mergeParams: true });

messagesRoute.route('/').get(getMessages).post(postMessages)
