const mongoose = require("mongoose");
const MONGODB_URI= 'mongodb://localhost:27017/mydatabase';

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(MONGODB_URI, connectionParams).then(()=>{
			console.log("Connection sucess")
		}).catch((e)=>{
console.log("n")
		})
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
