export default {
    namespaced: true,

    state: {
        value: 1,
    },

    mutations: {
        setValue(state, v) {
            state.value = v
        },
    },

    getters: {
        getValuePlus(state) {
            return state.value + 1
        },
    },
}
