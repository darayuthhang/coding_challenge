const {
    BookNotFoundError,
    XmlNotFoundError,
    WebScrapeFoundError} = require("../util/app-error")
const centralErrorHandler = (error, req, res, next) => {
    if(error instanceof BookNotFoundError ||
        error instanceof XmlNotFoundError ||
        error instanceof WebScrapeFoundError){
        return res.status(error?.statusCode).json({ success: false, error: error.message });
    }
    return res.status(error?.statusCode || 500).json({ success: false, error: 'Something went wrong' });
}
module.exports = {
    centralErrorHandler
}
