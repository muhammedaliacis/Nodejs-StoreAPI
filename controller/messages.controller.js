import { Message } from "../models/MessageModel.js";


export const getMessages = async (req, res) => {
	try {
		const data = Message.find({});
		res.status(200).json({ data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
};

export const postMessages = async (req, res) => {
	try {
		const data = Message.create(req.body);
		res.status(201).json({succeed: true, data})
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
}
