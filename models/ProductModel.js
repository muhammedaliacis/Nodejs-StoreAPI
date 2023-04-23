import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	image: {
		fieldname: String,
		originalname: String,
		encoding: String,
		mimetype: String,
		destination: String,
		filename: String,
		path: String,
		fullPath: String,
		created_at: { type: Date, default: Date.now }
	},
	price: { type: Number, required: true, trim: true },
	stock: { type: Number, default: 0, trim: true },
	discounted_price: { type: Number, trim: true },
	attributes: [{attributeName: String, attributeValue: String}],
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category"
	},
	brand: {type: String, trim: true},
	type: { type: String, enum: ["Konsol", "Oyun", "Kol", "Diğer"], default: "Diğer", trim: true },
	special_category: { type: String, enum: ["top10", "featured", "new", "discounted", "other"], default: "other", trim: true },
	status: { type: String, enum: ["Sıfır", "İkinci El", "Teşhir", "Diğer"], default: "Sıfır", trim: true },
	trendyol_link: { type: String, trim: true },
	n11: { type: String, trim: true },
	hepsiburada: { type: String, trim: true },
	createdDate: { type: Date, default: Date.now },
	hidden: Boolean
});

export const Product = mongoose.model("Product", productSchema, "products");

