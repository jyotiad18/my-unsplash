const { setResponse }= require("../utils/ErrorResponse.js");
const Picture = require("../models/Picture");

// @desc      Get all Pictures
// @route     GET /api/picture
// @access    Public
exports.getPictures = async (req, res, next) => {
	const pictures = await Picture.find().sort({ createdAt: -1 });
	setResponse(res, 200, pictures || []);	
}

// @desc      Get Pictures by title
// @route     GET /api/picture/:title
// @access    Public
exports.getPicturesByTitle = async (req, res, next) => {
	
const pictures = await Picture.find({ title: /^req.params.title/ }).sort({ createdAt: -1 });
	setResponse(res, 200, pictures || []);	
}

// @desc      Post Picture
// @route     POST /api/picture
// @access    Public
exports.addPicture = async (req, res, next) => {
	console.log('heree');
	if (!req.body.title) {
		setResponse(res, 422, null, 'Title should not empty.');		
	}
	if (!req.body.url) {
		setResponse(res, 422, null, 'Picture url should not empty.');		
	}
	const picture = await Picture.create(req.body);
	setResponse(res, 201, picture);		
}


// @desc      Delete Picture
// @route     DELETE /api/picture/:id
// @access    Public
exports.removePicture = async (req, res, next) => {
	const pictureId = req.params.id;
	if (!pictureId) {
		setResponse(res, 422, null, 'Id should not empty.');			
	}		
	await Picture.findByIdAndDelete(req.params.id);
	setResponse(res, 200, pictureId);
}
