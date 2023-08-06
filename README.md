# coding_challenge

# ex URL 
    * https://www.christianbook.com/zoe-pencarrow-and-the-secret-lamb/dan-robertson/9781498431408/pd/431405 

# skus for testing: 
    * 409251
    * 431405
    * 4173EB

# api:
    * Request
        * GET - search /api/v1/search/?sku=4173EB 
    * Response
        {
            "success": true,
            "data": [
                {
                    "author": "Dan Robertson",
                    "title": "Zoe Pencarrow and the Falling Star",
                    "detialPriceActionRetail": "",
                    "detailPriceActionAfterDisCount": "$12.49",
                    "productImage": "//g.christianbook.com/dg/product/ingram/f400/409251.jpg",
                }
            ]
        }
       



