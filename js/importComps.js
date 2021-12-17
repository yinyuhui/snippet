const comps = require.context('./', false, /.(vue)$/)

const modules = comps.keys().reduce((modules, name) => {
  const moduleName = name.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = comps(name)
  modules[moduleName] = value.default
  return modules
}, {})

export default modules
