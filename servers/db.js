const mongoose = require("mongoose");
const MONGODB_URI= 'mongodb+srv://test:yuvi@cluster0.eyscgru.mongodb.net/?retryWrites=true&w=majority';
module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(MONGODB_URI, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
