import { User } from "../models/UserModel.js";

export const createUser = async (req, res) => {
	try {
		const user = await User.create(req.body)
		res.status(201).json({succeed: true, user})
	}catch (err) {
		console.log(err)
		res.status(400).json({err})
	}

}
