import Vue from 'vue'
import Vuex from 'vuex'

const modules = require.context('./modules', false, /\.js$/)

const obj = {}
modules.keys().forEach(key => {
    const name = key.replace(/^\.\/(.*)\.\w+$/, '$1')
    obj[name] = modules(key).default
})

Vue.use(Vuex)

// 创建store
const store = new Vuex.Store({
    modules: obj
})

export default store
