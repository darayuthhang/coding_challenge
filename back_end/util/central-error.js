const {BookNotFoundError} = require("../util/app-error")
const centralErrorHandler = (error, req, res, next) => {

    if (error instanceof BookNotFoundError) {
        return res.status(error?.statusCode).json({ success: false, error: error.message });
    }
    // For other types of errors, you can provide a generic error message
    return res.status(error?.statusCode || 500).json({ success: false, error: 'Something went wrong' });
}
module.exports = {
    centralErrorHandler
}
