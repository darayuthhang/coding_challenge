const Constant = require('../util/constants');
const BookService = require("../service/book-service");
const { validationSkuRules, validateBookData } = require("./middleware/validator-book");
module.exports = (app) => {
    const {API_VERSION} = Constant;
    const bookService = new BookService();
    /**
     * GET - search /api/v1/search/:sku
     */
    app.get(`${API_VERSION}/search/:sku`, 
        validationSkuRules, 
        validateBookData, 
        async (req, res, next) => {
        try {
            await bookService.search(req.params);
        } catch (error) {
            next(error);
        }
    });

}
