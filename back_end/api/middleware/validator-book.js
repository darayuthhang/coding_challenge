const { validationResult, param } = require('express-validator');
const validationSkuRules = () => {
    return [
        param('sku').notEmpty().withMessage('Sku not found').trim(),
        //HH:mm
    ]
}
/**
 * 
 * @param {*} req - contain JSON data
 * @param {*} res - return status code 422 and array of data
 * @param {*} next - proceed to api route 
 * @returns - next or res
 */
const validateBookData = (req, res, next) => {
    const errors = validationResult(req);
    //there is no error.
    if (errors.isEmpty()) {
        return next();
    } else {
        logger.error(errors)
    }
    return res.status(422).json({
        errors: errors.array(),
    });
};

module.exports = {
    validationSkuRules,
    validateBookData
};
