const withUrl = (handler) => {
    return async (context) => {
      const { req } = context;
      const { host } = req.headers;
  
      let protocol = "http";
      if (req.headers["x-forwarded-proto"] && !host.includes("localhost")) {
        protocol = "https";
      } else if (req.headers.referrer) {
        protocol = req.headers.referrer.split(":")[0];
      }
      const url = `${protocol}://${host}`;
      req.url = url;
      return handler(context);
    };
  };
  export default withUrl;