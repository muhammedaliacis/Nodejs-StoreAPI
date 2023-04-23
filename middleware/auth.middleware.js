import jwt from "jsonwebtoken";

export const authToken = async (req, res, next) => {
	try {

	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader?.split(" ")[1]
	if (!token) {
		return res.status(401).json({succeed: false, error: 'No Token Available'})
	}
	req.user = await jwt.verify(token, process.env.JWT_SECRET)?.userId
	next()
	}catch (err) {
		return res.status(401).json({succeed: false, error: 'No Authorized'})

	}
}
