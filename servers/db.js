const mongoose = require("mongoose");
// const MONGODB_URI= 'mongodb://localhost:27017/mydatabase';

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};
	try {
		mongoose.connect(process.env.MONGO_URI, connectionParams).then(()=>{
			console.log("Connection sucess")
		}).catch((e)=>{
			console.log(`Error: ${e.message}`);
			process.exit();
		})
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
