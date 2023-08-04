const {BookNotFoundError} = require("../util/app-error");
const Constant = require("../util/constants");
const axios = require('axios');
const Xml = require("../util/xml");
const WebScrape = require("../util/web-scrape");


class BookService{
    constructor(){
        this.xmlUtil = new Xml();
        this.webScrape = new WebScrape();
    }
    async search({sku}){
        try {
            const response = await axios.get(Constant.CHRISTIAN_BOOK_URL);
            let parseData = await this.xmlUtil.parseXmlData(response?.data);
            const urlList = parseData?.urlset?.url;
            //https://www.christianbook.com/zondervan-encyclopedia-color-edition-new-edition/9780310876960/pd/4173EB
            //for(let data of urlList){
                // const productUrl = data?.loc[0];
              
                /**
                 * @Todo 
                 * - when user send sku, i need to search url base on sku
                 */
                // const cbdProductDetailInfoTitle = '.CBD-ProductDetailInfo .CBD-ProductDetailTitle';
                // const cbdProductDetailInfoAuthor = '.CBD-ProductDetailInfo .CBD-ProductDetailAuthor a';
                // const cbdProductDetailPriceBoxHtml = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionPrice span"
                // const cbdProductDetailActionRetail = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionRetail del strike"
                // let productInfo = await this.webScrape.scrapeUrl(
                //     productUrl,
                //     cbdProductDetailInfoTitle,
                //     cbdProductDetailInfoAuthor,
                //     cbdProductDetailPriceBoxHtml,
                //     cbdProductDetailActionRetail
                // )
                // console.log(productInfo);
            //}
         
        } catch (error) {
            throw new BookNotFoundError(error);
        }
    }
}
module.exports = BookService;
