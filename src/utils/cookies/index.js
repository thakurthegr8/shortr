export const getCookies = (cookies, target = "cookie") => {
    if (cookies === undefined) throw new Error("invalid cookie string");
    if (cookies.length === 0) throw new Error("no cookies");
    const splitBySemicolon = cookies.split(";");
    if (splitBySemicolon.length === 0) throw new Error("Invalid cookies");
    const removeEmptySpaces = splitBySemicolon.map((item) => item.trim());
    let cookieRes = {};
    removeEmptySpaces.map((item) => {
      const pair = item.split("=");
      const key = pair[0];
      const value = pair[1];
      cookieRes = { ...cookieRes, [key]: value };
    });
    if (!cookieRes?.[target]) throw new Error(`no cookie ${target} exists`);
    return cookieRes?.[target];
  };