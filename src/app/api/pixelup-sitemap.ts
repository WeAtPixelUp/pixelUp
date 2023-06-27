const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (
  req: { headers: { host: any } },
  res: {
    writeHead: (arg0: number, arg1: { "Content-Type": string }) => void;
    end: (arg0: any) => void;
  }
) => {
  // An array with your links
  const links = [
    {
      url: "/services/",
      changefreq: "daily",
      priority: 0.3,
    },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({
    hostname: `https://${req.headers.host}`,
  });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: { toString: () => any }) => data.toString());

  res.end(xmlString);
};
