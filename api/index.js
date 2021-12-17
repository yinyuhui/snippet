import { getRequest, postJsonRequest } from '@/utils/http'
const modules = require.context('.', false, /\.js$/)

const baseUrl = process.env.VUE_APP_URL_API

const servers = {
    control: `${baseUrl}/vpi/control`,
    none: `${baseUrl}`,
}

const methodObj = {
    get: getRequest,
    post: postJsonRequest,
}

const api = {}

const formatApi = obj => {
    const res = {}
    for (let key in obj) {
        const { url, method = 'get', server = 'control' } = obj[key]
        const hasDomain = /^http/.test(url)
        const URL = hasDomain ? url : `${servers[server]}${url}`
        const REQUEST = methodObj[method]
        res[key] = data => REQUEST(URL, data)
    }
    return res
}

modules.keys().forEach(key => {
    const name = key.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (name !== 'index') {
        api[name] = formatApi(modules(key).default)
    }
})

export default api
