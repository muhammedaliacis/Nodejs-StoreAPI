import { Product } from "../models/ProductModel.js";
import sharp from 'sharp'
import * as fs from "fs";
export const getProducts = async (req, res) => {
	try {
		const data = await Product.find({});
		res.status(200).json({data})
	} catch (err) {
		res.status(500).res.json({ error: err });
	}

};


export const createProducts = async (req, res) => {
	try {
		const image = sharp(req.file.path)
			.toFile(`uploads/${req.file.filename}_resized.webp`, (err, info) => {
				if (err) throw err;
				console.log(info);
				fs.unlink(req.file.path, (err) => {
					if (err) throw err;
				});
			});
		const data = await Product.create({... req.body, "image" : req.file });
		res.status(200).json({succeed: true, data})
	} catch (err) {
		res.status(500).json({ error: true, message: err });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const { _id } = req.params;
		await Product.findByIdAndDelete({ _id })
		res.status(201).json({ succeed: true, message: "Ürün başarıyla silindi." });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
};


export const showProduct = async (req, res) => {
	try {
		const { _id } = req.params;
		const data = await Product.findOne({_id})
		res.status(200).json(data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
};


export const editProduct = async (req, res) => {
	try {
		const { _id } = req.params;
		if (req.file ){
		const image = sharp(req.file.path)
			.toFile(`uploads/${req.file.filename}_resized.webp`, (err, info) => {
				if (err) throw err;
				console.log(info);
				fs.unlink(req.file.path, (err) => {
					if (err) throw err;
				});
			});
		}
		const data = await Product.updateOne({_id}, {$set: {...req.body, "image" : req.file }})
		res.status(201).json({succeed: true, data})

	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
};


const username = "EBNKRpXgII5bx769AS2B";
// const password = "D3g6RU7TM3wES7gnZ0q1"
// const base64Credentials = Buffer.from(`${username}:${password}`, 'utf-8').toString('base64');
//
//
// const config = {
// 	headers:{
// 		Authorization: `Basic ${base64Credentials}`,
// 		"User-Agent": "596210 - SelfIntegration",
// 	}
// };
// const {page} = req.query;
// console.log(page);
// const data2 = await axios.get(
// 	`https://api.trendyol.com/sapigw/suppliers/596210/products?page=${page}&size=50&approved=True`, config).then(res => res.data)
// await data2?.content?.map(async (product) => {
// 	const image = product?.images?.[0]?.url;
// 	const title= product?.title;
// 	const description = product?.description;
// 	const brand = product?.brand;
// 	const price = product?.salePrice;
// 	const attributes = product?.attributes;
// 	const file = await fs.createWriteStream(`uploads/${product?.productCode}.jpg`);
//
// 	https.get(image, async (response) => {
// 	 await	response.pipe(file);
// 	});
//
//
// 	await Product.create({title, description, brand, price, "image" : {fullPath: image}, "stock" : 1, attributes });
// })
