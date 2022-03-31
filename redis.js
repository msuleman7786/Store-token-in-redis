                            // https://docs.redis.com/latest/rs/references/client_references/client_nodejs/

// const {createClient} = require("redis");
// const client = createClient();

// // Redis Connection
// async function redisConnect() {
//     let result = await client.on("error", ()=> {
//         if(error) throw err
//     })
//     return await result.connect()
// }

// module.exports = redisConnect;



const Redis=require('ioredis')
const redis= new Redis({
    port:6379,
    host:'127.0.0.1'
})

module.exports={redis}



            // Enter this command in redis-cli once token generate and store in redis to expire the token
// set token ""
// get token
// expire token "sec"
// ttl token (to check time)

// get token (once ttl 0)