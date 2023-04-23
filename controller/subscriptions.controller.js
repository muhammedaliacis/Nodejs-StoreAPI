import conn from "../utils/connection.js";
import { Subscription } from "../models/SubscriptionModel.js";



export const getSubscriptions = async (req, res) => {
	try {

	const data = await Subscription.find({});
	res.status(200).json({data});
	}catch (err){
		console.log(err)
		res.status(500).json({error: true, err})
	}
}
export const postSubscriptions = async (req, res) => {
	try {
		const data = await Subscription.create(req.body)
		res.status(201).json({succeed: true, data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
};
