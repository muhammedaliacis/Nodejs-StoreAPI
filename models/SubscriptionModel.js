import mongoose, { Schema } from "mongoose";

const subscriptionModel = new Schema({
	email : {type: String, required: true, trim: true}
})

export const Subscription = mongoose.model("Subscription", subscriptionModel)
