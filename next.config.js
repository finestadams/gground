/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BOOKS_API: process.env.BOOKS_API
  },
}

module.exports = nextConfig
