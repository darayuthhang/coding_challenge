//Utility functions
module.exports.isSku = (productUrl, sku) => {
    try {
        //validate to make sure it is url, if not throw error.
        const parsedUrl = new URL(productUrl); 
        const pathnameParts = parsedUrl.pathname.split('/');
        //if sku exist in url, return true else return false
        return pathnameParts.includes(sku);
    } catch (error) {
        /**
         * @description
         *  - we do not throw error here when 
         *    url does not exist
         *    in new URL because 
         *    we want to skip to next iteration
         *    if it not url
         */
        return null;
      
    }

};
