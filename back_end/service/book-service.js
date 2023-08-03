const BookNotFoundError = require("../util/app-error");
const Constant = require("../util/constants");
class BookService{
    async search({sku}){
        // const { sku } = req.params;

        try {
            // const response = await axios.get(XML_URL);
            // const xmlData = response.data;
            // parser.parseString(xmlData, (err, result) => {
            //     if (err) {
            //         console.error('Error parsing XML:', err);
            //         return res.status(500).json({ error: 'Failed to parse XML data' });
            //     }

            //     // Assuming the XML structure, adjust the paths based on the actual structure
            //     const products = result.urlset.url.map((url) => ({
            //         sku: url.loc[0].split('/').pop(),
            //         title: url.title[0],
            //         author: url.author[0],
            //         price: url.price[0],
            //     }));

            //     const product = products.find((product) => product.sku === sku);
            //     if (!product) {
            //         return res.status(404).json({ error: 'Product not found' });
            //     }

            //     return res.json(product);
            // });
        } catch (error) {
            throw new BookNotFoundError(error);
        }
    }
}
module.exports = BookService;
