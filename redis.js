                            // https://docs.redis.com/latest/rs/references/client_references/client_ioredis/
const Redis=require('ioredis')
const redis= new Redis({
    port:6379,
    host:'127.0.0.1'
})

module.exports={redis}



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
