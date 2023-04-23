import { Category } from "../models/CategoryModel.js";
import { Product } from "../models/ProductModel.js";


export const getCategories = async (req, res) => {
	try {
		const data = await Category.find();
		res.status(200).json(data);
	}catch (err) {
		console.log(err);
		res.status(500).json({error:true, err})
	}
}

export const createCategories = async (req, res) => {
	try {
		const data = await Category.create(req.body);
		res.status(201).json({succeed: true, data});
	}catch (err) {
		console.log(err);
		res.status(500).json({error:true, err})
	}

}

export const showCategories = async (req, res) => {
	try {
		const data = await Category.find(req.params);
		res.status(200).json({data});
	}catch (err) {
		console.log(err);
		res.status(500).json({error:true, err})
	}
}
export const deleteCategories = async (req, res) => {
	try {
		await Category.deleteOne(req.params);
		res.status(201).json({succeed: true, message: "Categori Başarıyla Silindi."});
	}catch (err) {
		console.log(err);
		res.status(500).json({error:true, err})
	}

}
