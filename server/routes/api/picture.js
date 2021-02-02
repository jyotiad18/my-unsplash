const express = require('express');
const { getPictures, addPicture, removePicture, getPicturesByTitle} = require('../../controllers/picture');

const router = express.Router({ mergeParams: true });
router.route('/')
	.get(getPictures)
	.post(addPicture);

router.route('/:id').delete(removePicture);
router.route('/:title').get(getPicturesByTitle);

module.exports = router;