# store-token-in-redis
Store JWT token in redis and expire after some time


          // Enter this command in redis-cli once token generate and store in redis to expire the token
1. set token ""
2. get token
3. expire token "sec"
4. ttl token (to check time)

5. get token (once ttl 0)
