import mongoose from "mongoose";

const { Schema } = mongoose;

const faqModel = new Schema({
	question: { type: String, required: true, trim: true },
	answer: { type: String, required: true, trim: true },
	hidden: Boolean
});

export const Faq = mongoose.model("Faq", faqModel)

