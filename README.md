# coding_challenge
    Web app that allow users to search for title, author, price, image base on sku

# ex URL 
     https://www.christianbook.com/zoe-pencarrow-and-the-secret-lamb/dan-robertson/9781498431408/pd/431405 

# skus for testing: 
    * 409251
    * 431405
    * 4173EB

# api:
    Request
        GET - search /api/v1/search/?sku=4173EB 
    Response
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
# Q&A
    How does your system work?
    How could you scale your system to search across all sitemap files?
    How will your system perform with 100 users ?10,000 users? 1,000,000 users?
    What documentation, websites, papers, etc did you consult in doing this assignment?
    How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
    If you were to critique your code, what would you have to say about it?
    How can you change your system be updated to support simple keyword searches?


