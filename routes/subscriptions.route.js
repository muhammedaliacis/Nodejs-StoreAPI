import express from "express";
import { getSubscriptions, postSubscriptions } from "../controller/subscriptions.controller.js";
import { authToken } from "../middleware/auth.middleware.js";
export const subscriptionsRoute = express.Router({ mergeParams: true });

subscriptionsRoute.route('/')
	.get(getSubscriptions).post(postSubscriptions);
