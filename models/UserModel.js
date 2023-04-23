import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true, unique: true },
	password: { type: String, required: true, trim: true },
	role: {
		type: String,
		enum: ['admin', 'moderator', 'user'],
		default: 'user'
	},
	createdDate: { type: Date, default: Date.now },
	hidden: Boolean
});

export const User = mongoose.model("User", userSchema)

