//Utility functions
module.exports.isSku = (productUrl, sku) => {
    return productUrl && productUrl.includes(sku);
};
