// 浏览器兼容storage
function supportStorage() {
    let flag = false
    if (!window.storage) {
        throw new Error('浏览器不支持storage')
    } else {
        flag = true
    }
    return flag
}

function getStorage(type = 'local') {
    if (type === 'local') {
        return window.localStorage
    } else {
        return window.sessionStorage
    }
}

class StorageUtil {
    /**
     * @param {*storage名} key
     * @param {*storage值} value
     * @param {*类型 session/local} type
     */
    setStorage(key, value, type = 'local') {
        const storage = getStorage(type)
        if (supportStorage) {
            let _value = JSON.stringify(value)
            storage.setItem(key, _value)
        }
    }

    getStorage = (key, type = 'local') => {
        const storage = getStorage(type)
        return storage.getItem(key)
        // return JSON.parse(storage.getItem(key))
    }

    removeStorage = (key, type = 'local') => {
        const storage = getStorage(type)
        return storage.removeItem(key)
    }
    
    clearStorage = (type = 'local') => {
        const storage = getStorage(type)
        return storage.clear()
    }
}

export default new StorageUtil()
