import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next) => {
    try {
        const {success} =  await ratelimit.limit("my-limit-key")      // my-limit-key is just a variable, insted of this we can use userID to rate limit specific user 
         
        
        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later",
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }

};

export default rateLimiter;