exports.setResponse = (res, statusCode, data = null, message = null) => {
	return res.status(statusCode)
		.json({
			status: message ? "error" :  "success",
			data: data,
			message: message
		});
}
