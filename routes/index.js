import express from "express";
import { productsRoute } from "./products.route.js";
import { subscriptionsRoute } from "./subscriptions.route.js";
import { faqRoute } from "./faq.route.js";
import { messagesRoute } from "./messages.route.js";
import { authRoute } from "./auth.route.js";
import { usersRoute } from "./user.route.js";
import { categoriesRoute } from "./categories.route.js";
export const router = express.Router();

router.use('/users', usersRoute);
router.use('/products', productsRoute);
router.use('/subscriptions', subscriptionsRoute);
router.use('/faq', faqRoute);
router.use('/messages', messagesRoute);
router.use('/categories', categoriesRoute);
// router.use('/auth', authRoute);



