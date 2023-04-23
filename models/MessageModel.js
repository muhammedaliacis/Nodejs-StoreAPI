import mongoose, { Schema } from "mongoose";

const messageModel = new Schema({
	name: {type: String, required: true, trim: true},
	surname: {type: String, required: true, trim: true},
	email: {type: String, required: true, trim: true},
	subject: {type: String, required: true, trim: true},
	message: {type: String, required: true, trim: true},
})

export const Message = mongoose.model("Message", messageModel)
