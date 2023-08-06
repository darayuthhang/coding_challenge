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
    }
    async search({sku}){
        try {     
            const cbdProductDetailInfoTitle = '.CBD-ProductDetailInfo .CBD-ProductDetailTitle';
            const cbdProductDetailInfoAuthor = '.CBD-ProductDetailInfo .CBD-ProductDetailAuthor a';
            const cbdProductDetailPriceBoxHtml = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionPrice span"
            const cbdProductDetailActionRetail = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionRetail del strike"
            const cbdProductImage = '.CBD-ProductImageContainer .CBD-ProductDetailImageWrap img'
            
            const response = await axios.get(Constant.CHRISTIAN_BOOK_URL);
            let parseData = await this.xmlUtil.parseXmlData(response?.data);
            const urlList = parseData?.urlset?.url;
            
            let result = []
            for(let data of urlList){
                const productUrl = data?.loc[0];
                if (isSku(productUrl, sku)) {
                    let productInfo = await this.webScrape.scrapeUrl(
                        productUrl,
                        cbdProductDetailInfoTitle,
                        cbdProductDetailInfoAuthor,
                        cbdProductDetailPriceBoxHtml,
                        cbdProductDetailActionRetail,
                        cbdProductImage
                    )
                    result.push(productInfo);
                }
            }
            if(result.length <= 0){
                throw new Error("Book not found.");
            }
            return result;
        } catch (error) {
            throw new BookNotFoundError(error);
        }
    }
}
module.exports = BookService;
