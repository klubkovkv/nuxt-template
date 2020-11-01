import baseConfig from './base.config'

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    server: {
        port: baseConfig.port,
    },
    head: {
        title: 'BB',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [{ src: '~assets/scss/app.scss', lang: 'scss' }],
    styleResources: {
        scss: ['assets/scss/vars.scss', 'assets/scss/mixins.scss'],
    },
    axios: {
        baseURL: baseConfig.apiUrl,
    },
    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/style-resources', '@nuxtjs/svg-sprite', '@nuxtjs/axios'],

    extractCSS: true,
    cache: true,
    'html.minify': {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, ctx) {},

        babel: {
            plugins: [['@babel/plugin-proposal-optional-chaining']],
        },
    },
}
