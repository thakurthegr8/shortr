export const generateQueryString = (payload)=>{
    if(!payload) return null;
    let result = Object.keys(payload).map(item=>`${item}=${payload[item]}`).join("&");
    return result;
}