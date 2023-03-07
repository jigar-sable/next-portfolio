/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com','firebasestorage.googleapis.com', 'jigarsable.netlify.app', 'img.icons8.com', 'raw.githubusercontent.com', 'em-content.zobj.net', 'i.imgur.com']
  }
}

module.exports = nextConfig
