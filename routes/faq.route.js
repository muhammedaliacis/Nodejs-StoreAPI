import express from "express";
import { deleteFaq, getFaq, createFaq } from "../controller/faq.controller.js";


export const faqRoute = express.Router({ mergeParams: true });

faqRoute.route('/').get(getFaq).post(createFaq)
faqRoute.route('/:_id').delete(deleteFaq)
