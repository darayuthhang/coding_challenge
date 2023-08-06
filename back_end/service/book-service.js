const {BookNotFoundError} = require("../util/app-error");
const Constant = require("../util/constants");
const axios = require('axios');
const Xml = require("../util/xml");
const WebScrape = require("../util/web-scrape");
const {isSku} = require("../util/index");

class BookService{
    constructor(){
        this.xmlUtil = new Xml();
        this.webScrape = new WebScrape();
        this.result = []
      
    }
    async search({sku}){
        try {
            /**
             * @Test sku
            * https://www.christianbook.com/zoe-pencarrow-and-the-secret-lamb/dan-robertson/9781498431408/pd/431405
            * - 409251
            * - 431405
            * - 4173EB
            * - 318576
             */
            //https://www.christianbook.com/zondervan-encyclopedia-color-edition-new-edition/9780310876960/pd/4173EB
            const cbdProductDetailInfoTitle = '.CBD-ProductDetailInfo .CBD-ProductDetailTitle';
            const cbdProductDetailInfoAuthor = '.CBD-ProductDetailInfo .CBD-ProductDetailAuthor a';
            const cbdProductDetailPriceBoxHtml = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionPrice span"
            const cbdProductDetailActionRetail = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionRetail del strike"
            
            const response = await axios.get(Constant.CHRISTIAN_BOOK_URL);
            let parseData = await this.xmlUtil.parseXmlData(response?.data);
            const urlList = parseData?.urlset?.url;

            for(let data of urlList){
                const productUrl = data?.loc[0];
                if (isSku(productUrl, sku)) {
                    let productInfo = await this.webScrape.scrapeUrl(
                        productUrl,
                        cbdProductDetailInfoTitle,
                        cbdProductDetailInfoAuthor,
                        cbdProductDetailPriceBoxHtml,
                        cbdProductDetailActionRetail
                    )
                    this.result.push(productInfo);
                }
            }
            if(this.result.length <= 0){
                throw new Error("Book not found.");
            }
            
            return this.result;
        } catch (error) {
            throw new BookNotFoundError(error);
        }
    }
}
module.exports = BookService;
