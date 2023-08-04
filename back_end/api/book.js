const Constant = require('../util/constants');
const BookService = require("../service/book-service");
const { validationSkuRules, validateBookData } = require("./middleware/validator-book");
module.exports = (app) => {
    const {API_VERSION} = Constant;
    const bookService = new BookService();
    /**
     * GET - search /api/v1/search/?sku=4173EB
     */
    app.get(`${API_VERSION}/search`, 
        validationSkuRules(), 
        validateBookData, 
        async (req, res, next) => {
        try {
            let productInfoData = await bookService.search(req.query);
            return res.status(200).json({success: true, data:productInfoData})
        } catch (error) {
            next(error);
        }
    });
    

}
