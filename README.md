# Coding_challenge
    Web app that allow users to search for title, author, price, image base on sku

# Ex URL 
     https://www.christianbook.com/zoe-pencarrow-and-the-secret-lamb/dan-robertson/9781498431408/pd/431405 

# Skus for testing: 
    * 409251
    * 431405
    * 4173EB

# Api:
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

# Run:
    bash build.sh
    bash run.sh

# Q&A
    How does your system work?
        - Allow users to search for title, author, price, image based on sku
    How could you scale your system to search across all sitemap files?
        - Add more servers, and then add load balancing to evenly distribute search
          requests among the servers 
    How will your system perform with 100 users ?10,000 users? 1,000,000 users?
        Since i do not have much experienced with big system, i would like to use 
        Back of the Envlope to make assumption about the system and provide solution
        as much as i understand the system design:

        For 100 users:
            - assumption:
                Query per second (QPS)
                    * 100 montlhy active users
                    * User search for sku 2 times per day on average
                    * There are 24 hours
                    * 3600 second in an hour
            - Estimation:
                Query per second (QPS)
                    * ((100 users * search for sku 2 times per day) / (24 hour * 3600 seconds))
                    *  Average QPS = 200 / (24 * 3600) =  0.00231481
                    *  Peak QPS = Average QPS * 2 = 0.00462962
            solution: I think the system is working fine handle only 100 users

        For 10000 users:
            - assumption:
                Query per second (QPS)
                    * 10000 montlhy active users
                    * User search for sku 2 times per day on average
                    * There are 24 hours
                    * 3600 second in an hour
            - Estimation:
                Query per second (QPS)
                    * ((10000 users * search for sku 2 times per day) / (24 hour * 3600 seconds))
                    * Average QPS = 20000 / (24 * 3600) =  0.23148
                    * Peak QPS = Average QPS * 2 = 0.46296
            solution: I think there will be high concurrent request traffic, i suggest we scale 
                      it horizontally by adding more server, and then add load balancer to evenly distribute
                      traffic 

        For 1,000,000 users:
            - assumption:
                Query per second (QPS)
                    * 1,000,000 montlhy active users
                    * User search for sku 2 times per day on average
                    * There are 24 hours
                    * 3600 second in an hour
            - Estimation:
                Query per second (QPS)
                    * ((1,000,000 users * search for sku 2 times per day) / (24 hour * 3600 seconds))
                    * Average QPS = 2,000,000 / (24 * 3600) ≈ 23.148
                    * Peak QPS = Average QPS * 2 = 46.296
            solution: I think there will be hug concurrent request traffic, i suggest we scale 
                    it horizontally by adding more server, and then add load balancer to evenly distribute
                    traffic. Then, we need to implement Master and slave database to increase High avaiablity 
                    of databse and data redundancy(if the master fail, the child can be promoted to master).
                    Also, implement caching to improve the response time.Next, set up logging(maybe aws cloudwatch) 
                    to help identify potential bottleneck, or alert of potential issue that happen to server
                       
    What documentation, websites, papers, etc did you consult in doing this assignment?
        - Google and System design book that i read
    How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
        - 26 hours on this exercise, 
        - if i had unlimted more time to spend on this, I would suggest the team to use:
            * Docker as it helps to avoid different version conflicts of software dependencies and library
            * Redux as it help create centralized state management for React's state
            * Redux thunk middlware as it help saparating of concern by moving all asynchronous code out of component
            * Add invalidation caching technique to back-end
            * Lastly, i will add authentication and authorization to make the app become simple full functional
              e-commerce app 
    If you were to critique your code, what would you have to say about it?
        - Well, maybe using Clean Architecture instead of monolithic:
            * to saparate of concern
            * to make codebase more maintainable and testable since Clean Architecture are divided in layers
              and each layer is independent and loosely couple from one another.
    How can you change your system be updated to support simple keyword searches?
        - Maybe load all data in cache to create key value pair look up which will improve the response
          time of the server
# Author
    Darayuth Hang
