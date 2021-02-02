const mongoose = require('mongoose');

const connectDataBase = async () => {
	try {
		const conn = await mongoose.connect(encodeURI(process.env.MONGO_URI), {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	}
	catch (err) {
		console.error(err);
	}
};

module.exports = connectDataBase;