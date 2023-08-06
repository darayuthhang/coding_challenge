const axios = require('axios');
const cheerio = require('cheerio');
const { WebScrapeFoundError } = require("./app-error");
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
        cbdProductDetailActionRetail,
        cbdProductImage
    ){
        try {
            const response = await axios.get(url);
            const html = response.data;
            const $ = cheerio.load(html);
            const title = $(cbdProductDetailInfoTitle).text();
            const author = $(cbdProductDetailInfoAuthor).text();
            const detailPriceActionAfterDisCount = $(cbdProductDetailPriceBoxHtml).contents();
            const detialPriceActionRetail = $(cbdProductDetailActionRetail).text();
            const productImage = $(cbdProductImage);
            return {
                author,
                title,
                productImage: "https:" + productImage.attr('src'),
                detailPriceActionRetail:detialPriceActionRetail?.trim(),
                detailPriceActionAfterDisCount: detailPriceActionAfterDisCount['1']?.data,
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new WebScrapeFoundError(error);
        }
    }
}
module.exports = WebScrape
