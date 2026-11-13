import ratelimit from "../config/upstash.js";
export const ratelimiter=async(req,res,next)=>{
try {
    
    const user="dagim";
    const{success }= await ratelimit.limit(user);
if (!success ) {
    return res.status(429).json({message:"too many request"});

}
    next();
} catch (error) {
    console.error("Rate limit error:", error);
    next(error)
}
}