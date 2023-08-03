const centralErrorHandler = (error, req, res, next) => {

    if (error instanceof BookNotFoundError) {
        return res.status(error.status).json({ success: false, error: error.message });
    }
    // For other types of errors, you can provide a generic error message
    console.error(err.stack);
    return res.status(500).json({ success: false, error: 'Something went wrong' });
}
module.exports = {
    centralErrorHandler
}
