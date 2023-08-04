const {
    BookNotFoundError,
    XmlNotFoundError,
    WebScrapeFoundError} = require("../util/app-error")
const centralErrorHandler = (error, req, res, next) => {
    const isCustomError = (objectError) => {
        if (error instanceof objectError) {
            return res.status(error?.statusCode).json({ success: false, error: error.message });
        }
    }
    isCustomError(BookNotFoundError)
    isCustomError(XmlNotFoundError)
    isCustomError(WebScrapeFoundError)
    // For other types of errors, you can provide a generic error message
    return res.status(error?.statusCode || 500).json({ success: false, error: 'Something went wrong' });
}
module.exports = {
    centralErrorHandler
}
