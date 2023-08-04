const axios = require('axios');
const cheerio = require('cheerio');
class WebScrape{
    /**
     * 
     * @param {*} url 
     * @param {*} cbdProductDetailInfoTitle - contain html title
     * @param {*} cbdProductDetailInfoAuthor - contain html author 
     * @param {*} cbdProductDetailPriceBoxHtml - contain html price after discount
     * @param {*} cbdProductDetailActionRetail - contain html retail price
     * @returns { author, title, detialPriceActionRetail, detailPriceActionAfterDisCount}
     */
    async scrapeUrl(
        url,
        cbdProductDetailInfoTitle,
        cbdProductDetailInfoAuthor,
        cbdProductDetailPriceBoxHtml,
        cbdProductDetailActionRetail
    ){
        try {
            const response = await axios.get(url);
            const html = response.data;
            const $ = cheerio.load(html);
            const title = $(cbdProductDetailInfoTitle).text();
            const author = $(cbdProductDetailInfoAuthor).text();
            const detailPriceActionAfterDisCount = $(cbdProductDetailPriceBoxHtml).contents();
            const detialPriceActionRetail = $(cbdProductDetailActionRetail).text();
           
            return {
                author,
                title,
                detialPriceActionRetail:detialPriceActionRetail?.trim(),
                detailPriceActionAfterDisCount: detailPriceActionAfterDisCount['1']?.data
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }
}
module.exports = WebScrape
