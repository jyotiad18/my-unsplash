const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const connectDB = require('./server/config/dbconfig');

dotenv.config({ path: './server/config/config.env' });

connectDB();

const app = express();
app.use(express.json());
app.use(helmet() );
app.use(cors());
app.use(xss());
app.use(hpp());

app.use('/api/users', require('./server/routes/api/user'));
app.use('/api/pictures', require('./server/routes/api/picture'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});

}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));