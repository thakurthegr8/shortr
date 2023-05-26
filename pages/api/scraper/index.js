import metaFetcher from "meta-fetcher";

const handler = async (req,res)=>{
    try {
        const result = await metaFetcher(req.body.url);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
}

export default handler;