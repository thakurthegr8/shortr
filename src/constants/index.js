export const DOMAIN = "shortr.in/";

export const LOGOTEXT = "🔥Shortr";

export const DEFAULT_BANNER =
  "https://raw.githubusercontent.com/thakurthegr8/linkify/main/public/shortr-ogimage.png";

export const DEFAULT_DESCRIPTION =
  "Join and link to everything you create, share and sell online. All from the one bio link.";

export const DEFAULT_METADATA = [
  { property: "og:title", content: LOGOTEXT },
  {
    property: "og:image",
    content: DEFAULT_BANNER,
  },
  {
    property: "description",
    content: DEFAULT_DESCRIPTION,
  },
];
