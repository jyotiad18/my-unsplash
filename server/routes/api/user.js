const express = require('express');
const { checkUserPassword } = require('../../controllers/user');
const router = express.Router({ mergeParams: true });

router.route('/:password').get(checkUserPassword);

module.exports = router;