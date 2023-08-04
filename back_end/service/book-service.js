const {BookNotFoundError} = require("../util/app-error");
const Constant = require("../util/constants");
const axios = require('axios');
const Xml = require("../util/xml");


class BookService{
    constructor(){
        this.xmlUtil = new Xml();
    }
    async search({sku}){
        try {
            //const response = await axios.get(Constant.CHRISTIAN_BOOK_URL);
            const cheerio = require('cheerio');
            const cbdProductDetailInfoTitle = '.CBD-ProductDetailInfo .CBD-ProductDetailTitle';
            const cbdProductDetailInfoAuthor = '.CBD-ProductDetailInfo .CBD-ProductDetailAuthor a';
            const cbdProductDetailPriceBoxHtml = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionPrice span"
            const cbdProductDetailActionRetail = ".CBD-ProductDetailPriceBox .CBD-ProductDetailActionRetail del strike"
            async function scrapeProductInfo(url) {
                try {
                    const response = await axios.get(url);
                    const html = response.data;
                    const $ = cheerio.load(html);
                    const title = $(cbdProductDetailInfoTitle).text();
                    const author = $(cbdProductDetailInfoAuthor).text();
                    //price there is price action and price retail
                    const detailPriceActionAfterDisCount = $(cbdProductDetailPriceBoxHtml).contents();
                    const detialPriceActionRetail = $(cbdProductDetailActionRetail).text();
                    //if there is no discount priceaction is 
                    return { 
                        author, 
                        title, 
                        detialPriceActionRetail,
                        detailPriceActionAfterDisCount: detailPriceActionAfterDisCount['1']?.data };
                } catch (error) {
                    console.error('Error fetching data:', error);
                    return null;
                }
            }

            const productUrl = 'https://www.christianbook.com/zwingli-a-reformed-theologian/jaques-courvoisier/9781498297912/pd/297912';
            scrapeProductInfo(productUrl).then((productInfo) => {
                console.log(productInfo);
            });

            // let parseData = await this.xmlUtil.parseXmlData(response?.data);
            // const url = parseData?.urlset?.url;
         
            /**
             * sku
             * title,
             * author,
             * price
             * 
             *
            /**
             * @some book does not have title
             * 'https://www.christianbook.com/
             * 101-great-american-poems/
             * american-poetry/
             * 9780486401584/
             * pd/
             * 401584'
                'https://www.christianbook.com/
                101-dalmatians-ebook-dodie-smith/
                9781101153642/
                pd/
                47060EB'

                [
                'https:',
                '',
                'www.christianbook.com',
                '02-ebook-adrian-plass',
                '9781780780597',
                'pd',
                '36559EB'
                ]
             */


            //change loc sku to array
            // and return with original data
            /**
             * [{
             *      loc:[]
             *      
             * }]
             * changefreq: [ 'daily' ],
                priority: [ '0.8' ]
                changefreq, and priority are just site map
                so it does not important here
                sitemap help to improve google index
                crawling
             */
            // let result = []
            // for(let data of url){
            //     let locTitle = '',
            //         locSku = ''
           
            //     const locData = url[0]?.loc[0].split('/');
            
            //     if(locData.length > 0){
             
            //         const locSku = locData[locData.length - 1];
            //         const title = locData[3]
            //         console.log(title);
                  
            //     }
           
            // }

            // console.log(url);
            // parser.parseString(xmlData, (err, result) => {
            //     if (err) {
            //         console.error('Error parsing XML:', err);
            //         return res.status(500).json({ error: 'Failed to parse XML data' });
            //     }
            //     /**
            //      * {
            //         loc: [
            //         'https://www.christianbook.com/02-ebook-adrian-plass/9781780780597/pd/36559EB'
            //         ],
            //         changefreq: [ 'daily' ],
            //         priority: [ '0.8' ]
            //         },
            //      */
       
            //     // Assuming the XML structure, adjust the paths based on the actual structure
            //     const url = result?.urlset?.url;
            //     // console.log(url[0]?.loc[0].split('/'));
            //     const products = url?.map((url) => ({ sku: url?.loc[0].split('/') }))
            //     console.log(products);
            //     // const products = .map((url) => ({
            //     //     sku: url.loc[0],
            //     //     title: url.title[0],
            //     //     author: url.author[0],
            //     //     price: url.price[0],
            //     // }));
            //     // console.log(products);
            //     // const product = products.find((product) => product.sku === sku);
            //     // if (!product) {
            //     //     return res.status(404).json({ error: 'Product not found' });
            //     // }
            //     // console.log(product);

            //     // return product;
            // });
        } catch (error) {
            throw new BookNotFoundError(error);
        }
    }
}
module.exports = BookService;
