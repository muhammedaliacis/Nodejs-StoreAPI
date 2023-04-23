import express, * as bodyParser from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import conn from './utils/connection.js'
import multer from 'multer'
import path from "path";
import { fileURLToPath } from 'url';

export const app = express();
conn();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const port = 3333;
//setup app & its routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
	origin: ['http://localhost:3000'],
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use('/',router);

//start http server
app.listen(port, () => {
	console.log("App is working!", port);
});

