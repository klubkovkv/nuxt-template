export default function ({ $axios, redirect, route, store, app, res, error }) {
    $axios.onRequest(config => {
        let uid = ''
        if (process.browser) {
            uid = localStorage.getItem('uid') ? JSON.parse(localStorage.getItem('uid')) : ''
        }

        $axios.setHeader('Accept', 'application/json')
        $axios.setHeader('uid', uid)
    })

    $axios.onResponse(response => {})

    $axios.onError(err => {
        const code = parseInt(err.response && err.response.status)

        if ([400, 404, 500].includes(code) && err.response.config.url.indexOf('.json') === -1) {
            let path = '/404'

            error({ statusCode: 404 })
            // redirect(path)
        }
    })
}
