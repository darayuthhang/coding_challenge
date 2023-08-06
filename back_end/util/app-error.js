
const Constant = require("../util/constants");
const {STATUS_CODES} = Constant;
class AppError extends Error{
    constructor(message, status) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = status || STATUS_CODES.INTERNAL_ERROR;
        //include only relavant part the error.
        Error.captureStackTrace(this, this.constructor);
    }
}
class BookNotFoundError extends AppError {
    constructor(message) {
        super(message || 'No Book found.', STATUS_CODES.NOT_FOUND);
    }
}
class XmlNotFoundError extends AppError {
    constructor(message) {
        super(message || 'No Xml data found.', STATUS_CODES.NOT_FOUND);
    }
}
class WebScrapeFoundError extends AppError {
    constructor(message) {
        super(message || 'No Web data found.', STATUS_CODES.NOT_FOUND);
    }
}
module.exports = {
    BookNotFoundError,
    XmlNotFoundError,
    WebScrapeFoundError
};
