# store-token-in-redis
Store JWT token in redis and expire after some time


          // Enter this command in redis-cli once token generate and store in redis to expire the token
// set token ""
// get token
// expire token "sec"
// ttl token (to check time)

// get token (once ttl 0)
