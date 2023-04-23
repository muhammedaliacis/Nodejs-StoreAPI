import conn from "../utils/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		const data = await db("users").where({ username });
		if (await bcrypt.compare(password, data?.[0]?.password)) {
			res.json({ data,
				token: createToken(data?.[0]?.id)
			});
		} else {
			res.status(401).json("Girdiğiniz şifre veya kullanıcı ismi yanlış");
		}
	} catch (err){
		res.status(401).json("Girdiğinis şifre veya kullanıcı ismi yanlış")
	}

};

export const register = async (req, res) => {
	try {
		let { username, name, surname, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(hashedPassword);
		await db("users").insert({ username, name, surname, email, password: hashedPassword });
		console.log(password);
		res.json({ username, name, surname, email, hashedPassword });
	} catch (err) {
		console.log(err);
		res.status(501).json({ err });
	}
};

const createToken = (userId) => {
	return jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "1d"
	});
};
