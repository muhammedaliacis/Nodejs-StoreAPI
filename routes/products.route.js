import express from "express";
import {
	getProducts,
	createProducts, deleteProduct, showProduct, editProduct
} from "../controller/products.controller.js";
import {authToken} from "../middleware/auth.middleware.js";
import multer from "multer";


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}
})

const upload = multer({ storage: storage })

export const productsRoute = express.Router({ mergeParams: true });
productsRoute.route('/')
	.get(getProducts).post(upload.single('image'),createProducts);

 productsRoute.route('/:_id')
	 .get(showProduct).delete(deleteProduct).patch(upload.single('image'),editProduct)

