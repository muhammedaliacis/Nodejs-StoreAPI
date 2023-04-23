import mongoose from "mongoose";

const { Schema } = mongoose;

const categoryModel = new Schema({
	title: { type: String, required: true, trim: true, unique: true },
	hidden: Boolean
});

export const Category = mongoose.model("Category", categoryModel, "categories")

