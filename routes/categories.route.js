import express from "express";
import {
	createCategories,
	deleteCategories,
	getCategories,
	showCategories
} from "../controller/categories.controller.js";


export const categoriesRoute = express.Router({ mergeParams: true });

categoriesRoute.route('/').get(getCategories).post(createCategories)
categoriesRoute.route('/:_id').delete(deleteCategories).get(showCategories)
