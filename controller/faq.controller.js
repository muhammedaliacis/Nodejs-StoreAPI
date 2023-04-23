import { Faq } from "../models/FaqModel.js";


export const getFaq = async (req, res) => {
	try {
		const data = await Faq.find({});
		res.status(200).json({ data });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });

	}
};

export const createFaq = async (req, res) => {
	try {
		const data = await Faq.create(req.body);
		res.status(201).json({succeed: true, data})
	}
	catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });

	}
}

export const deleteFaq = async (req, res) => {
	try {
		await Faq.deleteOne(req.params)
		res.status(201).json({succeed: true, message: "Silindi. "})
	}
	catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: err });
	}
}
