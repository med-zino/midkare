/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    generateStaticParams: true,
    
  }
  
  module.exports = nextConfig