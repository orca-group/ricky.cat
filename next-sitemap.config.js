/** @type {import('next-sitemap').IConfig} */
module.exports = {
  generateRobotsTxt: true,
  siteUrl: process.env.SITE_URL || 'https://ricky.cat',
  generateIndexSitemap: false,
};
