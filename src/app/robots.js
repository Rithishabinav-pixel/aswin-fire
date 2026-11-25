export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you/"],
      },
    ],
    sitemap: "https://www.aswinfire.in/sitemap.xml",
  };
}
