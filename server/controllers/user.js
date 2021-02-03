const { setResponse }= require("../utils/ErrorResponse.js");
const User = require('../models/User');

// @desc      Get single user by password
// @route     GET /api/v1/auth/users/:password
// @access    Public
exports.checkUserPassword = async (req, res, next) => {
	const user = await User.findOne({ 'password': req.params.password });
	
	if (!user) {
		setResponse(res, 422, null, 'Password is not valid.');		
	} else {
		setResponse(res, 200, user);			
	}
}

