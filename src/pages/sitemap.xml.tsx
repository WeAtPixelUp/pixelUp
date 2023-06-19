import React from 'react';
import { NextApiResponse, NextApiRequest } from 'next';

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res, req }: { res: NextApiResponse; req: NextApiRequest }) => {
  const BASE_URL = `https://${req.headers.host}`;

  // Define your website routes
  const routes = ['/', '/services'];

  // Generate the URL elements
  const urlElements = routes.map(route => {
    const url = `${BASE_URL}${route}`;
    return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  // Create the complete sitemap with the URL elements
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlElements.join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
