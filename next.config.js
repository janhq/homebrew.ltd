const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})


const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        formats: ['image/webp'],
        unoptimized: true,
    },
}

module.exports = withNextra(nextConfig)